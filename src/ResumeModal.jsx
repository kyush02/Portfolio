import { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume View"
    >
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div className="resume-modal-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>KYUSH KUMAR — RESUME</span>
          </div>

          <div className="resume-modal-actions">
            {/* Direct Open PDF in New Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-view-pdf-btn"
              title="Open PDF in new tab"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>View PDF</span>
            </a>

            {/* Direct Download Button */}
            <a
              href="/resume.pdf"
              download="Kyush_Kumar_Resume.pdf"
              className="resume-download-btn"
              title="Download Resume PDF"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="resume-close-btn"
              aria-label="Close Resume Modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="resume-modal-body">
          {/* Embedded Object PDF Viewer */}
          <div className="resume-pdf-frame-wrapper">
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="resume-pdf-object"
            >
              <iframe
                src="/resume.pdf"
                title="Kyush Kumar Resume PDF"
                className="resume-iframe"
              />
            </object>
          </div>

          {/* Interactive HTML Resume Document Card (Guarantees 100% full content visibility on mobile & all browsers) */}
          <div className="resume-paper-card">
            <header className="resume-paper-header">
              <h1 className="resume-name">KYUSH KUMAR</h1>
              <div className="resume-contact-row">
                <span>Bilaspur, Chhattisgarh, India</span>
                <span className="dot">•</span>
                <a href="https://linkedin.com/in/kyush-kumar" target="_blank" rel="noopener noreferrer">linkedin.com/in/kyush-kumar</a>
                <span className="dot">•</span>
                <a href="https://github.com/kyush02" target="_blank" rel="noopener noreferrer">github.com/kyush02</a>
              </div>
              <div className="resume-contact-row secondary">
                <a href="tel:+916203900228">+91 6203900228</a>
                <span className="dot">•</span>
                <a href="mailto:kyushkumar212@gmail.com">kyushkumar212@gmail.com</a>
              </div>
            </header>

            <hr className="resume-divider" />

            <section className="resume-section">
              <h2 className="resume-section-title">PROFESSIONAL SUMMARY</h2>
              <p className="resume-summary-text">
                First-year Computer Science and Engineering student at Guru Ghasidas Vishwavidyalaya (GGV).
                Highly motivated developer with a strong foundation in Python and C++. Proven ability to build
                functional applications in mobile and web development. Committed to continuous learning and
                applying technical skills to solve real-world problems.
              </p>
            </section>

            <section className="resume-section">
              <h2 className="resume-section-title">PROJECTS</h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h3 className="resume-item-title">MineSafe – Smart India Hackathon Project (Team Project)</h3>
                  <a href="https://github.com/kyush02/MineSafe" target="_blank" rel="noopener noreferrer" className="resume-link">
                    GitHub: github.com/kyush02/MineSafe
                  </a>
                </div>
                <ul className="resume-bullet-list">
                  <li>Built and optimized responsive web interfaces using HTML and CSS, utilizing AI-assisted development tools to accelerate workflow.</li>
                  <li>Structured and styled web pages to improve usability and visual consistency.</li>
                  <li>Collaborated with team members on solution development and participated in presentation.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <h3 className="resume-item-title">HTML & CSS Projects – Frontend Practice</h3>
                  <a href="https://github.com/kyush02/HTML-and-CSS-Projects" target="_blank" rel="noopener noreferrer" className="resume-link">
                    GitHub: github.com/kyush02/HTML-and-CSS-Projects
                  </a>
                </div>
                <ul className="resume-bullet-list">
                  <li>Built responsive web pages using HTML and CSS to strengthen frontend fundamentals.</li>
                  <li>Applied layout techniques such as flexbox and structured styling for clean UI design.</li>
                  <li>Developed projects independently after learning core concepts through online tutorials.</li>
                </ul>
              </div>
            </section>

            <section className="resume-section">
              <h2 className="resume-section-title">TECHNICAL SKILLS</h2>
              <div className="resume-skills-grid">
                <div><strong>Programming Languages:</strong> Python, C++</div>
                <div><strong>Frontend Languages:</strong> HTML, CSS</div>
                <div><strong>Tools:</strong> Git, VS Code</div>
              </div>
            </section>

            <section className="resume-section">
              <h2 className="resume-section-title">EDUCATION</h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h3 className="resume-item-title">B.Tech in Computer Science Engineering</h3>
                  <span className="resume-date">2025 - 2029</span>
                </div>
                <div className="resume-subtitle">Guru Ghasidas Vishwavidyalaya</div>
                <ul className="resume-bullet-list">
                  <li>First-year B.Tech CSE student building strong foundations in programming and problem-solving.</li>
                </ul>
              </div>
            </section>

            <section className="resume-section">
              <h2 className="resume-section-title">ACHIEVEMENTS</h2>
              <ul className="resume-bullet-list">
                <li><strong>Smart India Hackathon:</strong> Qualified Internal Round (Sept 2025)</li>
                <li><strong>Google Cloud Study Jams:</strong> Successfully Completed (Oct 2025)</li>
                <li><strong>Hack-X-Sprint Hackathon:</strong> Top 15 Teams among 400+ participants (Jan 2026)</li>
              </ul>
            </section>

            <section className="resume-section">
              <h2 className="resume-section-title">CERTIFICATIONS</h2>
              <ul className="resume-bullet-list">
                <li>ATF 2025 – Stage 2 Candidate</li>
                <li>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
