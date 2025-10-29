import React from 'react';
import SEO, { getArticleSchema, getBreadcrumbSchema } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const Post3 = () => {
  const heroImage = "https://images.unsplash.com/photo-1700941019917-731dc64ce685";
  const title = "The Power of Connection in Mental Wellness";
  const description = "Human connection is vital for mental health. Explore how strong social bonds can support you through tough times and contribute to a happier, more fulfilling life.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        url="/blog/the-power-of-connection-in-mental-wellness"
        image={heroImage}
        type="article"
        schema={[
          getArticleSchema({
            title: title,
            description: description,
            image: heroImage,
            publishedAt: '2025-01-15T00:00:00.000Z',
            updatedAt: '2025-01-15T00:00:00.000Z'
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: title, url: '/blog/the-power-of-connection-in-mental-wellness' }
          ])
        ]}
      />

      <div className="bg-white">
        <div className="relative">
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-[#EFAB2E] to-[#6D519D]">
            <OptimizedImage className="w-full h-full object-cover opacity-30" alt="Abstract network of glowing lines representing connection" src={heroImage} priority={true} />
          </div>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-bold">The Power of Connection in Mental Wellness</h1>
              <p className="text-lg md:text-xl mt-4">Posted on October 2, 2025</p>
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
            <div className="prose lg:prose-xl max-w-none text-[#4A5455] leading-relaxed">
              <p className="lead text-xl mb-8">
                As humans, we are wired for connection. The relationships we build with others are not just a source of joy; they are a fundamental component of our mental and emotional well-being. In a world that can sometimes feel isolating, nurturing our social bonds is more important than ever.
              </p>
              
              <h2 className="text-3xl font-bold text-[#2D6762] mt-12 mb-4">Why Connection Matters</h2>
              <p>
                Strong social connections can provide a sense of belonging and purpose. They offer a support system during difficult times, reducing feelings of loneliness and despair. Sharing experiences with others—both good and bad—helps us feel understood and validated. Research has shown that people with strong social support networks tend to be healthier, happier, and live longer.
              </p>

              <h2 className="text-3xl font-bold text-[#2D6762] mt-12 mb-4">Ways to Cultivate Connection</h2>
              <p>
                Building and maintaining relationships takes effort, but it's a worthwhile investment.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Be Present:</strong> When you're with someone, give them your full attention. Put away your phone and listen actively.</li>
                <li><strong>Reach Out:</strong> Don't wait for others to contact you. A simple text, call, or email can make a big difference.</li>
                <li><strong>Join a Group:</strong> Find a club, class, or volunteer opportunity centered around a hobby or cause you care about.</li>
                <li><strong>Practice Vulnerability:</strong> Opening up to trusted friends or family can deepen your relationships and foster mutual support.</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#2D6762] mt-12 mb-4">Professional Support is a Connection, Too</h2>
              <p>
                Sometimes, the most important connection you can make is with a mental health professional. Therapy provides a safe, confidential space to explore your feelings and develop healthier relationship patterns. At Oasis Health Services, our providers are here to be a compassionate, supportive part of your wellness journey.
              </p>
            </div>

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

export default Post3;