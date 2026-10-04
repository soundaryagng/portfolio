import React, { useState, useEffect } from 'react';

export default function TopBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const hoursStr = String(hours).padStart(2, '0');
      setTime(`${hoursStr}:${minutes}:${seconds} ${ampm}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="os-logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
          </svg>
        </span>
        <span className="os-brand">Soundarya OS</span>
        <span className="os-version">v1.0</span>
      </div>

      <div className="topbar-center">
        <div className="welcome-banner">
          <span className="welcome-dot"></span>
          <span className="welcome-text">Welcome to my Portfolio</span>
          <span className="welcome-dot"></span>
        </div>
      </div>

      <div className="topbar-right">
        {/* Wi-Fi Icon */}
        <div className="topbar-item" title="Wi-Fi: Connected (Ultra-speed 5G)">
          <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <circle cx="12" cy="20" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Sound Icon */}
        <div className="topbar-item" title="Audio: 100% Stereo Audio Stream">
          <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        </div>

        {/* Battery Icon */}
        <div className="topbar-item" title="Battery: 98% (Optimal State)">
          <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
            <line x1="22" y1="11" x2="22" y2="13" />
            <line x1="6" y1="12" x2="14" y2="12" strokeWidth="2.5" />
          </svg>
          <span className="battery-val">98%</span>
        </div>

        {/* Dynamic Clock */}
        <div className="topbar-item clock-display">
          <span>{time || '00:00:00 AM'}</span>
        </div>
      </div>
    </header>
  );
}
