// config.js
const ASIN = 'B09S8WMJY9'; // get this from the Amazon product URL
const AMZ_URL  = `https://www.amazon.com/dp/${ASIN}`;
const PRICE_THRESHOLD = 70;

module.exports = { ASIN, AMZ_URL, PRICE_THRESHOLD };