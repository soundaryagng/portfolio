import React, { useState, useEffect } from 'react';

export default function Taskbar({
  windows,
  focusedWindowId,
  isStartOpen,
  onToggleStart,
  onAppClick,
  onShowDesktop,
  onOpenApp
}) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Time format: HH:MM AM/PM
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const hoursStr = String(hours).padStart(2, '0');
      setTime(`${hoursStr}:${minutes} ${ampm}`);

      // Date format: Day, DD Mon YYYY
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      setDate(now.toLocaleDateString('en-US', options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      const query = searchQuery.trim().toLowerCase();
      if (!query) return;

      const matchedWin = windows.find(
        (w) => w.id.toLowerCase().includes(query) || w.title.toLowerCase().includes(query)
      );

      if (matchedWin) {
        onOpenApp(matchedWin.id);
      } else {
        // Fallback open terminal if searching for command
        onOpenApp('terminal');
      }
      setSearchQuery('');
    }
  };

  // Open windows on taskbar
  const openWindows = windows.filter((w) => w.isOpen);

  return (
    <footer className="taskbar">
      <div className="taskbar-left">
        {/* Start Button */}
        <button
          className={`taskbar-start-btn ${isStartOpen ? 'active' : ''}`}
          onClick={onToggleStart}
          title="Open Start Menu"
          aria-label="Start Menu"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <rect x="3" y="3" width="8" height="8" rx="1.5" />
            <rect x="13" y="3" width="8" height="8" rx="1.5" />
            <rect x="3" y="13" width="8" height="8" rx="1.5" />
            <rect x="13" y="13" width="8" height="8" rx="1.5" />
          </svg>
        </button>

        {/* Taskbar Search Input */}
        <div className="taskbar-search-box">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="taskbar-search-input"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            aria-label="Search applications"
          />
        </div>

        {/* Quick Launch Icons */}
        <div className="quick-launch-group">
          {/* Projects Folder */}
          <button
            className="quick-icon-btn"
            onClick={() => onOpenApp('projects')}
            title="Projects Explorer"
            aria-label="Projects Explorer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* Developer Skills </> */}
          <button
            className="quick-icon-btn"
            onClick={() => onOpenApp('skills')}
            title="Developer Skills"
            aria-label="Developer Skills"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </button>

          {/* Terminal CLI >_ */}
          <button
            className="quick-icon-btn"
            onClick={() => onOpenApp('terminal')}
            title="Terminal CLI"
            aria-label="Terminal CLI"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M6 9l4 3-4 3" />
              <line x1="12" y1="15" x2="16" y2="15" />
            </svg>
          </button>

          {/* Settings gear */}
          <button
            className="quick-icon-btn"
            onClick={() => onOpenApp('settings')}
            title="System Settings"
            aria-label="System Settings"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Center: Open Application Indicators */}
      <div className="taskbar-active-apps">
        {openWindows.map((app) => {
          const isActive = focusedWindowId === app.id && !app.isMinimized;
          return (
            <button
              key={app.id}
              className={`taskbar-app-item ${isActive ? 'active' : ''} ${app.isMinimized ? 'minimized' : ''}`}
              onClick={() => onAppClick(app.id)}
              title={`${app.title} (${isActive ? 'Focused' : app.isMinimized ? 'Minimized' : 'Background'})`}
            >
              <span className="app-item-icon">
                {React.isValidElement(app.icon) ? (
                  app.icon
                ) : typeof app.icon === 'string' && app.icon.startsWith('<svg') ? (
                  <span dangerouslySetInnerHTML={{ __html: app.icon }} />
                ) : typeof app.icon === 'string' ? (
                  app.icon
                ) : app.icon ? (
                  React.createElement(app.icon, { size: 14, strokeWidth: 2, className: 'taskbar-tab-svg' })
                ) : null}
              </span>
              <span className="app-item-label">{app.title}</span>
            </button>
          );
        })}
      </div>

      {/* Right: System Tray & Dynamic Clock */}
      <div className="taskbar-right">
        {/* Tray System Indicators */}
        <div className="tray-icons">
          <span title="Wi-Fi: Connected (Ultra-speed 5G)" aria-label="Wi-Fi">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <circle cx="12" cy="20" r="1.5" fill="currentColor" />
            </svg>
          </span>
          <span title="Audio: 100% Stereo Audio Stream" aria-label="Audio">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          </span>
          <span title="Battery: 98% (Optimal State)" aria-label="Battery">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <rect x="2" y="7" width="16" height="10" rx="2" />
              <line x1="22" y1="11" x2="22" y2="13" />
            </svg>
          </span>
        </div>

        {/* Dynamic Real-time Date and Time */}
        <div className="tray-datetime" title="System Calendar">
          <div className="tray-time">{time}</div>
          <div className="tray-date">{date}</div>
        </div>

        {/* Notification / Control Center Icon */}
        <div className="tray-control-btn" title="Control Center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>

        {/* Show Desktop Peek Strip */}
        <div
          className="peek-desktop-btn"
          onClick={onShowDesktop}
          title="Show Desktop (Minimize/Restore All)"
          aria-label="Show Desktop"
        />
      </div>
    </footer>
  );
}
