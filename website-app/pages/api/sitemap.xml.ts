import { NextApiRequest, NextApiResponse } from 'next';

const EXTERNAL_DATA_URL = 'https://pathonai.org';

const generateSiteMap = () => {
  const pages = [
    '',
    '/ai-agent-projects',
    '/services',
    '/privacy-policy',
    '/services/professional-development',
    // Add other pages here
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}${page}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>1.0</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  
  const sitemap = generateSiteMap();
  
  res.write(sitemap);
  res.end();
} 