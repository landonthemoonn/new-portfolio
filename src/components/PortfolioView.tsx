import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Archive, Palette, Code, ArrowLeft } from 'lucide-react';
import { SplineEmbed } from './SplineEmbed';

interface PortfolioViewProps {
  onBack: () => void;
}

export function PortfolioView({ onBack }: PortfolioViewProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "3D Design Exploration",
      description: "Interactive 3D experiments and visual studies",
      splineUrl: "YOUR_SPLINE_URL_1",
      link: "https://yourcraft.doc/3d-designs",
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Digital Archives",
      description: "Collection of creative projects and documentation",
      splineUrl: "YOUR_SPLINE_URL_2",
      link: "https://yourcraft.doc/archives",
      icon: <Archive className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Code Experiments",
      description: "Creative coding and generative art pieces",
      splineUrl: "YOUR_SPLINE_URL_3",
      link: "https://yourcraft.doc/experiments",
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#E6D5B8] p-8"
    >
      <div className="fixed inset-0 -z-10 opacity-20">
        <SplineEmbed 
          url="YOUR_BACKGROUND_SPLINE_URL"
          className="w-full h-full"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[#2C1810]"
          >
            Creative Space
          </motion.h1>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-[#2C1810]/60 hover:text-[#2C1810] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              style={{
                boxShadow: '0 4px 24px rgba(44, 24, 16, 0.1)'
              }}
              onMouseEnter={() => setActiveCard(project.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative aspect-video">
                <SplineEmbed 
                  url={project.splineUrl}
                  className="w-full h-full"
                />
                {activeCard === project.id && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#2C1810]/50 backdrop-blur-sm flex items-center justify-center"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E6D5B8] flex items-center gap-2 bg-[#2C1810]/50 px-4 py-2 rounded-lg hover:bg-[#2C1810]/75 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </motion.div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#2C1810]">
                    {project.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-[#2C1810]">
                    {project.title}
                  </h2>
                </div>
                <p className="text-[#2C1810]/80">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
