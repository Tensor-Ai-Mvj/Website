import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Code, Cpu, Bot, Sparkles, GraduationCap } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const Home = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI Research',
      description: 'Engage in cutting-edge AI research projects with guidance from experts',
      color: 'from-purple-500/10 to-blue-500/10'
    },
    {
      icon: <Bot className="w-8 h-8 text-blue-400" />,
      title: 'Hands-on Projects',
      description: 'Build real-world AI applications and contribute to innovative solutions',
      color: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Community',
      description: 'Connect with AI enthusiasts and professionals from leading tech companies',
      color: 'from-cyan-500/10 to-purple-500/10'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
      title: 'Learning',
      description: 'Master the latest AI tools and technologies through workshops and training',
      color: 'from-purple-500/10 to-blue-500/10'
    }
  ];

  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: 'Advanced Computing',
      description: 'Access to high-performance computing resources for AI model training'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: 'Industry Projects',
      description: 'Work on real projects with industry partners'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation Hub',
      description: 'A space for creative exploration and breakthrough ideas'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      title: 'Mentorship',
      description: 'Guidance from experienced professionals and researchers'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="noise" />
      <div className="grid-background fixed inset-0" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch"
                data-text="Tensor Club">
              Tensor Club
            </h1>
            <p className="text-2xl text-gray-400 mb-8 terminal-text">
              MVJ College of Engineering's Premier AI Community
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto terminal-text">
              Empowering students to explore, innovate, and excel in the world of Artificial Intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 rounded-lg font-semibold text-lg hover-glow terminal-text"
              >
                Join Our Club
              </motion.button>
              <Link to="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-black/50 border border-gray-700 hover:border-purple-500/50 rounded-lg font-semibold text-lg hover-glow terminal-text"
                >
                  Explore Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-50">
          <Spline scene="https://prod.spline.design/o4jeqXJWvhK5qYQx/scene.splinecode" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">Why Join Us?</h2>
            <p className="text-xl text-gray-400 terminal-text">
              Experience the future of AI with Bangalore's most innovative student community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg hover-glow">
                  <div className="mb-4 p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg w-fit">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 glow-text">{benefit.title}</h3>
                  <p className="text-gray-400 terminal-text">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">What We Offer</h2>
            <p className="text-xl text-gray-400 terminal-text">
              Comprehensive learning opportunities to boost your AI journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg hover-glow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 glow-text">{feature.title}</h3>
                      <p className="text-gray-400 terminal-text">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;