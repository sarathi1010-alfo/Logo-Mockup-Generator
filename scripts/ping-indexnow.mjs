/**
 * Script to ping IndexNow API with newly updated URLs
 */
const API_KEY = process.env.INDEXNOW_API_KEY || 'dummy_key_for_testing';
const HOST = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).host : 'mockupforge.alfo.online';

const URLS_TO_PING = [
  `https://${HOST}/blog/logo-mockup-guide`,
  `https://${HOST}/mockups/coffee-cup-logo-mockup`,
  `https://${HOST}/mockups/t-shirt-logo-mockup`,
  `https://${HOST}/mockups/tshirt-logo-mockup`,
  `https://${HOST}/mockups/stationery-mockup`,
  `https://${HOST}/mockups/billboard-mockup`,
  `https://${HOST}/mockups/signage-mockup`,
  `https://${HOST}/mockups/product-packaging-mockup`,
  `https://${HOST}/industries/fashion-logo-mockup`,
  `https://${HOST}/industries/food-beverage-logo-mockup`,
  `https://${HOST}/industries/tech-startup-logo-mockup`,
];

async function pingIndexNow() {
  console.log(`Pinging IndexNow API for ${URLS_TO_PING.length} URLs...`);

  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        host: HOST,
        key: API_KEY,
        keyLocation: `https://${HOST}/${API_KEY}.txt`,
        urlList: URLS_TO_PING
      })
    });

    if (response.ok) {
      console.log('✅ Successfully pinged IndexNow API.');
    } else {
      console.error(`❌ Failed to ping IndexNow API. Status: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('❌ Error pinging IndexNow API:', error.message);
  }
}

pingIndexNow();
