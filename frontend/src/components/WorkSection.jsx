import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, ArrowRight, Play, Briefcase } from 'lucide-react';

const WorkSection = ({ work }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            {work.badge}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">{work.title.line1}</span>
            <span className="block">
              <span className="text-black">
                {work.title.line2}
              </span>
              <span className="text-gray-900">{work.title.line3}</span>
            </span>
            <span className="block text-gray-900">{work.title.line4}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {work.subtitle}
          </p>
        </div>

        {/* Featured Project */}
        {work.featured && (
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
                  <div className="relative p-12 flex items-center justify-center min-h-[400px]">
                    <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-4 w-fit">
                    {work.featured.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {work.featured.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {work.featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {work.featured.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-black hover:bg-gray-800 text-white w-fit">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {work.projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-gray-200 hover:border-black hover:bg-gray-50 text-black">
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{work.cta.title}</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">{work.cta.subtitle}</p>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {work.cta.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;