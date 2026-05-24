const { chromium } = require('playwright');
const { AMZ_URL } = require('./config');

async function fetchPrice() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });

  await page.goto(AMZ_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForSelector('.a-price .a-offscreen', { timeout: 10000 });

  const priceText = await page.$eval('.a-price .a-offscreen', el => el.textContent);
  const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));

  await browser.close();
  return price;
}

module.exports = { fetchPrice };