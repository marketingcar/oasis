import React from 'react';

/**
 * OptimizedImage component that provides WebP images with PNG/JPG fallbacks
 * Uses the <picture> element for modern browser support with graceful degradation
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  sizes
}) => {
  if (!src) {
    return null;
  }

  // Check if the image is from an external source
  const isExternal = src.startsWith('http://') || src.startsWith('https://');

  // For external images (like Ghost featured images), try to get WebP version
  // Many CDNs support format conversion via query parameters or URL patterns
  const getWebPUrl = (originalUrl) => {
    // Ghost with Cloudflare Images or similar CDN support
    if (originalUrl.includes('cloudflare') || originalUrl.includes('imagedelivery')) {
      return originalUrl.replace(/\.(jpg|jpeg|png)/, '.webp');
    }

    // For other CDNs, try adding format parameter
    if (originalUrl.includes('?')) {
      return `${originalUrl}&format=webp`;
    }

    // Try replacing extension
    return originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  const webpSrc = isExternal ? getWebPUrl(src) : src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  // Determine the fallback format from the original source
  const fallbackSrc = src;

  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source
        type="image/webp"
        srcSet={webpSrc}
        sizes={sizes}
      />

      {/* Fallback to original format (PNG/JPG) */}
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
