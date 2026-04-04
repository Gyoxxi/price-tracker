require('dotenv').config();
const { fetchPrice } = require('./scraper');
const { sendAlert } = require('./mailer');
const { PRICE_THRESHOLD } = require('./config');

async function runCheck() {
  console.log(`[${new Date().toISOString()}] Running price check...`);
  try {
    const price = await fetchPrice();
    console.log(`Current price: $${price}`);

    if (price <= PRICE_THRESHOLD) {
      console.log(`Price $${price} is at or below $${PRICE_THRESHOLD}! Sending alert...`);
      await sendAlert(price);
    } else {
      console.log(`Price $${price} is above $${PRICE_THRESHOLD}, no email sent.`);
    }
  } catch (err) {
    console.error('Check failed:', err.message);
    process.exit(1);
  }
}

runCheck();