import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visiblePosts, setVisiblePosts] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const getRelativeDate = (daysAgo: number) => {
    const date = new Date(currentTime);
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
  };

  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const allBlogPosts = [
    {
      title: 'Sirius AI Assistant',
      excerpt: 'An AI Assistant that responds to users voice and finds data based on queries. Built with Flask, HTML, CSS, and JavaScript.',
      date: getRelativeDate(0),
      readTime: calculateReadTime('An AI Assistant that responds to users voice and finds data based on queries. Built with Flask, HTML, CSS, and JavaScript.'),
      image: '/projects/sirius-ai.png',
      category: 'AI Project',
      link: 'https://sirius-ai-liard.vercel.app/'
    },
    {
      title: 'The Future of AI in 2025',
      excerpt: 'Exploring the latest breakthroughs in artificial intelligence and their impact on society.',
      date: getRelativeDate(1),
      readTime: calculateReadTime('Exploring the latest breakthroughs in artificial intelligence and their impact on society.'),
      image: 'https://www.logicraysacademy.com/blog/wp-content/uploads/2023/06/AIFI.png',
      category: 'AI Research'
    },
    {
      title: 'Machine Learning Best Practices',
      excerpt: 'A comprehensive guide to implementing machine learning models effectively.',
      date: getRelativeDate(2),
      readTime: calculateReadTime('A comprehensive guide to implementing machine learning models effectively.'),
      image: 'https://xiengineering.com/wp-content/uploads/2023/10/AdobeStock_519767884-1-scaled.jpeg',
      category: 'Machine Learning'
    },
    {
      title: 'Neural Networks Explained',
      excerpt: 'Understanding the fundamentals of neural networks and deep learning.',
      date: getRelativeDate(3),
      readTime: calculateReadTime('Understanding the fundamentals of neural networks and deep learning.'),
      image: 'https://bernardmarr.com/img/What%20is%20an%20Artificial%20Neural%20Networks.jpg',
      category: 'Deep Learning'
    },
    {
      title: 'Data Science Workflows',
      excerpt: 'Best practices for organizing and managing data science projects effectively.',
      date: getRelativeDate(4),
      readTime: calculateReadTime('Best practices for organizing and managing data science projects effectively.'),
      image: 'https://images.squarespace-cdn.com/content/v1/55fdfa38e4b07a55be8680a4/1615903072761-9H9XREOMPJFBGI8QAW1U/Data+Science+Workflow+Image.jpg',
      category: 'Data Science'
    },
    {
      title: 'Python for AI Development',
      excerpt: 'A comprehensive guide to using Python for artificial intelligence development.',
      date: getRelativeDate(5),
      readTime: calculateReadTime('A comprehensive guide to using Python for artificial intelligence development.'),
      image: 'https://www.developernation.net/static/83ec9004ebaf342559098782a7b24598/a764f/Python-for-AI-ML-projects_cover-scaled.jpg',
      category: 'Programming'
    },
    {
      title: 'Ethics in AI',
      excerpt: 'Exploring the ethical considerations in artificial intelligence development.',
      date: getRelativeDate(6),
      readTime: calculateReadTime('Exploring the ethical considerations in artificial intelligence development.'),
      image: 'https://media.licdn.com/dms/image/C4D12AQFsGnGLkGWzJg/article-cover_image-shrink_600_2000/0/1598527219209?e=2147483647&v=beta&t=x0tBbn-g623Dq5vvsc9ufZbAlIDIRWCWQGymRy_C44g',
      category: 'AI Ethics'
    },
    {
      title: 'Deep Learning Frameworks',
      excerpt: 'Comparing popular deep learning frameworks and their use cases.',
      date: getRelativeDate(7),
      readTime: calculateReadTime('Comparing popular deep learning frameworks and their use cases.'),
      image: 'https://analyticsindiamag.com/wp-content/uploads/2018/04/all_libraries.png',
      category: 'Deep Learning'
    }
  ];

  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, allBlogPosts.length));
  };

  const visibleBlogPosts = allBlogPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < allBlogPosts.length;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="noise" />
      <div className="grid-background fixed inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 glitch"
            data-text="Latest Insights"
          >
            Latest Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 terminal-text max-w-2xl mx-auto"
          >
            Exploring the frontiers of artificial intelligence and machine learning
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBlogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="relative group cursor-pointer"
              onClick={() => post.link && window.open(post.link, '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg hover-glow">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-xs text-purple-400 terminal-text px-2 py-1 rounded-full border border-purple-400/30">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2 glow-text group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 terminal-text text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {hasMorePosts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <button 
              onClick={handleLoadMore}
              className="px-8 py-4 border border-purple-500/50 hover:border-purple-500 rounded hover-glow terminal-text transition-colors"
            >
              Load More Articles
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;
