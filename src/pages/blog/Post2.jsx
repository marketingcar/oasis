import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Post2 = () => {
  return (
    <>
      <Helmet>
        <title>Mindfulness for Beginners - Oasis Health Services Blog</title>
        <meta name="description" content="Discover the basics of mindfulness and how this simple practice can reduce stress, improve focus, and bring a sense of calm to your everyday life." />
      </Helmet>

      <div className="bg-white">
        <div className="relative">
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-[#6D519D] to-[#90AB98]">
            <img className="w-full h-full object-cover opacity-30" alt="A serene natural landscape with soft light" src="https://images.unsplash.com/photo-1503410251743-18dd14ad12f5" />
          </div>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-bold">Mindfulness for Beginners: A Path to Inner Peace</h1>
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
                In our fast-paced world, finding a moment of peace can feel like a luxury. Mindfulness is a simple yet powerful practice that can help you find that calm. It’s about paying attention to the present moment without judgment. Anyone can do it, and the benefits are immense.
              </p>
              
              <h2 className="text-3xl font-bold text-[#2D6762] mt-12 mb-4">What is Mindfulness?</h2>
              <p>
                Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us. While mindfulness is something we all naturally possess, it’s more readily available to us when we practice on a daily basis.
              </p>

              <h2 className="text-3xl font-bold text-[#2D6762] mt-12 mb-4">A Simple Mindfulness Exercise</h2>
              <p>
                You can practice mindfulness anywhere, at any time. Here’s a simple exercise to get you started:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-4">
                <li><strong>Find a comfortable position.</strong> You can sit on a chair, a cushion, or even lie down.</li>
                <li><strong>Focus on your breath.</strong> Notice the sensation of your breath as it enters and leaves your body. Don't try to change it, just observe.</li>
                <li><strong>Acknowledge your thoughts.</strong> Your mind will wander. When it does, gently acknowledge the thought and then guide your focus back to your breath.</li>
                <li><strong>Start small.</strong> Try this for just 5 minutes a day. Consistency is more important than duration.</li>
              </ol>

              <h2 className="text-3xl font-bold text-[#2D6762] mt-12 mb-4">Benefits of Mindfulness</h2>
              <p>
                Regular practice can lead to reduced stress, better focus, improved emotional regulation, and a greater sense of well-being. It’s a tool that helps you navigate life’s challenges with more grace and less reactivity.
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

export default Post2;