import { chromium } from "playwright";

(async () => {

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://snozoneuk.com/holiday-camps");

  // click snowboard holiday camps "Book now"
  await page.locator("text=Snowboard Holiday Camps").locator("..").getByRole("button", { name: "Book now" }).click();

  await page.waitForSelector("select");

  // Milton Keynes
  await page.selectOption("select:nth-of-type(1)", { label: "Milton Keynes" });

  // Week
  await page.selectOption("select:nth-of-type(2)", { label: "Week" });

  // quantity
  await page.fill("input", "1");

  await page.getByRole("button", { name: "Continue" }).click();

  await page.waitForSelector(".ui-datepicker");

  // move calendar until May
  for (let i = 0; i < 12; i++) {

    const month = await page.locator(".ui-datepicker-month").innerText();

    if (month.includes("May")) break;

    await page.click(".ui-datepicker-next");
  }

  const availableDays = await page.locator(
    'td[data-handler="selectDay"][data-month="4"]'
  ).count();

  console.log("Available days:", availableDays);

  if (availableDays > 0) {
    console.log("MAY DATES AVAILABLE");
  }

  await page.screenshot({ path: "calendar.png" });

  await browser.close();

})();
