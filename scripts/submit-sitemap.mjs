import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// Script to submit sitemap to Google Search Console API
// Can be run locally or within a CI/CD pipeline after a successful deploy.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mockbrand.alfo.online';
const sitemaps = [
  `${SITE_URL}/sitemap.xml`,
];

async function submitSitemaps() {
  console.log('Submitting sitemaps to Google Search Console API...');

  // Requires a service account JSON file for authentication
  const keyFilePath = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(process.cwd(), 'service-account.json');

  if (!fs.existsSync(keyFilePath)) {
    console.error(`❌ Missing service account key file at ${keyFilePath}. Skipping submission.`);
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const webmasters = google.webmasters({ version: 'v3', auth });

    for (const feedpath of sitemaps) {
      console.log(`Submitting ${feedpath}...`);
      await webmasters.sitemaps.submit({
        siteUrl: SITE_URL,
        feedpath: feedpath,
      });
      console.log(`✅ Successfully submitted: ${feedpath}`);
    }
  } catch (error) {
    console.error('❌ Error submitting sitemaps:', error.message);
  }
}

submitSitemaps();