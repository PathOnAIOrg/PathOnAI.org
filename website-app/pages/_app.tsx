import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from 'next-seo';
import GoogleAnalytics from "../components/GoogleAnalytics";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <GoogleAnalytics />
      <DefaultSeo
        titleTemplate="%s | PathOnAI.org"
        defaultTitle="Open-Source Robotics + AI Agent Technology"
        description="PathOnAI.org is an open-source non-profit AI research organization focused on advancing AI agent technology."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://pathonai.org/',
          siteName: 'PathOnAI.org',
          images: [
            {
              url: 'https://pathonai.org/pathonai_org.png',
              width: 1200,
              height: 630,
              alt: 'PathOnAI.org',
            },
          ],
        }}
        twitter={{
          handle: '@pathonai',
          site: '@pathonai',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
