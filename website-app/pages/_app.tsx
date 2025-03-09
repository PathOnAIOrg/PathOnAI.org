import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        titleTemplate="%s | PathOnAI.org"
        defaultTitle="PathOnAI.org - Open-Source AI Agent Technology"
        description="PathOnAI.org is an open-source non-profit AI research organization focused on advancing AI agent technology."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://pathonai.org/',
          siteName: 'PathOnAI.org',
          images: [
            {
              url: 'https://pathonai.org/og-image.png',
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