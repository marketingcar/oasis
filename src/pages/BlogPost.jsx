import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ghostAPI from '@/lib/ghost';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await ghostAPI.posts.read({ slug }, { formats: ['html'] });
        setPost(fetchedPost);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Post not found');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - Oasis Health Services Blog</title>
        <meta name="description" content={post.excerpt || post.custom_excerpt} />
      </Helmet>

      <div className="bg-white">
        <div className="relative">
          {post.feature_image && (
            <div className="w-full h-64 md:h-96 relative">
              <img
                className="w-full h-full object-cover"
                alt={post.title}
                src={post.feature_image}
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
              <p className="text-lg md:text-xl mt-4">Posted on {formatDate(post.published_at)}</p>
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
              className="prose lg:prose-xl max-w-none text-[#4A5455] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.html }}
              style={{
                '--tw-prose-headings': '#2D6762',
                '--tw-prose-links': '#2D6762',
                '--tw-prose-bold': '#2D6762',
              }}
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
