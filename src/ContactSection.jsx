import { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className={`contact-section ${isVisible ? 'is-visible' : ''}`}
      id="contact"
    >
      <div className="contact-inner">
        <div className="contact-header-block">
          <h2 className="contact-section-heading has-dash">CONTACT</h2>
          <p className="contact-section-subtitle">
            Let's connect, collaborate, or discuss software engineering opportunities.
          </p>
        </div>

        <div className="contact-cards-grid">
          <a
            href="mailto:kyushkumar@gmail.com"
            className="contact-card"
            aria-label="Send an email to Kyush Kumar"
          >
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-card-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">kyushkumar@gmail.com</span>
            </div>
          </a>

          <a
            href="https://github.com/kyush02"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="View GitHub profile (opens in new tab)"
          >
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="contact-card-info">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/kyush02</span>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/kyush-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="View LinkedIn profile (opens in new tab)"
          >
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div className="contact-card-info">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/kyush-kumar</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
