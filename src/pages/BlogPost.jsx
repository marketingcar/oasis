import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Dynamically import the post data
        const postData = await import(`@/data/posts/${slug}.json`);
        setPost(postData.default);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Post not found');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-xl text-[#4A5455]">Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-[#4A5455] mb-4">{error || 'Post not found'}</p>
          <Link to="/blog" className="inline-flex items-center text-[#2D6762] font-semibold hover:text-[#6D519D] transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const siteUrl = 'https://oasishealthservices.org';
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const ogImage = post.feature_image || `${siteUrl}/og-default.png`;

  return (
    <>
      <Helmet>
        <title>{post.title} - Oasis Health Services Blog</title>
        <meta name="description" content={post.excerpt || post.custom_excerpt} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || post.custom_excerpt} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Oasis Health Services" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={postUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || post.custom_excerpt} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical URL */}
        <link rel="canonical" href={postUrl} />
      </Helmet>

      <div className="bg-white">
        <div className="relative">
          {post.feature_image && (
            <div className="w-full h-64 md:h-96 relative">
              <OptimizedImage
                src={post.feature_image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D6762]/70 to-[#69A08B]/70"></div>
            </div>
          )}
          {!post.feature_image && (
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-[#2D6762] to-[#69A08B]"></div>
          )}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-bold">{post.title}</h1>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-12 text-center">
              <Link to="/blog" className="inline-flex items-center text-[#2D6762] font-semibold hover:text-[#6D519D] transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
