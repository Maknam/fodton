const { test, expect } = require("@playwright/test");

const routes = [
  "/", "/about", "/contact", "/events", "/home-care", "/management",
  "/media", "/partnerships", "/research", "/training",
];

const devices = [
  { name: "desktop", viewport: { width: 1440, height: 900 } },
  { name: "tablet", viewport: { width: 768, height: 1024 } },
  { name: "mobile", viewport: { width: 390, height: 844 } },
];

for (const device of devices) {
  test.describe(device.name, () => {
    test.use({ viewport: device.viewport });

    for (const route of routes) {
      test(`${route} renders without browser errors or overflow`, async ({ page }) => {
        const errors = [];
        page.on("console", (message) => {
          if (message.type() === "error") errors.push(message.text());
        });
        page.on("pageerror", (error) => errors.push(error.message));

        const response = await page.goto(route, { waitUntil: "networkidle" });
        expect(response?.ok()).toBeTruthy();
        await expect(page.locator(".site-header")).toBeVisible();
        await expect(page.locator("main, section").first()).toBeVisible();
        await expect(page.locator("footer.footer")).toBeAttached();

        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow, `horizontal overflow on ${route}`).toBeLessThanOrEqual(1);

        const brokenImages = await page.locator("img").evaluateAll((images) => images
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.getAttribute("src")));
        expect(brokenImages, `broken images on ${route}`).toEqual([]);
        expect(errors, `console errors on ${route}`).toEqual([]);
      });
    }
  });
}

test("sticky header remains visible while scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(200);
  const header = page.locator(".site-header");
  await expect(header).toBeVisible();
  expect(Math.abs((await header.boundingBox()).y)).toBeLessThanOrEqual(1);
  await expect(page.locator(".topbar")).toBeVisible();
});

test("mobile navigation opens and exposes every primary destination", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.locator(".mobile-menu summary").click();
  const panel = page.locator(".mobile-menu-panel");
  await expect(panel).toBeVisible();
  for (const path of ["/", "/training", "/research", "/home-care", "/about", "/management", "/events", "/media", "/partnerships", "/contact"]) {
    await expect(panel.locator(`a[href="${path}"]`)).toBeAttached();
  }
  await expect(panel.locator(".mobile-menu-cta")).toBeVisible();
});

test("footer logo loads and is visible", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const logo = page.locator("footer .brand img");
  await logo.scrollIntoViewIfNeeded();
  await expect(logo).toBeVisible();
  expect(await logo.evaluate((image) => image.naturalWidth)).toBeGreaterThan(0);
});
