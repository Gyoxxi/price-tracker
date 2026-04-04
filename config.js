// config.js
const ASIN = 'B09S8WMJY9'; // get this from the Amazon product URL
const URL  = `https://www.amazon.com/dp/${ASIN}`;
const PRICE_THRESHOLD = 70;

module.exports = { ASIN, URL, PRICE_THRESHOLD };