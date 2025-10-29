import React from 'react';
import SEO, { getArticleSchema, getBreadcrumbSchema } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const Post1 = () => {
  const heroImage = "https://images.unsplash.com/photo-1602350558299-3e058bf4878d";
  const title = "Understanding Anxiety and How to Cope";
  const description = "Anxiety is a common human experience, but when it becomes overwhelming, it can impact your daily life. Learn about the different types of anxiety and effective coping strategies.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        url="/blog/understanding-anxiety-and-how-to-cope"
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
            { name: title, url: '/blog/understanding-anxiety-and-how-to-cope' }
          ])
        ]}
      />

      <div className="bg-white">
        <div className="relative">
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-[#2D6762] to-[#69A08B]">
            <OptimizedImage className="w-full h-full object-cover opacity-30" alt="Abstract representation of calming waves" src={heroImage} priority={true} />
          </div>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-bold">Understanding Anxiety and How to Cope</h1>
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
                Anxiety is more than just feeling stressed or worried. While it's a normal human emotion, it can sometimes become persistent and overwhelming, interfering with your daily life. Understanding what anxiety is, its common triggers, and effective coping mechanisms is the first step toward managing it.
              </p>
              
              <h2 className="text-3xl font-bold text-[#2D6762] mt-12 mb-4">What is Anxiety?</h2>
              <p>
                Anxiety is your body's natural response to stress. It’s a feeling of fear or apprehension about what’s to come. The first day of school, going to a job interview, or giving a speech may cause most people to feel fearful and nervous. But if your feelings of anxiety are extreme, last for longer than six months, and are interfering with your life, you may have an anxiety disorder.
              </p>

              <h2 className="text-3xl font-bold text-[#2D6762] mt-12 mb-4">Coping Strategies</h2>
              <p>
                Managing anxiety is a personal journey, but several strategies can help.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Mindfulness and Meditation:</strong> Practicing mindfulness can help you stay grounded in the present moment and reduce the power of anxious thoughts.</li>
                <li><strong>Physical Activity:</strong> Regular exercise is a powerful stress reducer. It can improve your mood and help you relax.</li>
                <li><strong>Healthy Diet:</strong> A balanced diet can support your overall mental well-being. Try to limit caffeine and alcohol, which can trigger or worsen anxiety.</li>
                <li><strong>Breathing Exercises:</strong> Deep, slow breathing can help calm your nervous system. Try the 4-7-8 technique: inhale for 4 seconds, hold for 7, and exhale for 8.</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#2D6762] mt-12 mb-4">When to Seek Help</h2>
              <p>
                If anxiety is disrupting your work, school, or relationships, it may be time to seek professional help. A therapist can provide you with tools and strategies to combat anxiety, and a psychiatrist can determine if medication is a suitable option for you. Remember, asking for help is a sign of strength.
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

export default Post1;