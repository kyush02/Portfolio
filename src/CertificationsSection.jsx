import { useState, useEffect, useRef } from 'react';

const CERTIFICATIONS = [
  {
    id: 'oracle-genai',
    tabLabel: 'Oracle GenAI Professional',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    issued: 'October 2025',
    expires: 'October 2027',
    image: '/certifications/oracle-genai-professional.png',
    badge: '📜',
  },
  {
    id: 'iei-membership',
    tabLabel: 'IEI Membership',
    title: 'Certificate of Membership',
    issuer: 'The Institution of Engineers (India) [IEI]',
    issued: 'November 2025',
    expires: 'November 2029',
    image: '/certifications/iei-membership.png',
    badge: '🏛️',
  },
  {
    id: 'energy-literacy',
    tabLabel: 'Energy Literacy Training',
    title: 'ENERGY LITERACY TRAINING',
    issuer: 'Energy Swaraj Foundation',
    issued: 'November 2025',
    description:
      'Completed 12-module Energy Literacy Training covering energy conservation, carbon neutrality, and sustainable energy.',
    image: '/certifications/energy-literacy-training.png',
    badge: '⚡',
  },
  {
    id: 'atf-2025',
    tabLabel: 'ATF 2025',
    title: 'ATF 2025: Stage 2 Candidate',
    issuer: 'AlgoUniversity',
    issued: 'October 2025',
    image: '/certifications/atf-2025.png',
    badge: '🚀',
  },
];

export default function CertificationsSection() {
  const [selectedId, setSelectedId] = useState(CERTIFICATIONS[0].id);
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const selectedCert = CERTIFICATIONS.find((cert) => cert.id === selectedId);

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

  const handleTabClick = (id) => {
    setImageError(false);
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className={`certifications-section ${isVisible ? 'is-visible' : ''}`}
      id="certifications"
    >
      <div className="certifications-inner">
        <div className="certifications-header-block">
          <h2 className="certifications-section-heading has-dash">CERTIFICATIONS</h2>
          <p className="certifications-section-subtitle">
            Professional credentials and completed programs.
          </p>
        </div>

        {/* Centered Row of Certification Buttons */}
        <div className="cert-tabs" role="tablist" aria-label="Certifications selector">
          {CERTIFICATIONS.map((cert) => {
            const isActive = cert.id === selectedId;
            return (
              <button
                key={cert.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabClick(cert.id)}
                className={`cert-tab ${isActive ? 'cert-tab--active' : ''}`}
              >
                {cert.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Certificate Viewer */}
        <div className={`cert-viewer-wrapper ${selectedCert ? 'is-open' : ''}`}>
          <div className="cert-viewer-inner">
            {selectedCert && (
              <div className="cert-viewer-card" role="tabpanel">
                {/* Certificate Metadata Header */}
                <div className="cert-meta-header">
                  <div className="cert-icon-badge" aria-hidden="true">
                    {selectedCert.badge}
                  </div>
                  <div className="cert-meta-info">
                    <h3 className="cert-title">{selectedCert.title}</h3>
                    <p className="cert-issuer-date">
                      <span className="cert-issuer">{selectedCert.issuer}</span>
                      <span className="cert-dot">•</span>
                      <span>Issued {selectedCert.issued}</span>
                      {selectedCert.expires && (
                        <>
                          <span className="cert-dot">•</span>
                          <span>Expires {selectedCert.expires}</span>
                        </>
                      )}
                    </p>
                    {selectedCert.description && (
                      <p className="cert-description">{selectedCert.description}</p>
                    )}
                  </div>
                </div>

                {/* Certificate Image Container */}
                <div className="cert-image-container">
                  {!imageError ? (
                    <img
                      src={selectedCert.image}
                      alt={`Certificate for ${selectedCert.title} issued by ${selectedCert.issuer}`}
                      className="cert-image"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="cert-placeholder-card">
                      <div className="cert-placeholder-content">
                        <span className="cert-placeholder-icon" aria-hidden="true">
                          {selectedCert.badge}
                        </span>
                        <h4>{selectedCert.title}</h4>
                        <p>{selectedCert.issuer}</p>
                        <span className="cert-placeholder-note">
                          Certificate Image Pending — Add image to <code>public{selectedCert.image}</code>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
