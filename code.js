import React, { useState } from 'react';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const experiences = [
    {
      company: "Razorpay",
      description: "Fintech – Growth, International expansion and AI Initiatives",
      link: "https://razorpay.com"
    },
    {
      company: "Unacademy",
      description: "Edtech – Online and offline learning experiences",
      link: "#"
    },
    {
      company: "Dunzo",
      description: "Quick commerce – Consumer journeys for hyperlocal deliveries",
      link: "#"
    },
    {
      company: "Microsoft",
      description: "Enterprise & XR – Hololens spatial experiences and Azure monitoring",
      link: "#"
    }
  ];

  const education = [
    {
      institution: "Harvard University",
      degree: "Master in Design and Business"
    },
    {
      institution: "IIT Guwahati",
      degree: "Bachelor in Design"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Unacademy X",
      subtitle: "Gamified learning",
      image: "https://framerusercontent.com/images/mGwISHc0pR9SWxlm75EmqVEMo.png",
      link: "./unacademyx"
    },
    {
      id: 2,
      title: "SuperDM",
      subtitle: "Clean, focused inbox",
      image: "https://framerusercontent.com/images/5iQK80gtpwp6G2N4T2MrJoqxY.png",
      link: "./superdm"
    },
    {
      id: 3,
      title: "Compete",
      subtitle: "1:1 quizzing battles",
      image: "https://framerusercontent.com/images/XrqvY65iOzhnkZ2enyHBCkWGMs.png",
      link: "./compete"
    }
  ];

  const sideProjects = [
    { name: "Airtime", description: "community and events", link: "https://www.airtime.com/" },
    { name: "SuperDM", description: "focused inbox experience", link: "#" },
    { name: "Hood", description: "pseudonymous social network", link: "https://www.hood.live/" },
    { name: "Habitwave", description: "social habit-tracking app", link: "https://betalist.com/startups/habitwave" },
    { name: "Zaffingo", description: "online yearbook website", link: "https://yourstory.com/2015/03/zaffingo-com" },
    { name: "ChessBase India", description: "chess news & courses", link: "https://www.youtube.com/@ChessBaseIndiachannel" }
  ];

  const interests = [
    {
      title: "Sneakers",
      description: "Collecting & exploring the story behind every pair.",
      image: "https://framerusercontent.com/images/JBxoOWVDM21evqF85iq1cc2t0.png"
    },
    {
      title: "Adventure",
      description: "Skydiving, bungee jumping, scuba & being an elder sibling.",
      image: "https://framerusercontent.com/images/pata2AWV3zrWx7DPeMrnX2iJEg.png"
    },
    {
      title: "Sports",
      description: "Basketball, tennis, swimming & skating.",
      image: "https://framerusercontent.com/images/nwBgYUfzmQ2aD2PHLur2YEBRA4I.png"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-black">
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 bg-neutral-50/80 backdrop-blur-sm z-50 py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h2 className="text-sm font-medium tracking-wider text-neutral-400">CHARMIE KAPOOR</h2>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/charmiekapoor" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://medium.com/@charmiekapoor" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/charmiekapoor" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <header className="min-h-screen flex items-center mb-32">
          <div className="w-full">
            <div className="mb-12">
              <img 
                src="https://framerusercontent.com/images/VE9YfQDenzrr2kNaF0pGsNGSuJU.png"
                alt="Charmie Kapoor"
                className="w-56 h-56 rounded-3xl object-cover mb-16"
              />
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
              Designer & founder.
            </h1>
            <p className="text-2xl text-neutral-600 mb-12 max-w-3xl leading-relaxed">
              Curious about how things work and why they matter.
            </p>
            <a 
              href="https://superdm.com/charmie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg text-neutral-600 hover:text-black transition-colors group"
            >
              Contact Me
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </header>

        {/* Experience Section */}
        <section className="mb-32">
          <h2 className="text-xs font-medium tracking-widest text-neutral-400 mb-12 uppercase">EXPERIENCE</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group">
                <a 
                  href={exp.link}
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">{exp.description}</p>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-32">
          <h2 className="text-xs font-medium tracking-widest text-neutral-400 mb-12 uppercase">EDUCATION</h2>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                <p className="text-neutral-600 text-lg">{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Work Section */}
        <section className="mb-32">
          <h2 className="text-xs font-medium tracking-widest text-neutral-400 mb-12 uppercase">RECENT WORK</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group block relative overflow-hidden rounded-3xl bg-neutral-100 aspect-[16/10] hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-10">
                  <div>
                    <h3 className="text-white text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-lg">/ {project.subtitle}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* On the Side Section */}
        <section className="mb-32">
          <h2 className="text-xs font-medium tracking-widest text-neutral-400 mb-12 uppercase">ON THE SIDE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sideProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className="group block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-neutral-600">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-widest text-neutral-400 mb-12 uppercase">INTERESTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={interest.image}
                    alt={interest.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-neutral-400 text-sm py-12">
          <p>Last updated, Jun 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;