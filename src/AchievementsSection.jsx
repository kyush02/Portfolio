import { useState, useEffect, useRef } from 'react';

const ACHIEVEMENTS_DATA = [
  {
    id: 'sih-2026',
    icon: '🏆',
    title: 'Smart India Hackathon',
    description: 'Qualified Internal Round',
    date: 'September 2026',
    dateValue: '2026-09',
  },
  {
    id: 'hackxsprint-2026',
    icon: '🚀',
    title: 'Hack-X-Sprint Hackathon',
    description: 'Selected among Top 15 Teams from 400+ participants',
    date: 'January 2026',
    dateValue: '2026-01',
  },
  {
    id: 'gcp-2025',
    icon: '☁️',
    title: 'Google Cloud Study Jams',
    description: 'Successfully Completed',
    date: 'October 2025',
    dateValue: '2025-10',
  },
  {
    id: 'sih-2025',
    icon: '🏆',
    title: 'Smart India Hackathon',
    description: 'Qualified Internal Round',
    date: 'September 2025',
    dateValue: '2025-09',
  },
];

export default function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [spineStyle, setSpineStyle] = useState({});
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const firstNodeRef = useRef(null);
  const lastNodeRef = useRef(null);

  // Automatically sort by dateValue descending (newest first)
  const sortedAchievements = [...ACHIEVEMENTS_DATA].sort((a, b) =>
    b.dateValue.localeCompare(a.dateValue)
  );

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

  // Update vertical spine height so it starts at top circle center and ends at bottom circle center
  useEffect(() => {
    const updateSpine = () => {
      if (firstNodeRef.current && lastNodeRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const firstNodeRect = firstNodeRef.current.getBoundingClientRect();
        const lastNodeRect = lastNodeRef.current.getBoundingClientRect();

        const top = firstNodeRect.top + firstNodeRect.height / 2 - containerRect.top;
        const bottom = containerRect.bottom - (lastNodeRect.top + lastNodeRect.height / 2);

        setSpineStyle({
          top: `${Math.round(top)}px`,
          bottom: `${Math.round(bottom)}px`,
        });
      }
    };

    updateSpine();

    const resizeObserver = new ResizeObserver(() => {
      updateSpine();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateSpine);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSpine);
    };
  }, [sortedAchievements]);

  return (
    <section
      ref={sectionRef}
      className={`achievements-section ${isVisible ? 'is-visible' : ''}`}
      id="achievements"
    >
      <div className="achievements-inner">
        <div className="achievements-header-block">
          <h2 className="achievements-section-heading has-dash">ACHIEVEMENTS</h2>
          <p className="achievements-section-subtitle">
            Key milestones, hackathons, and software recognitions.
          </p>
        </div>

        <div className="timeline-container" ref={containerRef}>
          {/* Central Vertical Timeline Line spanning precisely from top node center to bottom node center */}
          <div className="timeline-spine" style={spineStyle} aria-hidden="true" />

          {/* Timeline Items */}
          <div className="timeline-items">
            {sortedAchievements.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isFirst = index === 0;
              const isLast = index === sortedAchievements.length - 1;

              return (
                <div
                  key={item.id}
                  className={`timeline-item ${isLeft ? 'is-left' : 'is-right'}`}
                >
                  {/* Central Node Circle */}
                  <div
                    className="timeline-node"
                    ref={isFirst ? firstNodeRef : isLast ? lastNodeRef : null}
                    aria-hidden="true"
                  >
                    <span className="node-dot" />
                  </div>

                  {/* SVG Connector Line */}
                  <div className="timeline-connector" aria-hidden="true">
                    <svg viewBox="0 0 120 40" preserveAspectRatio="none" className="connector-svg">
                      <path
                        d={isLeft ? 'M 0 20 Q 60 20 120 20' : 'M 120 20 Q 60 20 0 20'}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>

                  {/* Compact Achievement Card */}
                  <div className="achievement-card">
                    <div className="achievement-card-header">
                      <div className="achievement-icon-wrapper" aria-hidden="true">
                        <span className="achievement-icon">{item.icon}</span>
                      </div>
                      <div className="achievement-title-meta">
                        <h3 className="achievement-title">{item.title}</h3>
                        <span className="achievement-date">{item.date}</span>
                      </div>
                    </div>
                    <p className="achievement-description">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
