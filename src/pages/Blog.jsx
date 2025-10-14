import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blogPosts from '@/data/blog-posts.json';
import OptimizedImage from '@/components/OptimizedImage';

const Blog = () => {
  const posts = blogPosts;

  return (
    <>
      <Helmet>
        <title>Blog - Oasis Health Services</title>
        <meta name="description" content="Explore articles on mental health, wellness, and personal growth from the experts at Oasis Health Services." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              From the Oasis Blog
            </h1>
            <p className="text-xl text-white/90">
              Insights and advice for your mental wellness journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[#4A5455]">No posts found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="aspect-w-16 aspect-h-9 h-64">
                      <OptimizedImage
                        src={post.feature_image || 'https://images.unsplash.com/photo-1595872018818-97555653a011'}
                        alt={post.title}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-[#2D6762] mb-3">
                      <Link to={`/blog/${post.slug}`} className="hover:text-[#6D519D] transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-[#4A5455] leading-relaxed mb-4 flex-grow">
                      {post.excerpt || post.custom_excerpt}
                    </p>
                    <Link to={`/blog/${post.slug}`} className="font-semibold text-[#2D6762] hover:text-[#6D519D] transition-colors flex items-center group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;