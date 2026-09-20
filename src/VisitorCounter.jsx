import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(() => {
    const cached = localStorage.getItem('portfolio_cached_global_visitor_count');
    return cached ? parseInt(cached, 10) : null;
  });

  useEffect(() => {
    const KEY = 'kyush02_portfolio_global_visitors';
    const SESSION_KEY = 'portfolio_global_session_active';
    const CACHE_KEY = 'portfolio_cached_global_visitor_count';

    const isSessionActive = sessionStorage.getItem(SESSION_KEY);

    // If new browser session: increment global counter (/hit)
    // If active session refresh: fetch current global counter without incrementing (/get)
    const endpoint = !isSessionActive
      ? `https://countapi.mileshilliard.com/api/v1/hit/${KEY}`
      : `https://countapi.mileshilliard.com/api/v1/get/${KEY}`;

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error('Global counter API error');
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setVisitorCount(data.value);
          localStorage.setItem(CACHE_KEY, data.value.toString());
          if (!isSessionActive) {
            sessionStorage.setItem(SESSION_KEY, 'true');
          }
        }
      })
      .catch((err) => {
        console.warn('Global visitor counter fallback:', err);
        const fallback = parseInt(localStorage.getItem(CACHE_KEY) || '1', 10);
        setVisitorCount(fallback);
      });
  }, []);

  if (visitorCount === null) return null;

  return (
    <div className="visitor-badge" aria-label={`Global Visitor Count: ${visitorCount}`}>
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
