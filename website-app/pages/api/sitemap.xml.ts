import { NextApiRequest, NextApiResponse } from 'next';

const EXTERNAL_DATA_URL = 'https://pathonai.org';

const generateSiteMap = () => {
  const pages = [
    '',
    '/projects',
    '/services',
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
  res.write(generateSiteMap());
  res.end();
} 