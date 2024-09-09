/*
import fs from 'fs';
import path from 'path';
import { DOMAIN } from "../config";
import { chaptersData } from '../config';

const CHAPTERS_PER_SITEMAP = 25000;

// Generate XML sitemap
const generateXmlSitemap = (chapters) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
      <loc>${`${DOMAIN}`}</loc>
      <priority>0.9</priority>
    </url>
  
  `;



    chapters.forEach((chapter) => {
        xml += `
    <url>
      <loc>${`${DOMAIN}/chapter-${chapter.chapterNumber}`}</loc>
      <priority>0.8</priority>
    </url>`;
    });

    xml += '</urlset>';
    return xml;
};

export async function getServerSideProps() {
    const totalSitemaps = Math.ceil(chaptersData.length / CHAPTERS_PER_SITEMAP);

    // Ensure the public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    // Create sitemap files based on the chapters data
    for (let i = 0; i < totalSitemaps; i++) {
        const start = i * CHAPTERS_PER_SITEMAP;
        const end = start + CHAPTERS_PER_SITEMAP;
        const chunk = chaptersData.slice(start, end);

        const sitemapContent = generateXmlSitemap(chunk);
        const sitemapPath = path.join(publicDir, `sitemap.xml`);

        // Write the sitemap to the public directory
        fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    }

    return { props: {} };
}

export default function Sitemap() {
    return null;
}

*/

export default function Sitemap() {
    return null;
}
