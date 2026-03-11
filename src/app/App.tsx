import { useState } from 'react';
import { Zap, Monitor, Lightbulb, Gauge, Github, Linkedin, Instagram, Mail, Target, BarChart, Settings, MessageSquare, Cpu, ArrowUpRight, ChevronRight, Code, ChevronDown, X, ExternalLink, Calendar, MapPin, Award, BookOpen, Briefcase } from 'lucide-react';
import headshotImage from '@/assets/702608dfcd9a8df1404b58bb844942d96f6c6e41.png';
import safescribeImage from '@/assets/64ca731180a28b548c54b5871caeeb3886d4c2ca.png';
import credImage from '@/assets/00750c368b644b9e0b30b51af460adcaaa5f4b3f.png';
import woodworkingImage from '@/assets/b96e11183b1d21f29f75b30cff22ced4a9c7916a.png';
import geraldImage from '@/assets/38c0b20518c9dbfb73018cf2ce569d656d670e7d.png';

export default function App() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Copy email handler
  const copyEmail = () => {
    navigator.clipboard.writeText('syedhadi@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const skills = [
    {
      icon: Zap,
      title: 'Fast',
      description: 'Fast load times and lag-free interaction are my highest priority.'
    },
    {
      icon: Monitor,
      title: 'Responsive',
      description: 'My layouts work on any device, big or small.'
    },
    {
      icon: Lightbulb,
      title: 'Intuitive',
      description: 'Strong preference for easy to use, intuitive UX/UI.'
    },
    {
      icon: Gauge,
      title: 'Dynamic',
      description: 'Websites don\'t have to be static, I love making pages come to life.'
    }
  ];

  const careerStops = [
    { 
      org: 'University of Texas System', 
      role: 'Advanced Analytics Researcher', 
      descriptor: 'Strategy',
      icon: Target,
      date: 'June 2025 - Present',
      location: 'Austin, TX',
      details: ['State & federal reporting', 'Labor market analytics', 'Statistical modeling'],
      responsibilities: [
        'Lead development of state and federal reporting systems for higher education data',
        'Build predictive models for labor market outcomes and employment trends',
        'Collaborate with policy teams to translate complex data into actionable insights'
      ],
      achievements: [
        'Architected automated reporting pipeline reducing manual processing time by 70%',
        'Developed statistical models informing workforce development strategies'
      ]
    },
    { 
      org: 'Wisconsin Center for Education Research', 
      role: 'Statistical Analyst', 
      descriptor: 'Research',
      icon: BarChart,
      date: 'May 2023 - May 2025',
      location: 'Madison, WI',
      details: ['Psychometrics', 'Item response theory', 'Interpretable AI'],
      duration: '2 years',
      responsibilities: [
        'Apply IRT models to large-scale educational assessments',
        'Research interpretable AI methods for automated scoring systems',
        'Validate psychometric properties of adaptive testing algorithms'
      ],
      achievements: [
        'Published 3 peer-reviewed conference papers on NLP in assessment',
        'Reduced scoring error rates by 25% through improved feature engineering'
      ]
    },
    { 
      org: 'MITRE Corporation', 
      role: 'Data Scientist', 
      descriptor: 'Engineering',
      icon: Cpu,
      date: 'Jan 2023 - May 2023',
      location: 'Fairfax, VA',
      details: ['Cloud data engineering', 'Pipeline development'],
      duration: '6 months',
      responsibilities: [
        'Built cloud-native data pipelines on AWS for federal clients',
        'Designed ETL workflows processing 10M+ records daily',
        'Implemented data quality monitoring and alerting systems'
      ],
      achievements: [
        'Reduced pipeline execution time by 60% through optimization',
        'Achieved 99.9% data quality compliance across all pipelines'
      ]
    },
    { 
      org: 'George Mason University', 
      role: 'Analytics Consultant', 
      descriptor: 'Systems',
      icon: Settings,
      date: 'Jan 2022 - May 2023',
      location: 'Fairfax, VA',
      details: ['Decision modeling', 'Data warehousing'],
      duration: '1.5 years',
      responsibilities: [
        'Designed decision support systems for university administration',
        'Built data warehouse integrating 15+ disparate data sources',
        'Created dashboards for enrollment and retention analytics'
      ],
      achievements: [
        'Delivered insights leading to 12% improvement in student retention',
        'Consolidated reporting infrastructure saving $200K annually'
      ]
    },
    { 
      org: 'Afiniti', 
      role: 'Data Scientist', 
      descriptor: 'ML',
      icon: Zap,
      date: 'Jan 2022 - Dec 2022',
      location: 'Lahore, PK',
      details: ['Behavioral modeling', 'End-to-end ML'],
      duration: '1 year',
      responsibilities: [
        'Developed behavioral pairing models for enterprise call centers',
        'Built end-to-end ML pipelines from data ingestion to model deployment',
        'Optimized model performance for real-time prediction at scale'
      ],
      achievements: [
        'Improved pairing accuracy by 18% through feature engineering',
        'Deployed models processing 500K+ predictions per day'
      ]
    },
  ];

  const projects = [
    {
      title: 'SafeScribe',
      tagline: 'Privacy-first meeting notes. Local. No cloud. No subscription.',
      description: 'A compact desk device that captures meetings and delivers clear, organized notes to your inbox.',
      link: 'safescribe-ai.github.io',
      image: safescribeImage,
    },
    {
      title: 'CReD: Conceptual Regression Depth',
      tagline: 'AI that preserves critical thinking in education.',
      description: 'AI can redefine education, but it needs guardrails. CReD is my shot at the problem.',
      link: 'credlearning.com',
      image: credImage,
    },
  ];

  const passionProjects = [
    {
      title: '@Riveting_Stuff_',
      description: 'What I do after work.',
      link: 'https://instagram.com/riveting_stuff_',
      image: woodworkingImage,
      label: 'Woodworking'
    },
    {
      title: 'Gerald - A Conversational AI',
      description: 'A chatbot from before ChatGPT was a thing.',
      link: 'https://github.com/syedhadi816/gerald',
      image: geraldImage,
      label: 'AI Content'
    },
  ];

  return (
    <div className="min-h-screen" style={{ 
      background: '#f5f5f5',
      color: '#1a1a1a',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6" style={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
      }}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
            SH
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden" style={{ minHeight: '100vh', background: '#ffffff' }}>
        {/* Creamy Buttermilk Wave Background */}
        <div 
          className="absolute"
          style={{
            top: '30%',
            left: '20%',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(242, 232, 207, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
            transform: 'rotate(-15deg)',
          }}
        />
        <div 
          className="absolute"
          style={{
            top: '40%',
            right: '15%',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(242, 232, 207, 0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            transform: 'rotate(25deg)',
          }}
        />
        
        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex flex-col items-center justify-center text-center" style={{ minHeight: '80vh' }}>
            {/* Circular Profile Image */}
            <div className="relative z-10 mb-12">
              <div 
                className="relative rounded-full overflow-hidden"
                style={{
                  width: '304px',
                  height: '304px',
                  border: '6px solid rgba(242, 232, 207, 0.6)',
                  boxShadow: '0 0 60px rgba(242, 232, 207, 0.4)',
                }}
              >
                <img 
                  src={headshotImage}
                  alt="Syed Hadi"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center center',
                  }}
                />
              </div>
            </div>

            {/* Name and Info */}
            <div className="relative z-10">
              <h1 
                style={{ 
                  fontSize: 'clamp(56px, 7vw, 80px)',
                  fontWeight: '700',
                  lineHeight: '1.1',
                  color: '#1a1a1a',
                  marginBottom: '24px',
                }}
              >
                I'm <span style={{ 
                  backgroundImage: 'linear-gradient(135deg, #D4A574 0%, #C89A64 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Syed Hadi</span>
              </h1>

              <p 
                className="mb-8 mx-auto" 
                style={{ 
                  color: '#666',
                  fontSize: '22px',
                  lineHeight: '1.7',
                  maxWidth: '850px',
                }}
              >
                I work at the intersection of education analytics and natural language processing, building systems that turn messy, human-generated data into defensible insight. I concern myself with the interpretability and legitimacy of data-driven arguments.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center">
                <a
                  href="https://linkedin.com/in/syedhadi816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    background: 'rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    color: '#1a1a1a',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#D4A574';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.color = '#1a1a1a';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/syedhadi816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    background: 'rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    color: '#1a1a1a',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#D4A574';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.color = '#1a1a1a';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8" style={{ background: '#fafafa' }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 
            className="mb-12" 
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#1a1a1a'
            }}
          >
            Recent Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.title === 'SafeScribe' ? 'https://safescribe-ai.github.io/' : 'https://credlearning.com/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer block"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  transform: hoveredProject === index ? 'translateY(-12px)' : 'translateY(0)',
                  boxShadow: hoveredProject === index ? '0 20px 60px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700"
                    style={{ 
                      backgroundImage: `url('${project.image}')`,
                      transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)',
                      filter: hoveredProject === index ? 'brightness(0.8)' : 'brightness(0.9)'
                    }}
                  />
                  
                  {/* Overlay on hover */}
                  {hoveredProject === index && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background: 'rgba(242, 232, 207, 0.2)',
                      }}
                    >
                      <div 
                        className="px-6 py-3 rounded-full flex items-center gap-2"
                        style={{
                          background: '#D4A574',
                          color: '#ffffff',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}
                      >
                        View Project
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    className="mb-2" 
                    style={{ 
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#1a1a1a'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="mb-2" style={{ color: '#D4A574', fontSize: '16px', fontWeight: '600' }}>
                    {project.tagline}
                  </p>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8" style={{ background: '#ffffff' }}>
        <div className="max-w-[1000px] mx-auto">
          <h2 
            className="mb-16" 
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#1a1a1a'
            }}
          >
            Where I've been
          </h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div 
              className="absolute left-[31px] top-0 bottom-0"
              style={{
                width: '2px',
                background: 'linear-gradient(180deg, rgba(212, 165, 116, 0.6) 0%, rgba(212, 165, 116, 0.2) 100%)',
              }}
            />

            <div className="space-y-12">
              {careerStops.map((stop, index) => (
                <div
                  key={index}
                  className="relative pl-20"
                >
                  {/* Timeline Node */}
                  <div 
                    className="absolute left-0"
                    style={{
                      top: '8px',
                      width: '64px',
                      height: '64px',
                    }}
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: '#ffffff',
                        border: '2px solid rgba(0, 0, 0, 0.08)',
                      }}
                    >
                      <stop.icon size={28} style={{ color: '#1a1a1a' }} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className="p-6 rounded-2xl"
                    style={{
                      background: '#fafafa',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '6px' }}>
                          {stop.org}
                        </h3>
                        <p style={{ fontSize: '15px', color: '#666', marginBottom: '4px' }}>
                          {stop.role}
                        </p>
                        <p style={{ fontSize: '13px', color: '#999' }}>
                          {stop.date} {stop.duration && `• ${stop.duration}`}
                        </p>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2">
                        <MapPin size={14} style={{ color: '#D4A574' }} />
                        <span 
                          className="text-sm whitespace-nowrap"
                          style={{
                            color: '#D4A574',
                          }}
                        >
                          {stop.location}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    {stop.details && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {stop.details.map((detail, i) => (
                          <span 
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-lg"
                            style={{
                              background: '#ffffff',
                              color: '#666',
                              border: '1px solid rgba(0, 0, 0, 0.06)'
                            }}
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="py-20 px-8" style={{ background: '#fafafa' }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 
            className="mb-4" 
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#1a1a1a'
            }}
          >
            Research
          </h2>
          <p className="mb-12" style={{ color: '#999', fontSize: '14px' }}>
            Conference presentations & research work
          </p>

          <div className="space-y-6">
            {[
              {
                venue: 'National Council on Measurement in Education (NCME) — Denver, CO — April 2025',
                title: 'Automated Plagiarism Detection in Spoken Responses using Linguistic and Acoustic Features',
                link: 'https://github.com/syedhadi816/AI-Influenced-Speech-Detection'
              },
              {
                venue: 'International Objective Measurement Workshop (IOMW) — Boulder, CO — April 2025',
                title: 'Two Rating Scale Rasch Model Linking in a Large Scale Language Assessment: Psychometric and Content Reviews'
              },
              {
                venue: 'International Association for Computerized Adaptive Testing (IACAT) — Seoul, South Korea — September 2024',
                title: 'Automated Essay Scoring: Syntactic and Semantic Feature Engineering for Interpretable and Content Aware Systems',
                link: 'https://iacat2024.com/home'
              }
            ].map((pub, index) => {
              const Component = pub.link ? 'a' : 'div';
              const linkProps = pub.link ? {
                href: pub.link,
                target: '_blank',
                rel: 'noopener noreferrer'
              } : {};
              
              return (
                <Component
                  key={index} 
                  className="group p-6 rounded-xl transition-all duration-300 cursor-pointer block"
                  style={{ 
                    background: '#fafafa',
                    border: '1px solid rgba(0, 0, 0, 0.06)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fafafa';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                  }}
                  {...linkProps}
                >
                  <p className="mb-2" style={{ fontSize: '15px', color: '#D4A574', letterSpacing: '0.05em', fontWeight: '600' }}>
                    {pub.venue}
                  </p>
                  <p style={{ color: '#1a1a1a', fontSize: '15px', lineHeight: '1.6' }}>
                    {pub.title}
                  </p>
                </Component>
              );
            })}
          </div>
        </div>
      </section>

      {/* Passion Projects Section */}
      <section className="py-20 px-8" style={{ background: '#ffffff' }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 
            className="mb-4" 
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#1a1a1a'
            }}
          >
            Passion Projects
          </h2>
          <p className="mb-12" style={{ color: '#999', fontSize: '14px' }}>
            Creative explorations & side projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {passionProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer block"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.4)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  {typeof project.image === 'string' && project.image.startsWith('http') ? (
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ 
                        backgroundImage: `url('${project.image}')`,
                        filter: 'brightness(0.9)'
                      }}
                    />
                  ) : (
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      style={{ 
                        filter: 'brightness(0.9)',
                        objectPosition: 'center center'
                      }}
                    />
                  )}
                  
                  {/* Label Badge */}
                  <div 
                    className="absolute top-6 right-6 px-4 py-2 rounded-full text-xs"
                    style={{
                      background: '#D4A574',
                      color: '#ffffff',
                      fontWeight: '600'
                    }}
                  >
                    {project.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    className="mb-3" 
                    style={{ 
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#1a1a1a'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8" style={{ background: '#fafafa' }}>
        <div className="max-w-[800px] mx-auto text-center">
          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, link: 'https://github.com/syedhadi816' },
              { icon: Linkedin, link: 'https://linkedin.com/in/syedhadi816' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  color: '#666',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D4A574';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 165, 116, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.color = '#666';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)', background: '#ffffff' }}>
        <p style={{ color: '#999', fontSize: '12px' }}>
          © 2026 Syed Hadi · Built with care
        </p>
      </footer>
    </div>
  );
}