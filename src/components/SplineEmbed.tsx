import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-200 w-full h-full rounded-lg" />
  ),
});

interface SplineEmbedProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

export function SplineEmbed({ url, className, style }: SplineEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className || ''}`} style={style}>
      <Spline
        scene={url}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />
      )}
    </div>
  );
}