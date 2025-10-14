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

  // Check if the image is local (starts with /)
  const isLocal = src.startsWith('/');

  // For local images, we have both .jpg and .webp versions
  if (isLocal) {
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const fallbackSrc = src;

    return (
      <picture>
        <source type="image/webp" srcSet={webpSrc} sizes={sizes} />
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
  }

  // For external images, just use the original
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
    />
  );
};

export default OptimizedImage;
