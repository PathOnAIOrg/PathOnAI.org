import React from 'react';

// Define a more specific type for JSON-LD data
type JsonLdData = {
  '@context': string;
  '@type': string;
  [key: string]: string | string[] | number | boolean | Record<string, unknown> | undefined;
};

interface JsonLdProps {
  data: JsonLdData;
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd; 