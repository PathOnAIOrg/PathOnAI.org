declare interface Window {
  gtag: (
    command: 'config' | 'event',
    targetId: string,
    config?: {
      page_path?: string;
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
} 