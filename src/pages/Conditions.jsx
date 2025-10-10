import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Heart, Users, Shield } from 'lucide-react';

const Conditions = () => {
  const conditions = [
    {
      title: 'Anxiety Disorders',
      description: 'Excessive fear or worry that disrupts work, school or relationships; includes GAD, social anxiety, panic, and specific phobias.',
      href: '/conditions/anxiety-disorders',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mood Disorders',
      description: 'Persistent low mood or mood swings that impair function; includes major depression, bipolar disorders, and dysthymia.',
      href: '/conditions/mood-disorders',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Neurodevelopmental Disorders',
      description: 'Lifelong patterns affecting attention, learning, and social communication; includes ADHD and autism spectrum disorder.',
      href: '/conditions/neurodevelopmental-disorders',
      icon: Users,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Personality Disorders',
      description: 'Rigid patterns in thinking and relating that cause distress and instability; includes borderline, obsessive-compulsive personality, and antisocial.',
      href: '/conditions/personality-disorders',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Psychotic Disorders',
      description: 'Breaks from reality with hallucinations or delusions; includes schizophrenia, schizoaffective disorder, and brief psychosis.',
      href: '/conditions/psychotic-disorders',
      icon: Brain,
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Obsessive-Compulsive and Related Disorders',
      description: 'Intrusive thoughts or repetitive behaviors and related body-image or saving problems; includes OCD, BDD, and hoarding.',
      href: '/conditions/ocd-related-disorders',
      icon: Brain,
      color: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'Substance-Related and Addictive Disorders',
      description: 'Problem use of alcohol, drugs, or gambling that harms health and life roles.',
      href: '/conditions/substance-related-disorders',
      icon: Shield,
      color: 'from-lime-500 to-green-500',
    },
    {
      title: 'Trauma and Stress-Related Disorders',
      description: 'Distress after trauma or major stressors; includes acute stress, adjustment disorders, and PTSD.',
      href: '/conditions/trauma-stress-disorders',
      icon: Heart,
      color: 'from-rose-500 to-red-500',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Conditions We Treat - Oasis Health Services</title>
        <meta name="description" content="Learn about the wide range of mental health conditions we treat at Oasis Health Services, including anxiety, depression, ADHD, and more." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#6D519D] to-[#2D6762] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Conditions We Treat
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Comprehensive and compassionate care for a wide range of mental health concerns.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => {
              const Icon = condition.icon;
              return (
                <motion.div
                  key={condition.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={condition.href} className="h-full flex">
                    <div className="h-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100 flex flex-col items-start text-left w-full">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${condition.color} mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D6762] mb-3 group-hover:text-[#6D519D] transition-colors">
                        {condition.title}
                      </h2>
                      <p className="text-[#4A5455] mb-4 flex-grow">{condition.description}</p>
                      <div className="flex items-center text-[#2D6762] group-hover:text-[#6D519D] transition-colors font-medium mt-auto">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Conditions;