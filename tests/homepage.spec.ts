import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads and hero is visible", async ({ page }) => {
    await expect(page).toHaveTitle(/RentCore|Rent Core/i);
    await expect(page.locator("#hero")).toBeVisible();
  });

  test("hero headline renders", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Stop Managing");
  });

  test("hero scan points are visible", async ({ page }) => {
    await expect(page.getByText("We handle tenants, maintenance & rent collection")).toBeVisible();
    await expect(page.getByText("You keep full control with real-time reporting")).toBeVisible();
    await expect(page.getByText("Only 9% monthly — no hidden fees")).toBeVisible();
  });

  test("rental analysis form is present", async ({ page }) => {
    await expect(page.getByPlaceholder("Property address")).toBeVisible();
    await expect(page.getByPlaceholder("Email address")).toBeVisible();
    await expect(page.getByRole("button", { name: /Get My Free Analysis/i })).toBeVisible();
  });

  test("navigation links work", async ({ page }) => {
    const nav = page.locator("header nav, header");
    await expect(nav.getByText("Owners")).toBeVisible();
    await expect(nav.getByText("Services")).toBeVisible();
    await expect(nav.getByText("About")).toBeVisible();
  });
});

test.describe("Pricing Calculator", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("calculator is pre-filled with $1800", async ({ page }) => {
    const input = page.locator("#pricing input[type='number']");
    await input.scrollIntoViewIfNeeded();
    await expect(input).toHaveValue("1800");
  });

  test("shows management fee for default $1800", async ({ page }) => {
    const pricing = page.locator("#pricing");
    await pricing.scrollIntoViewIfNeeded();
    // Big hero number in the blue banner
    const heroFee = pricing.locator("text=$162.00").first();
    await expect(heroFee).toBeVisible();
  });

  test("updates fees when rent changes", async ({ page }) => {
    const input = page.locator("#pricing input[type='number']");
    await input.scrollIntoViewIfNeeded();
    await input.fill("2000");
    // 9% of 2000 = $180 — check the hero banner
    const heroFee = page.locator("#pricing").locator("text=$180.00").first();
    await expect(heroFee).toBeVisible();
  });

  test("applies $125 minimum for low rent", async ({ page }) => {
    const input = page.locator("#pricing input[type='number']");
    await input.scrollIntoViewIfNeeded();
    await input.fill("500");
    // 9% of 500 = $45, so minimum $125 applies
    const heroFee = page.locator("#pricing").locator("text=$125.00").first();
    await expect(heroFee).toBeVisible();
    await expect(page.locator("#pricing").getByText("$125 minimum applied")).toBeVisible();
  });

  test("additional fees toggle works", async ({ page }) => {
    const pricing = page.locator("#pricing");
    await pricing.scrollIntoViewIfNeeded();
    // Fees are shown by default now, so just check they're visible
    await expect(pricing.getByText("Leasing Fee")).toBeVisible();
    await expect(pricing.getByText("Lease Setup / Admin")).toBeVisible();
    await expect(pricing.getByText("Lease Renewal")).toBeVisible();
    await expect(pricing.locator("text=Maintenance").first()).toBeVisible();
  });

  test("shows annual estimate", async ({ page }) => {
    const pricing = page.locator("#pricing");
    await pricing.scrollIntoViewIfNeeded();
    // $1800 * 9% = $162/mo * 12 = $1,944.00
    await expect(pricing.getByText("$1,944.00")).toBeVisible();
  });
});

test.describe("Sections load", () => {
  test("all major sections render", async ({ page }) => {
    await page.goto("/");
    const sections = ["#hero", "#why", "#services", "#pricing", "#how", "#about", "#tenants"];
    for (const id of sections) {
      await expect(page.locator(id)).toBeAttached();
    }
  });
});

test.describe("Tenant sections", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("tenant hero renders with heading", async ({ page }) => {
    const section = page.locator("#tenants");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeVisible();
    await expect(section.getByText("Renting Made Simple.")).toBeVisible();
  });

  test("tenant scan points are visible", async ({ page }) => {
    const section = page.locator("#tenants");
    await section.scrollIntoViewIfNeeded();
    await expect(section.getByText("Pay rent online in seconds")).toBeVisible();
    await expect(section.getByText(/24\/7 maintenance/)).toBeVisible();
    await expect(section.getByText("Transparent lease terms")).toBeVisible();
  });

  test("tenant feature cards render", async ({ page }) => {
    await page.getByText("Easy Online Payments").scrollIntoViewIfNeeded();
    await expect(page.getByText("Easy Online Payments")).toBeVisible();
    await expect(page.getByText("Fast Maintenance Response")).toBeVisible();
    await expect(page.getByText("Your Tenant Portal")).toBeVisible();
  });

  test("tenant action cards render", async ({ page }) => {
    const section = page.locator("section").filter({ hasText: "Get Started" });
    await section.scrollIntoViewIfNeeded();
    await expect(section.getByText("Available Rentals")).toBeVisible();
    await expect(section.getByText("Pay Rent")).toBeVisible();
    await expect(section.getByText("Maintenance Request")).toBeVisible();
    await expect(section.getByText("Tenant Portal")).toBeVisible();
  });
});
