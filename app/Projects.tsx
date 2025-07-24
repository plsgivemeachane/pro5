'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TextEffect } from '@/components/ui/text-effect';

// Define types for our projects
type ProjectCategory = 'API Development' | 'Database Architecture' | 'Microservices' | 'System Optimization';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  impact: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "RESTful API for E-commerce Platform",
      category: "API Development",
      description: "Developed a scalable RESTful API for a high-traffic e-commerce platform, handling product catalog, user management, and order processing with secure JWT authentication and Redis caching.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis", "Docker"],
      impact: "Reduced API response time by 40% and supported 10k+ concurrent users with 99.9% uptime"
    },
    {
      id: 2,
      title: "Multi-tenant Database Design for SaaS Application",
      category: "Database Architecture",
      description: "Designed and implemented a multi-tenant database architecture for a SaaS application using PostgreSQL partitioning and CitusDB, ensuring data isolation, scalability, and performance across thousands of tenants.",
      technologies: ["PostgreSQL", "Schema Design", "Partitioning", "CitusDB", "Database Optimization"],
      impact: "Achieved 99.9% uptime and supported 5000+ tenants with isolated data, reducing query times by 60%"
    },
    {
      id: 3,
      title: "Containerized Microservices with Docker and Kubernetes",
      category: "Microservices",
      description: "Architected and deployed a microservices-based system using Docker containers orchestrated with Kubernetes, implementing gRPC for inter-service communication and Prometheus for monitoring.",
      technologies: ["Docker", "Kubernetes", "Node.js", "gRPC", "Prometheus", "Service Mesh"],
      impact: "Improved deployment frequency by 5x and reduced failure rate by 70%, enabling rapid feature development and reliable scaling"
    },
    {
      id: 4,
      title: "Performance Tuning for High-traffic Application",
      category: "System Optimization",
      description: "Optimized a high-traffic web application through database query optimization, Redis caching strategies, and Nginx load balancing, significantly improving backend performance and response times.",
      technologies: ["Redis", "PostgreSQL", "Nginx", "Load Testing", "APM", "Performance Tuning"],
      impact: "Reduced page load time from 3.2s to 0.8s and increased throughput by 300%, supporting 50K+ daily active users"
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Category colors for consistent styling
  const categoryColors: Record<ProjectCategory, string> = {
    'API Development': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Database Architecture': 'bg-green-500/10 text-green-400 border-green-500/20',
    'Microservices': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'System Optimization': 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  };

  // Category hover colors
  const categoryHoverColors: Record<ProjectCategory, string> = {
    'API Development': 'hover:bg-blue-500/20',
    'Database Architecture': 'hover:bg-green-500/20',
    'Microservices': 'hover:bg-purple-500/20',
    'System Optimization': 'hover:bg-orange-500/20'
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <TextEffect 
          per="word" 
          as="h2" 
          preset="fade-in-blur" 
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          speedReveal={0.8}
          speedSegment={0.1}
        >
          Backend Development Projects
        </TextEffect>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-4xl md:text-5xl font-bold text-center mb-4">
          <TextEffect 
            per="word" 
            preset="scale" 
            speedReveal={1.2}
            speedSegment={0.15}
            delay={0.5}
          >
            Showcase
          </TextEffect>
        </div>
        <TextEffect 
          per="word" 
          preset="slide" 
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          speedReveal={1.5}
          speedSegment={0.05}
          delay={1}
        >
          A showcase of my backend development work, demonstrating expertise in API design, database architecture, microservices, and system optimization.
        </TextEffect>

        {/* Category Filtering */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === 'All'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Projects
          </motion.button>
          
          {(['API Development', 'Database Architecture', 'Microservices', 'System Optimization'] as ProjectCategory[]).map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all border ${
                activeCategory === category
                  ? `${categoryColors[category]} ${categoryHoverColors[category]}`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                layout
              >
                {/* Project Header */}
                <motion.div 
                  className="flex justify-between items-start mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <motion.span 
                    className={`px-3 py-1 rounded-full text-sm border ${categoryColors[project.category]}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {project.category}
                  </motion.span>
                </motion.div>
                
                {/* Project Description */}
                <motion.p 
                  className="text-gray-400 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {project.description}
                </motion.p>
                
                {/* Technologies */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ 
                        delay: 0.6 + index * 0.1 + techIndex * 0.05,
                        type: "spring"
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Impact */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-center text-sm text-green-400">
                    <span className="mr-2">📈</span>
                    <span>{project.impact}</span>
                  </div>
                </motion.div>
                
                {/* View Details Button */}
                <motion.button 
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}