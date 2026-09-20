import { useState, useEffect, useRef } from 'react';

/* ======================================================
   SKILLS DATA
   ====================================================== */
const SKILLS_DATA = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'C',      iconId: 'c' },
      { name: 'C++',    iconId: 'cpp' },
      { name: 'Python', iconId: 'python' },
    ],
  },
  {
    id: 'web',
    label: 'Web Development',
    skills: [
      { name: 'HTML',       iconId: 'html' },
      { name: 'CSS',        iconId: 'css' },
      { name: 'JavaScript', iconId: 'js' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platform',
    skills: [
      { name: 'Git',         iconId: 'git' },
      { name: 'VS Code',     iconId: 'vscode' },
      { name: 'Antigravity', iconId: 'antigravity' },
      { name: 'Vercel',      iconId: 'vercel' },
      { name: 'Supabase',    iconId: 'supabase' },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    skills: [
      { name: 'Team Leader',       iconId: 'leader' },
      { name: 'Team Collaborator', iconId: 'collab' },
      { name: 'Problem Solving',   iconId: 'solve' },
      { name: 'Vibe Coder',        iconId: 'vibe' },
    ],
  },
];

/* ======================================================
   ICON RENDERER
   ====================================================== */
function SkillIcon({ iconId }) {
  switch (iconId) {
    case 'c':
      return (
        <svg viewBox="0 0 128 128" width="38" height="38" aria-hidden="true">
          <path fill="#03599C" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-1-.1-2.2-.4-2.6zM64 103.5c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.2 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l13 7.5c-6.8 11.9-19.6 20-34.3 20z"/>
        </svg>
      );
    case 'cpp':
      return (
        <svg viewBox="0 0 128 128" width="38" height="38" aria-hidden="true">
          <path fill="#9C033A" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-1-.1-2.2-.4-2.6zM64 103.5c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.2 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l13 7.5c-6.8 11.9-19.6 20-34.3 20zm51.5-48.4h-3.7v3.7h-3.7v-3.7h-3.7v-3.7h3.7v-3.7h3.7v3.7h3.7zm11 0h-3.7v3.7h-3.7v-3.7h-3.7v-3.7h3.7v-3.7h3.7v3.7h3.7z"/>
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 128 128" width="38" height="38" aria-hidden="true">
          <linearGradient id="py-ga" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/>
          </linearGradient>
          <linearGradient id="py-gb" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/>
          </linearGradient>
          <path fill="url(#py-ga)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
          <path fill="url(#py-gb)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.548v23.515c0 6.693 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 128 128" width="38" height="38" aria-hidden="true">
          <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
          <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
          <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
          <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.336-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 128 128" width="38" height="38" aria-hidden="true">
          <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
          <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z"/>
          <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z"/>
          <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"/>
          <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.41l28.354-7.858.208-2.337 2.406-26.901z"/>
          <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711zM64.001 51.431v13.831H48.319l-.277-3.108-.631-7.012-.33-3.711z"/>
        </svg>
      );
    case 'js':
      return (
        <svg viewBox="0 0 128 128" width="38" height="38" aria-hidden="true">
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
          <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 128 128" width="38" height="38" aria-hidden="true">
          <path fill="#F34F29" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993L87.42 55.527c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.996-11.501z"/>
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 128 128" width="38" height="38" aria-hidden="true">
          <path fill="#0065A9" d="M90.767 11.239l-47.89 43.924L18.44 35.339 7.773 41.794l26.039 22.206L7.773 86.206l10.667 6.455 24.437-19.824 47.89 43.924 29.883-14.607V25.846L90.767 11.239zm8.45 84.428l-41.367-29.667 41.367-29.667v59.334z"/>
        </svg>
      );
    case 'antigravity':
      return (
        <svg viewBox="0 0 100 100" width="38" height="38" aria-hidden="true">
          <rect width="100" height="100" rx="18" fill="#18181b"/>
          <path d="M50 14 L63 44 L80 50 L63 56 L50 86 L37 56 L20 50 L37 44 Z" fill="#4f8ef7"/>
          <circle cx="50" cy="50" r="9" fill="white" opacity="0.92"/>
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 76 65" width="38" height="33" aria-hidden="true">
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000"/>
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 109 113" width="38" height="38" aria-hidden="true">
          <defs>
            <linearGradient id="sb-ga" x1="66.956%" x2="19.326%" y1="100%" y2="0%">
              <stop offset="0%" stopColor="#249361"/><stop offset="100%" stopColor="#3ECF8E"/>
            </linearGradient>
            <linearGradient id="sb-gb" x1="34.029%" x2="86.22%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#000" stopOpacity=".2"/><stop offset="100%" stopColor="#000" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path fill="url(#sb-ga)" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"/>
          <path fill="url(#sb-gb)" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"/>
          <path fill="#3ECF8E" d="M45.317 2.071C48.178-1.53 53.976.443 54.044 5.041l1.007 67.251H9.832c-8.19 0-12.758-9.46-7.665-15.874L45.317 2.071z"/>
        </svg>
      );
    case 'leader':
      return (
        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden="true">
          <circle cx="12" cy="6.5" r="3.5" stroke="#2563eb" strokeWidth="1.8"/>
          <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
          <ellipse cx="19.5" cy="6" rx="2.5" ry="2.5" fill="#93c5fd" fillOpacity="0.65"/>
          <ellipse cx="4.5" cy="6" rx="2.5" ry="2.5" fill="#93c5fd" fillOpacity="0.65"/>
          <path d="M12 13.5V11M10.5 11.8l1.5-1.5 1.5 1.5" stroke="#2563eb" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'collab':
      return (
        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden="true">
          <circle cx="8" cy="7" r="3" stroke="#2563eb" strokeWidth="1.8"/>
          <circle cx="16" cy="7" r="3" stroke="#93c5fd" strokeWidth="1.8"/>
          <path d="M2 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M10 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    case 'solve':
      return (
        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden="true">
          <path d="M12 2a7 7 0 015.292 11.635C16.496 14.83 16 16 16 17H8c0-1-.496-2.17-1.292-3.365A7 7 0 0112 2z" stroke="#2563eb" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M8 17h8M9 20h6M11 22h2" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M12 6v3.5M10.5 7.7h3" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'vibe':
      return (
        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden="true">
          <rect x="2" y="4" width="20" height="15" rx="3" stroke="#2563eb" strokeWidth="1.8"/>
          <path d="M7 9l3 3-3 3M13 15h4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="19.5" cy="5" r="3" fill="#f59e0b"/>
          <path d="M18.5 5l.7.7 1.3-1.3" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}

/* ======================================================
   ROPE LENGTHS — varied fractions of hang-area height
   ====================================================== */
const ROPE_FRACTIONS = [0.22, 0.38, 0.18, 0.44, 0.30, 0.35, 0.20, 0.40, 0.26];

/* ======================================================
   FLOAT ANIMATION PARAMS PER INDEX
   ====================================================== */
const FLOAT_PARAMS = [
  { dur: '3.4s', delay: '0s',    dy: 7,  rot:  1.2 },
  { dur: '4.2s', delay: '0.4s',  dy: 5,  rot: -0.9 },
  { dur: '3.8s', delay: '0.7s',  dy: 9,  rot:  1.5 },
  { dur: '4.6s', delay: '0.2s',  dy: 6,  rot: -1.2 },
  { dur: '3.1s', delay: '0.9s',  dy: 8,  rot:  0.8 },
];

/* ======================================================
   ROPE SVG — slightly organic cubic-bezier curve
   ====================================================== */
function RopeSvg({ height }) {
  const w = Math.sin(height * 0.022) * 3;
  const d = `M4,0 C${4 + w},${height * 0.32} ${4 - w},${height * 0.68} 4,${height}`;
  return (
    <svg
      className="skill-rope-svg"
      width="8"
      height={height}
      viewBox={`0 0 8 ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} stroke="#c4c4c4" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* ======================================================
   MAIN SKILLS SECTION
   ====================================================== */
export default function SkillsSection() {
  const [activeTab, setActiveTab]     = useState(null);
  const [renderedTab, setRenderedTab] = useState(null);
  const [animIn, setAnimIn]           = useState(false);
  const [isVisible, setIsVisible]     = useState(false);
  const [hangH, setHangH]             = useState(200);

  const sectionRef  = useRef(null);
  const hangAreaRef = useRef(null);
  const timerRef    = useRef(null);

  /* Scroll-in observer */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Measure hang area for dynamic rope sizing */
  useEffect(() => {
    if (!hangAreaRef.current) return;
    const ro = new ResizeObserver(entries => {
      const h = entries[0].contentRect.height;
      if (h > 40) setHangH(h);
    });
    ro.observe(hangAreaRef.current);
    return () => ro.disconnect();
  }, []);

  const switchTab = (id) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (activeTab === id) {
      /* Toggle off current tab */
      setAnimIn(false);
      timerRef.current = setTimeout(() => {
        setActiveTab(null);
        setRenderedTab(null);
      }, 320);
      return;
    }

    if (activeTab !== null) {
      /* Collapse current, then expand new */
      setAnimIn(false);
      timerRef.current = setTimeout(() => {
        setRenderedTab(id);
        setActiveTab(id);
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimIn(true)));
      }, 290);
    } else {
      /* First open */
      setRenderedTab(id);
      setActiveTab(id);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimIn(true)));
    }
  };

  const category = SKILLS_DATA.find(c => c.id === renderedTab) ?? null;

  return (
    <section
      ref={sectionRef}
      className={`skills-section${isVisible ? ' is-visible' : ''}`}
      id="skills"
    >
      <div className="skills-inner">

        {/* ── Heading ─────────────────────────────── */}
        <div className="skills-header-block">
          <h2 className="skills-section-heading has-dash">SKILLS</h2>
        </div>

        {/* ── Tab Bar ─────────────────────────────── */}
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {SKILLS_DATA.map(cat => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={`skill-tab-${cat.id}`}
              aria-selected={activeTab === cat.id}
              aria-controls={`skill-panel-${cat.id}`}
              className={`skill-tab${activeTab === cat.id ? ' skill-tab--active' : ''}`}
              onClick={() => switchTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Hanging Area ─────────────────────────── */}
        <div
          ref={hangAreaRef}
          className={`skills-hang-area${category ? ' skills-hang-area--open' : ''}`}
          role="region"
          id={category ? `skill-panel-${category.id}` : undefined}
          aria-label={category ? category.label : 'Select a category above'}
          aria-live="polite"
        >
          {category && (
            <div
              className={`skills-hang-row${animIn ? ' skills-hang-row--in' : ''}`}
              role="list"
            >
              {category.skills.map((skill, i) => {
                const frac  = ROPE_FRACTIONS[i % ROPE_FRACTIONS.length];
                const ropeH = Math.max(40, Math.round(hangH * frac));
                const delay = `${0.06 + i * 0.11}s`;
                const fp    = FLOAT_PARAMS[i % FLOAT_PARAMS.length];
                return (
                  <div
                    key={`${category.id}-${skill.name}`}
                    className={`hanging-item${animIn ? ' hanging-item--in' : ''}`}
                    style={{ '--item-delay': delay }}
                    role="listitem"
                  >
                    {/* Rope */}
                    <div className="rope-col" style={{ animationDelay: delay }}>
                      <RopeSvg height={ropeH} />
                    </div>

                    {/* Skill card */}
                    <div
                      className={`skill-card${animIn ? ' skill-card--in' : ''}`}
                      style={{
                        animationDelay: `${parseFloat(delay) + 0.14}s`,
                        '--fd':   fp.dur,
                        '--fdel': fp.delay,
                        '--fdy':  `${fp.dy}px`,
                        '--frot': `${fp.rot}deg`,
                      }}
                      tabIndex={0}
                      aria-label={skill.name}
                    >
                      <div className="skill-icon-wrap">
                        <SkillIcon iconId={skill.iconId} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
