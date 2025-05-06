import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "PathOnAI.org - Open-Source AI Agent Technology",
  description = "PathOnAI.org is an open-source non-profit AI research organization focused on advancing AI agent technology.",
  ogImage = "/pathonai_org.png",
  ogType = "website",
}) => {
  const router = useRouter();
  const baseUrl = "https://pathonai.org";
  const canonicalUrl = `${baseUrl}${router.asPath === "/" ? "" : router.asPath}`;
  
  // Convert relative image URLs to absolute URLs for og:image
  const fullOgImageUrl = ogImage.startsWith('http') 
    ? ogImage 
    : `${baseUrl}${ogImage}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default SEO;