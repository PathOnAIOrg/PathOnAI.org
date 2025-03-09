import Script from 'next/script';

const GoogleAnalytics: React.FC = () => {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  
  // Don't render the component if measurement ID is not available
  if (!measurementId) return null;
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics; 