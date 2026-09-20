import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const STORAGE_KEY = 'portfolio_session_visitor_count';
    const SESSION_KEY = 'portfolio_session_active';

    // Retrieve previous session count (starts at 1 for the initial visit)
    let count = parseInt(localStorage.getItem(STORAGE_KEY) || '1', 10);
    if (isNaN(count) || count < 1) count = 1;

    // Check if this is a new browser session
    const isSessionActive = sessionStorage.getItem(SESSION_KEY);
    if (!isSessionActive) {
      // Increment count only when a new browser session is initiated after the first visit
      if (localStorage.getItem(STORAGE_KEY)) {
        count += 1;
      }
      localStorage.setItem(STORAGE_KEY, count.toString());
      sessionStorage.setItem(SESSION_KEY, 'true');
    }

    setVisitorCount(count);
  }, []);

  if (visitorCount === null) return null;

  return (
    <div className="visitor-badge" aria-label={`Session Visitor Count: ${visitorCount}`}>
      <span className="visitor-pulse" />
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span className="visitor-label">Visitors:</span>
      <span className="visitor-count">{visitorCount.toLocaleString()}</span>
    </div>
  );
}
