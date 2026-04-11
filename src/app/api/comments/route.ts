import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "comments.json");

function readComments() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeComments(comments: unknown[]) {
  fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));
}

export async function GET() {
  return NextResponse.json(readComments());
}

export async function POST(request: Request) {
  const comment = await request.json();
  const comments = readComments();
  comments.push(comment);
  writeComments(comments);
  return NextResponse.json(comment, { status: 201 });
}

export async function PUT(request: Request) {
  const { id, ...updates } = await request.json();
  const comments = readComments();
  const idx = comments.findIndex((c: { id: string }) => c.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  comments[idx] = { ...comments[idx], ...updates };
  writeComments(comments);
  return NextResponse.json(comments[idx]);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  let comments = readComments();
  comments = comments.filter((c: { id: string }) => c.id !== id);
  writeComments(comments);
  return NextResponse.json({ ok: true });
}
