import { useState, useEffect, useRef, useCallback } from 'react';

const PROJECTS = [
  {
    id: 'minesafe',
    title: 'MineSafe',
    badge: 'Featured System',
    platform: 'PWA • Web Application',
    description:
      'A specialized Progressive Web Application engineered to elevate mine worker safety and operational compliance. It equips personnel with role-tailored safety checklists, statutory DGMS regulations, multilingual emergency guides, and voice-driven controls—functioning reliably even in deep subterranean mine environments with zero internet connectivity.',
    features: [
      'Role-based safety modules with tailored checklists & DGMS rules',
      'Multi-language support across 11 regional languages',
      'Voice assistant for hands-free navigation while working',
      'Emergency SOS with one-tap calling & live GPS location alerts',
    ],
    techStack: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'PWA / Service Workers',
      'Web Speech API',
      'Geolocation API',
    ],
    buttons: [
      {
        label: 'Live Demo',
        href: 'https://gleeful-khapse-18d858.netlify.app/',
        primary: true,
        ariaLabel: 'View MineSafe Live Demo (opens in new tab)',
        icon: 'external',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/kyush02/MineSafe',
        primary: false,
        ariaLabel: 'View MineSafe GitHub Repository (opens in new tab)',
        icon: 'github',
      },
    ],
    slides: [
      {
        image: '/projects/minesafe/minesafe-dashboard.png',
        title: 'Role-Based Safety Dashboard',
        description: 'Driller station with quick access to checklists, DGMS rules, and daily videos',
      },
      {
        image: '/projects/minesafe/minesafe-checklist.png',
        title: 'Daily Safety Checklist',
        description: 'Interactive shift inspection items with real-time verification status',
      },
      {
        image: '/projects/minesafe/minesafe-rules.png',
        title: 'Statutory DGMS Rules',
        description: 'Official Directorate General of Mines Safety compliance guidelines',
      },
      {
        image: '/projects/minesafe/minesafe-sos.png',
        title: 'Emergency SOS Interface',
        description: 'Instant supervisor call trigger and GPS-located distress SMS dispatch',
      },
      {
        image: '/projects/minesafe/minesafe-roles.png',
        title: 'Role Selection & Localization',
        description: 'Multi-language support across 11 languages with 25+ specialized mine roles',
      },
    ],
    addressText: 'minesafe • pwa safety platform',
  },
  {
    id: 'skiply',
    title: 'Skiply',
    badge: 'Smart Attendance Planner',
    platform: 'React • Web Application',
    description:
      'Skiply is a smart attendance planner designed to help college students track their attendance and make informed decisions about skipping classes. It combines timetable data, attendance records, and a target percentage to calculate how many classes can be safely skipped.',
    features: [
      'Timetable-based attendance management',
      'Real-time attendance tracking',
      'Custom attendance targets',
      'Smart Skip Calculator',
    ],
    techStack: ['React', 'Tailwind CSS', 'Vercel'],
    buttons: [
      {
        label: 'GitHub',
        href: 'https://github.com/kyush02/Skiply',
        primary: false,
        ariaLabel: 'View Skiply GitHub Repository (opens in new tab)',
        icon: 'github',
      },
      {
        label: 'Live Demo',
        href: 'https://skiply-kk.vercel.app/',
        primary: true,
        ariaLabel: 'View Skiply Live Demo (opens in new tab)',
        icon: 'external',
      },
    ],
    slides: [
      {
        image: '/projects/skiply/skiply_1.png',
        title: 'Smart Attendance Platform',
        description:
          'Know exactly when you can safely skip — 82% overall attendance with 14 safe skips remaining, AI insight panel, and weekly trend graph',
      },
      {
        image: '/projects/skiply/skiply_2.png',
        title: 'Live Dashboard & Daily Schedule',
        description:
          'Safe Buffer Active at 78% (134/172 classes) with 26 safe skips and real-time single-tap present/absent marking for all scheduled lectures',
      },
      {
        image: '/projects/skiply/skiply_3.png',
        title: 'Subject-Wise Attendance Standing',
        description:
          'Detailed per-subject attendance percentages (IoT 86.96%, IWT 88.89%, Math III 76.92%) with AI skip/recovery predictions for 8 courses',
      },
      {
        image: '/projects/skiply/skiply_4.png',
        title: 'Visual Calendar Audit',
        description:
          'Monthly attendance calendar for September 2026 showing color-coded lecture logs for all 8 subjects with subject filter dropdown',
      },
      {
        image: '/projects/skiply/skiply_5.png',
        title: 'AI Onboarding Wizard',
        description:
          'Set up your semester in 60 seconds — Vision AI extracts subjects, timings, and holidays from your timetable and college calendar images',
      },
    ],
    addressText: 'skiply • smart attendance platform',
  },
];

