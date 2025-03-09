import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "PathOnAI.org - Open-Source AI Agent Technology",
  description = "PathOnAI.org is an open-source non-profit AI research organization focused on advancing AI agent technology.",
  ogImage = "/og-image.png",
  canonicalUrl = "https://pathonai.org"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImage} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;