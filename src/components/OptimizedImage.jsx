import React from 'react';

/**
 * OptimizedImage Component
 * Automatically serves WebP with fallback to JPEG/PNG
 * Supports responsive images and lazy loading
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  sizes,
  priority = false,
  objectFit = 'cover',
  ...props
}) => {
  if (!src) {
    return null;
  }

  // If src is external URL, just use it directly
  if (src.startsWith('http')) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        style={objectFit ? { objectFit } : undefined}
        {...props}
      />
    );
  }

  // Generate WebP source from original
  const getWebPSrc = (originalSrc) => {
    const ext = originalSrc.match(/\.(jpg|jpeg|png)$/i);
    if (!ext) return null;
    return originalSrc.replace(ext[0], '.webp');
  };

  const webpSrc = getWebPSrc(src);

  return (
    <picture className={className}>
      {/* WebP - Modern format with great compression */}
      {webpSrc && (
        <source
          type="image/webp"
          srcSet={webpSrc}
          sizes={sizes}
        />
      )}

      {/* Fallback - Original format (JPEG/PNG) */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        style={objectFit ? { objectFit } : undefined}
        {...props}
      />
    </picture>
  );
};

/**
 * Responsive Image Component
 * Serves different image sizes based on viewport
 */
export const ResponsiveImage = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  ...props
}) => {
  if (!src) return null;

  // Generate responsive srcSet
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc || baseSrc.startsWith('http')) return baseSrc;

    const ext = baseSrc.match(/\.(jpg|jpeg|png|webp)$/i);
    if (!ext) return baseSrc;

    const base = baseSrc.replace(ext[0], '');
    const format = ext[0];

    // Return srcset with multiple sizes
    return [
      `${base}-medium${format} 800w`,
      `${base}-large${format} 1200w`,
      `${base}-xlarge${format} 1920w`,
    ].join(', ');
  };

  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <picture className={className}>
      {webpSrc && (
        <source
          type="image/webp"
          srcSet={generateSrcSet(webpSrc)}
          sizes={sizes}
        />
      )}
      <img
        src={src}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
