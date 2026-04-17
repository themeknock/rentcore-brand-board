import { test, expect } from "@playwright/test";

test.describe("UX Audit — Full Page Screenshots", () => {
  test("capture all sections for review", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    // Full page
    await page.screenshot({ path: "ux-audit/00-full-page.png", fullPage: true });

    // Hero
    await page.locator("#hero").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "ux-audit/01-hero.png" });

    // Trust Bar — scroll past hero
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(500);
    await page.screenshot({ path: "ux-audit/02-trust-bar.png" });

    // Why RentCore
    const why = page.locator("#why");
    if (await why.count()) {
      await why.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: "ux-audit/03-why-rentcore.png" });
    }

    // Services
    const services = page.locator("#services");
    if (await services.count()) {
      await services.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: "ux-audit/04-services.png" });
    }

    // Pricing
    const pricing = page.locator("#pricing");
    await pricing.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "ux-audit/05-pricing-default.png" });

    // Pricing — toggle fees open
    const toggle = pricing.getByText("Show details");
    if (await toggle.count()) {
      await toggle.click();
      await page.waitForTimeout(300);
      await page.screenshot({ path: "ux-audit/06-pricing-fees-open.png" });
    }

    // How it works
    const how = page.locator("#how");
    if (await how.count()) {
      await how.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: "ux-audit/07-how-it-works.png" });
    }

    // About
    const about = page.locator("#about");
    if (await about.count()) {
      await about.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: "ux-audit/08-about.png" });
    }

    // Areas
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: "ux-audit/09-areas-cta.png" });

    // Footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.screenshot({ path: "ux-audit/10-footer.png" });
  });

  test("mobile viewport audit", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "networkidle" });

    await page.screenshot({ path: "ux-audit/11-mobile-hero.png" });

    await page.evaluate(() => window.scrollBy(0, 900));
    await page.waitForTimeout(500);
    await page.screenshot({ path: "ux-audit/12-mobile-trust.png" });

    const pricing = page.locator("#pricing");
    await pricing.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "ux-audit/13-mobile-pricing.png" });

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.screenshot({ path: "ux-audit/14-mobile-footer.png" });
  });
});
