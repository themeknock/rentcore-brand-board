"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ZoomIn, ZoomOut, Maximize2, MessageCircle, X, Send, Trash2 } from "lucide-react";

interface Comment {
  id: string;
  x: number;
  y: number;
  text: string;
  author: string;
  time: string;
  resolved: boolean;
}

export default function CanvasWrapper({ children }: { children: React.ReactNode }) {
  const [zoom, setZoom] = useState(0.65);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [drag, setDrag] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [commentMode, setCommentMode] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeComment, setActiveComment] = useState<string | null>(null);
  const [newText, setNewText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [pendingPin, setPendingPin] = useState<{ x: number; y: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load comments from API
  useEffect(() => {
    fetch("https://rentcore-comments-api.themeknock.workers.dev/comments").then(r => r.json()).then(setComments).catch(() => {});
    const name = localStorage.getItem("rentcore-author");
    if (name) setAuthorName(name);
    // Poll for new comments every 10 seconds
    const interval = setInterval(() => {
      fetch("https://rentcore-comments-api.themeknock.workers.dev/comments").then(r => r.json()).then(setComments).catch(() => {});
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      setZoom((z) => Math.min(Math.max(z + (e.deltaY > 0 ? -0.05 : 0.05), 0.2), 1.5));
    } else {
      setPos((p) => ({ x: p.x - e.deltaX * 0.8, y: p.y - e.deltaY * 0.8 }));
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
      return () => el.removeEventListener("wheel", handleWheel);
    }
  }, [handleWheel]);

  // Handle canvas click — comment mode places a pin
  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!commentMode) return;
    const tag = (e.target as HTMLElement).tagName;
    if (tag === "BUTTON" || tag === "INPUT" || tag === "TEXTAREA") return;

    // Convert screen coords to canvas coords
    const canvasX = (e.clientX - pos.x) / zoom;
    const canvasY = (e.clientY - pos.y) / zoom;

    setPendingPin({ x: canvasX, y: canvasY });
    setActiveComment(null);
    setNewText("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const submitComment = async () => {
    if (!newText.trim() || !pendingPin) return;
    const name = authorName.trim() || "Client";
    if (!authorName.trim()) setAuthorName("Client");
    localStorage.setItem("rentcore-author", name);

    const comment: Comment = {
      id: Date.now().toString(),
      x: pendingPin.x,
      y: pendingPin.y,
      text: newText.trim(),
      author: name,
      time: new Date().toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }),
      resolved: false,
    };
    setComments((prev) => [...prev, comment]);
    setPendingPin(null);
    setNewText("");
    await fetch("https://rentcore-comments-api.themeknock.workers.dev/comments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(comment) });
  };

  const deleteComment = async (id: string) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
    setActiveComment(null);
    await fetch("https://rentcore-comments-api.themeknock.workers.dev/comments", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
  };

  const toggleResolve = async (id: string) => {
    const c = comments.find((c) => c.id === id);
    if (!c) return;
    const resolved = !c.resolved;
    setComments((prev) => prev.map((c) => c.id === id ? { ...c, resolved } : c));
    await fetch("https://rentcore-comments-api.themeknock.workers.dev/comments", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, resolved }) });
  };

  return (
    <div
      ref={ref}
      className="w-screen h-screen overflow-hidden relative"
      style={{
        cursor: commentMode ? "crosshair" : drag ? "grabbing" : "grab",
        background: "#0a0a10",
      }}
      onMouseDown={(e) => {
        if (commentMode) return;
        const tag = (e.target as HTMLElement).tagName;
        if (tag === "BUTTON" || tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
        setDrag(true);
        setStart({ x: e.clientX - pos.x, y: e.clientY - pos.y });
      }}
      onMouseMove={(e) => { if (drag) setPos({ x: e.clientX - start.x, y: e.clientY - start.y }); }}
      onMouseUp={() => setDrag(false)}
      onMouseLeave={() => setDrag(false)}
      onClick={handleCanvasClick}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: `${20 * zoom}px ${20 * zoom}px`,
        }}
      />

      {/* Content */}
      <div
        className="absolute origin-top-left will-change-transform"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${zoom})` }}
      >
        {children}

        {/* Comment pins on canvas */}
        {comments.map((c) => (
          <div
            key={c.id}
            className="absolute"
            style={{ left: c.x, top: c.y, zIndex: 1000 }}
          >
            {/* Pin */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveComment(activeComment === c.id ? null : c.id);
                setPendingPin(null);
              }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-lg cursor-pointer transition-transform hover:scale-110 ${
                c.resolved
                  ? "bg-[#059669] opacity-50"
                  : "bg-[#F97316]"
              }`}
              style={{ transform: `scale(${1 / zoom})` }}
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Comment popup */}
            {activeComment === c.id && (
              <div
                className="absolute top-0 left-10 w-[280px] bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
                style={{ transform: `scale(${1 / zoom})`, transformOrigin: "top left" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b border-[#F1F5F9]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-[#F97316]">{c.author[0]}</span>
                      </div>
                      <span className="text-[13px] font-[family-name:var(--font-heading)] font-semibold text-[#0F172A]">{c.author}</span>
                    </div>
                    <span className="text-[10px] text-[#94A3B8]">{c.time}</span>
                  </div>
                  <p className="text-[13px] text-[#334155] leading-relaxed">{c.text}</p>
                </div>
                <div className="p-3 flex items-center justify-between bg-[#F8FAFC]">
                  <button
                    onClick={() => toggleResolve(c.id)}
                    className={`text-[11px] font-medium px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${
                      c.resolved
                        ? "bg-[#059669]/10 text-[#059669]"
                        : "bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]"
                    }`}
                  >
                    {c.resolved ? "✓ Resolved" : "Mark Resolved"}
                  </button>
                  <button
                    onClick={() => deleteComment(c.id)}
                    className="p-1.5 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-red-400" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Pending pin (new comment being typed) */}
        {pendingPin && (
          <div
            className="absolute"
            style={{ left: pendingPin.x, top: pendingPin.y, zIndex: 1001 }}
          >
            <div
              className="w-8 h-8 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white shadow-lg animate-pulse"
              style={{ transform: `scale(${1 / zoom})` }}
            >
              <MessageCircle className="w-4 h-4" />
            </div>
            <div
              className="absolute top-0 left-10 w-[300px] bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
              style={{ transform: `scale(${1 / zoom})`, transformOrigin: "top left" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#E2E8F0] text-[12px] text-[#0F172A] placeholder:text-[#94A3B8] mb-2 outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10"
                />
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Add a comment..."
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") submitComment(); }}
                    className="flex-1 px-3 py-2 rounded-lg border border-[#E2E8F0] text-[13px] text-[#0F172A] placeholder:text-[#94A3B8] outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10"
                  />
                  <button
                    onClick={submitComment}
                    disabled={!newText.trim()}
                    className="px-3 py-2 bg-[#1D4ED8] text-white rounded-lg cursor-pointer disabled:opacity-30 hover:bg-[#1E40AF] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="px-4 pb-3">
                <button
                  onClick={() => setPendingPin(null)}
                  className="text-[11px] text-[#94A3B8] hover:text-[#64748B] cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Bottom toolbar ── */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-black/70 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-3 py-2 shadow-2xl">
        {/* Zoom controls */}
        <button onClick={() => setZoom((z) => Math.max(z - 0.1, 0.2))} className="p-2 hover:bg-white/10 rounded-xl cursor-pointer transition-colors">
          <ZoomOut className="w-4 h-4 text-white/50" />
        </button>
        <span className="w-16 text-center text-[11px] font-mono text-white/40">{Math.round(zoom * 100)}%</span>
        <button onClick={() => setZoom((z) => Math.min(z + 0.1, 1.5))} className="p-2 hover:bg-white/10 rounded-xl cursor-pointer transition-colors">
          <ZoomIn className="w-4 h-4 text-white/50" />
        </button>
        <div className="w-px h-4 bg-white/10 mx-1" />
        <button onClick={() => { setZoom(0.65); setPos({ x: 0, y: 0 }); }} className="p-2 hover:bg-white/10 rounded-xl cursor-pointer transition-colors">
          <Maximize2 className="w-4 h-4 text-white/50" />
        </button>
        <div className="w-px h-4 bg-white/10 mx-1" />

        {/* Comment toggle */}
        <button
          onClick={() => { setCommentMode(!commentMode); setPendingPin(null); setActiveComment(null); }}
          className={`p-2 rounded-xl cursor-pointer transition-colors flex items-center gap-2 ${
            commentMode ? "bg-[#F97316] text-white" : "hover:bg-white/10"
          }`}
        >
          <MessageCircle className={`w-4 h-4 ${commentMode ? "text-white" : "text-white/50"}`} />
          {commentMode && <span className="text-[11px] font-medium pr-1">Click to comment</span>}
        </button>

        {/* Comment count */}
        {comments.length > 0 && (
          <>
            <div className="w-px h-4 bg-white/10 mx-1" />
            <span className="text-[11px] text-white/30 px-2">
              {comments.filter(c => !c.resolved).length} comment{comments.filter(c => !c.resolved).length !== 1 ? "s" : ""}
            </span>
          </>
        )}
      </div>

      {/* Comment mode banner */}
      {commentMode && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#F97316] text-white px-5 py-2.5 rounded-2xl shadow-xl">
          <MessageCircle className="w-4 h-4" />
          <span className="text-[13px] font-medium">Click anywhere on the board to add a comment</span>
          <button onClick={() => { setCommentMode(false); setPendingPin(null); }} className="ml-2 p-1 hover:bg-white/20 rounded-lg cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