function ProjectCard({ project, index, isExpanded, onToggle }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryRef = useRef(null);
  const isEven = index % 2 === 1; // index 0 = Odd (1st project), index 1 = Even (2nd project)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % project.slides.length);
  }, [project.slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length);
  }, [project.slides.length]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const handleCardClick = (e) => {
    // If clicking an interactive button/link/control inside the expanded body, don't trigger toggle
    if (e.target.closest('.project-card-body a, .project-card-body button, .project-card-body [role="button"]')) {
      return;
    }
    onToggle(index);
  };

  const handleCardKeyDown = (e) => {
    if (e.target.closest('.project-card-body a, .project-card-body button, .project-card-body [role="button"]')) {
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(index);
    }
  };

  return (
    <div
      className={`project-showcase-card ${isExpanded ? 'is-expanded' : ''}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${project.title} - ${project.badge} • ${project.platform}. Click to ${isExpanded ? 'collapse' : 'expand'} project details.`}
    >
      {/* Centered Title Header: 1. Project Title, 2. Category/Type Metadata directly underneath */}
      <div className="project-card-header">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">
          {project.badge} • {project.platform}
        </p>
      </div>

      {/* Expandable Accordion Body */}
      <div className="project-card-body" aria-hidden={!isExpanded}>
        <div className="project-card-body-inner">
          {/* Two Column Grid with Alternating Order */}
          <div className={`project-showcase-grid ${isEven ? 'is-reversed' : ''}`}>
            {/* Left Column (Odd) / Right Column (Even): Project Information */}
            <div className="project-info-column">
              <p className="project-description">{project.description}</p>

              <div className="project-features-block">
                <span className="project-subheading">KEY FEATURES</span>
                <ul className="project-features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="project-feature-item">
                      <span className="feature-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
                          <path
                            d="M5 8.2l2 2 4-4.2"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-block">
                <span className="project-subheading">TECH STACK</span>
                <div className="project-tech-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="project-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-cta-group">
                {project.buttons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-btn ${btn.primary ? 'project-btn-primary' : 'project-btn-secondary'}`}
                    aria-label={btn.ariaLabel}
                  >
                    {btn.icon === 'github' && (
                      <svg
                        className="btn-icon"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    )}
                    <span>{btn.label}</span>
                    {btn.icon === 'external' && (
                      <svg
                        className="btn-icon"
                        viewBox="0 0 20 20"
                        width="16"
                        height="16"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column (Odd) / Left Column (Even): Gallery */}
            <div className="project-gallery-column">
              <div className="gallery-header">
                <h4 className="gallery-heading">GALLERY</h4>
                <span className="gallery-counter">
                  {currentSlide + 1} / {project.slides.length}
                </span>
              </div>

              <div
                className="gallery-card"
                ref={galleryRef}
                tabIndex="0"
                onKeyDown={handleKeyDown}
                role="region"
                aria-label={`${project.title} Screenshot Gallery`}
              >
                <div className="gallery-card-header">
                  <div className="window-dots" aria-hidden="true">
                    <span className="window-dot red"></span>
                    <span className="window-dot yellow"></span>
                    <span className="window-dot green"></span>
                  </div>
                  <div className="gallery-address-bar">
                    <svg
                      viewBox="0 0 20 20"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="lock-icon"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="address-text">{project.addressText}</span>
                  </div>
                </div>

                <div className="gallery-viewport">
                  {project.slides.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`gallery-slide ${idx === currentSlide ? 'active' : ''}`}
                      aria-hidden={idx !== currentSlide}
                    >
                      <img
                        src={slide.image}
                        alt={`${project.title} screenshot showing ${slide.title}`}
                        className="gallery-image"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  ))}
                </div>

                <div className="gallery-caption-bar">
                  <span className="gallery-caption-title">{project.slides[currentSlide].title}</span>
                  <span className="gallery-caption-desc">{project.slides[currentSlide].description}</span>
                </div>
              </div>

              <div className="gallery-controls-below">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="gallery-nav-btn gallery-nav-prev"
                  aria-label="Previous screenshot"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
                    <path d="M15 18l-6-6 6-6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="gallery-dots" role="tablist" aria-label={`${project.title} gallery pagination`}>
                  {project.slides.map((slide, idx) => (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={idx === currentSlide}
                      aria-label={`Jump to screenshot ${idx + 1}: ${slide.title}`}
                      onClick={() => goToSlide(idx)}
                      className={`gallery-dot ${idx === currentSlide ? 'active' : ''}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="gallery-nav-btn gallery-nav-next"
                  aria-label="Next screenshot"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
                    <path d="M9 18l6-6-6-6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className={`projects-section ${isVisible ? 'is-visible' : ''}`}
      id="projects"
    >
      <div className="projects-inner">
        <div className="projects-header-block">
          <h2 className="projects-section-heading has-dash">PROJECTS</h2>
          <p className="projects-section-subtitle">
            Featured practical software, systems, and engineering solutions.
          </p>
        </div>

        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
}
