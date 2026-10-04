import React, { useState } from 'react';
import {
  House,
  UserRound,
  Folder,
  BriefcaseBusiness,
  Award,
  Code2,
  FileText,
  Mail,
  Terminal,
  Settings
} from 'lucide-react';
import Desktop from './components/Desktop';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Taskbar from './components/Taskbar';
import Window from './components/Window';

// Applications
import Home from './apps/Home';
import About from './apps/About';
import Skills from './apps/Skills';
import Projects from './apps/Projects';
import Experience from './apps/Experience';
import Certificates from './apps/Certificates';
import Resume from './apps/Resume';
import Contact from './apps/Contact';

import { portfolioData } from './data/portfolioData';
import './App.css';


// 8 Primary Desktop Applications for the Sidebar
const SIDEBAR_APPS = [
  { id: 'home', title: 'Home', icon: House },
  { id: 'about', title: 'About Me', icon: UserRound },
  { id: 'projects', title: 'Projects', icon: Folder },
  { id: 'experience', title: 'Experience', icon: BriefcaseBusiness },
  { id: 'certificates', title: 'Certificates', icon: Award },
  { id: 'skills', title: 'Skills', icon: Code2 },
  { id: 'resume', title: 'Resume', icon: FileText },
  { id: 'contact', title: 'Contact', icon: Mail }
];

// All applications including system utilities
const ALL_APPS = [
  ...SIDEBAR_APPS,
  { id: 'terminal', title: 'Terminal', icon: Terminal },
  { id: 'settings', title: 'Settings', icon: Settings }
];

export default function App() {
  const [windows, setWindows] = useState([
    {
      id: 'home',
      title: 'Soundarya OS System Hub',
      icon: House,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 51,
      position: { x: 120, y: 70 },
      size: { width: 680, height: 480 }
    },
    {
      id: 'about',
      title: 'About Me',
      icon: UserRound,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 52,
      position: { x: 150, y: 75 },
      size: { width: 700, height: 500 }
    },
    {
      id: 'projects',
      title: 'Projects Explorer (7 Systems)',
      icon: Folder,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 53,
      position: { x: 170, y: 70 },
      size: { width: 760, height: 520 }
    },
    {
      id: 'experience',
      title: 'Experience & Career Timeline',
      icon: BriefcaseBusiness,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 52,
      position: { x: 180, y: 80 },
      size: { width: 680, height: 490 }
    },
    {
      id: 'certificates',
      title: 'Certificates & Credentials Vault',
      icon: Award,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 52,
      position: { x: 200, y: 80 },
      size: { width: 700, height: 490 }
    },
    {
      id: 'skills',
      title: 'Technical Skills Matrix',
      icon: Code2,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 52,
      position: { x: 190, y: 75 },
      size: { width: 720, height: 510 }
    },
    {
      id: 'resume',
      title: 'Curriculum Vitae',
      icon: FileText,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 52,
      position: { x: 210, y: 75 },
      size: { width: 720, height: 520 }
    },
    {
      id: 'contact',
      title: 'Direct Contact Dispatch',
      icon: Mail,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 52,
      position: { x: 220, y: 85 },
      size: { width: 680, height: 480 }
    },
    {
      id: 'terminal',
      title: 'Developer Terminal CLI',
      icon: Terminal,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 52,
      position: { x: 180, y: 95 },
      size: { width: 650, height: 420 }
    },
    {
      id: 'settings',
      title: 'System Preferences & Kernel',
      icon: Settings,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 52,
      position: { x: 200, y: 105 },
      size: { width: 580, height: 430 }
    }
  ]);

  const [focusedWindowId, setFocusedWindowId] = useState(null);
  const [_highestZIndex, setHighestZIndex] = useState(55);
  const [selectedIconId, setSelectedIconId] = useState(null);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [startSearch, setStartSearch] = useState('');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    "Soundarya OS v1.0 [Computational Intelligence Kernel]",
    "Type 'help' or click shortcuts to run applications.",
    "System status: Online | Host: 127.0.0.1:4000 | Theme: Electric Blue + Violet"
  ]);

  // Bring a window to front
  const focusWindow = (id) => {
    setFocusedWindowId(id);
    setHighestZIndex((prev) => {
      const nextZ = prev >= 95 ? 55 : prev + 1;
      setWindows((wList) =>
        wList.map((w) => (w.id === id ? { ...w, zIndex: nextZ, isMinimized: false } : w))
      );
      return nextZ;
    });
  };

  // Open / Launch an application
  const openApp = (id) => {
    setIsStartOpen(false);
    setFocusedWindowId(id);
    setHighestZIndex((prev) => {
      const nextZ = prev >= 95 ? 55 : prev + 1;
      setWindows((wList) =>
        wList.map((w) =>
          w.id === id
            ? { ...w, isOpen: true, isMinimized: false, zIndex: nextZ }
            : w
        )
      );
      return nextZ;
    });
  };

  // Window control actions
  const minimizeWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
    if (focusedWindowId === id) {
      setFocusedWindowId(null);
    }
  };

  const maximizeWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
    focusWindow(id);
  };

  const closeWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false, isMinimized: false } : w))
    );
    if (focusedWindowId === id) {
      setFocusedWindowId(null);
    }
  };

  // Taskbar Tab Item Click: Toggle Minimize/Restore
  const handleTaskbarAppClick = (id) => {
    const targetWin = windows.find((w) => w.id === id);
    if (!targetWin) return;

    if (targetWin.isMinimized) {
      focusWindow(id);
    } else if (focusedWindowId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  // Show Desktop Peek Button: Minimize all / Restore all
  const handleShowDesktop = () => {
    const anyOpenNonMinimized = windows.some((w) => w.isOpen && !w.isMinimized);
    setWindows((prev) =>
      prev.map((w) =>
        w.isOpen ? { ...w, isMinimized: anyOpenNonMinimized } : w
      )
    );
    if (anyOpenNonMinimized) setFocusedWindowId(null);
  };

  // Terminal command handler
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, `$ ${terminalInput}`];

    if (cmd === 'help') {
      newHistory.push(
        "Available commands: 'projects', 'about', 'skills', 'experience', 'certs', 'resume', 'contact', 'clear', 'status'"
      );
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'status') {
      newHistory.push(
        "Kernel: Soundarya OS v1.0 | Engine: React 19 | Memory: Optimal | Status: Active"
      );
    } else if (cmd === 'projects') {
      openApp('projects');
      newHistory.push("Launching Projects Explorer...");
    } else if (cmd === 'about') {
      openApp('about');
      newHistory.push("Launching About Me...");
    } else if (cmd === 'skills') {
      openApp('skills');
      newHistory.push("Launching Skills Matrix...");
    } else if (cmd === 'experience') {
      openApp('experience');
      newHistory.push("Launching Experience Timeline...");
    } else if (cmd === 'certs') {
      openApp('certificates');
      newHistory.push("Launching Certificates Vault...");
    } else if (cmd === 'resume') {
      openApp('resume');
      newHistory.push("Launching Curriculum Vitae...");
    } else if (cmd === 'contact') {
      openApp('contact');
      newHistory.push("Launching Contact Dispatch...");
    } else {
      newHistory.push(`command not found: '${cmd}'. Type 'help' for options.`);
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  // Render appropriate content inside each window
  const renderAppContent = (appId) => {
    switch (appId) {
      case 'home':
        return (
          <div className="app-placeholder-box">
            <span className="placeholder-badge">// SYSTEM HUB & DASHBOARD</span>
            <h3 className="placeholder-title">Soundarya OS Command Center</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '18px' }}>
              Welcome to the central command hub of Soundarya OS. Discover verified projects, explored technologies, credentials, and professional contact pathways.
            </p>

            <div className="home-dashboard-stats">
              <div className="dash-stat-tile" onClick={() => openApp('projects')}>
                <div className="stat-number">7</div>
                <div className="stat-label">Built Projects</div>
                <span className="stat-sub">React, Java, Python, AI</span>
              </div>
              <div className="dash-stat-tile" onClick={() => openApp('certificates')}>
                <div className="stat-number">5</div>
                <div className="stat-label">Verified Certs</div>
                <span className="stat-sub">NPTEL Elite, Infosys AI</span>
              </div>
              <div className="dash-stat-tile" onClick={() => openApp('skills')}>
                <div className="stat-number">5</div>
                <div className="stat-label">Skill Domains</div>
                <span className="stat-sub">Web, AI/ML, Backend</span>
              </div>
            </div>

            <div className="home-card-features">
              <div className="feature-tile" onClick={() => openApp('projects')} style={{ cursor: 'pointer' }}>
                <div className="tile-title"><span className="blue-dot">●</span> Projects Showcase</div>
                <p className="tile-desc">Explore HappyKids Kindergarten, Tour Management, Heal Hub, and AI research.</p>
              </div>
              <div className="feature-tile" onClick={() => openApp('about')} style={{ cursor: 'pointer' }}>
                <div className="tile-title"><span className="violet-dot">●</span> Profile & Education</div>
                <p className="tile-desc">B.E. Computer Science & Engineering background and computational intelligence focus.</p>
              </div>
            </div>
          </div>
        );

      case 'about':
        return <About />;

      case 'projects':
        return <Projects />;

      case 'experience':
        return <Experience />;

      case 'certificates':
        return <Certificates />;

      case 'skills':
        return <Skills />;

      case 'resume':
        return <Resume />;

      case 'contact':
        return <Contact />;

      case 'terminal':
        return (
          <div className="terminal-window-content">
            <div className="terminal-output-area">
              {terminalHistory.map((line, idx) => (
                <div key={idx} className="terminal-line">
                  {line.startsWith('$') ? (
                    <span className="terminal-cmd-echo">{line}</span>
                  ) : (
                    <span className="terminal-sys-msg">{line}</span>
                  )}
                </div>
              ))}
            </div>
            <form onSubmit={handleTerminalSubmit} className="terminal-input-row">
              <span className="terminal-prompt-user">soundarya@os:~$</span>
              <input
                type="text"
                className="terminal-input-field"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                autoFocus
                placeholder="type a command..."
              />
            </form>
          </div>
        );

      case 'settings':
        return (
          <div className="app-placeholder-box">
            <span className="placeholder-badge">// SYSTEM CONFIGURATION</span>
            <h3 className="placeholder-title">Settings & Theme</h3>
            <div className="feature-tile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div className="tile-title" style={{ color: '#fff' }}>Active Theme</div>
                <div className="tile-desc">Deep Navy Black + Electric Blue + Violet Accents</div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ display: 'inline-block', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--neon-blue)', boxShadow: '0 0 10px var(--neon-blue)' }} />
                <span style={{ display: 'inline-block', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--neon-violet)', boxShadow: '0 0 10px var(--neon-violet)' }} />
              </div>
            </div>
            <div className="feature-tile">
              <div className="tile-title">Kernel Details</div>
              <div className="tile-desc" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', marginTop: '6px' }}>
                Soundarya OS Build: v1.0 Production<br />
                Architecture: React 19 Component OS Shell<br />
                Vite Host: 127.0.0.1:4000 (Strict Port)
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Filtered applications for Start Menu search
  const filteredApps = ALL_APPS.filter(
    (app) =>
      app.title.toLowerCase().includes(startSearch.toLowerCase()) ||
      app.id.toLowerCase().includes(startSearch.toLowerCase())
  );

  return (
    <Desktop>
      {/* 1. TOP SYSTEM BAR (z-index: 100) */}
      <TopBar />

      {/* 2. DESKTOP WORKSPACE (z-index: 10) */}
      <div
        className="desktop-workspace"
        onClick={() => {
          setSelectedIconId(null);
          if (isStartOpen) setIsStartOpen(false);
        }}
      >
        {/* Left Sidebar containing the 8 desktop application icons */}
        <Sidebar
          icons={SIDEBAR_APPS}
          selectedIconId={selectedIconId}
          onSelectIcon={setSelectedIconId}
          onOpenApp={openApp}
        />

        {/* Center / Right Hero Section (Rendered ONCE by Home component) */}
        <Home onExplore={() => openApp('projects')} />

        {/* Floating Windows Workspace (z-index: 50) */}
        <div className="windows-workspace-container" onClick={(e) => e.stopPropagation()}>
          {windows.map((w) => (
            <Window
              key={w.id}
              id={w.id}
              title={w.title}
              icon={w.icon}
              isOpen={w.isOpen}
              isMinimized={w.isMinimized}
              isMaximized={w.isMaximized}
              zIndex={w.zIndex}
              initialPosition={w.position}
              initialSize={w.size}
              onFocus={focusWindow}
              onMinimize={minimizeWindow}
              onMaximize={maximizeWindow}
              onClose={closeWindow}
            >
              {renderAppContent(w.id)}
            </Window>
          ))}
        </div>
      </div>

      {/* 3. START MENU FLYOUT (z-index: 200) */}
      {isStartOpen && (
        <div className="start-menu" onClick={(e) => e.stopPropagation()}>
          <div className="start-menu-top">
            <div className="start-avatar">SP</div>
            <div className="start-user-info">
              <div className="start-name">{portfolioData.profile.name}</div>
              <div className="start-spec">{portfolioData.profile.domain}</div>
            </div>
          </div>

          <div className="start-search-bar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search applications..."
              value={startSearch}
              onChange={(e) => setStartSearch(e.target.value)}
              autoFocus
            />
          </div>

          <div className="start-apps-container">
            <div className="start-category-label">PORTFOLIO APPLICATIONS</div>
            <div className="start-apps-grid">
              {filteredApps.length > 0 ? (
                filteredApps.map((app) => (
                  <button
                    key={app.id}
                    className="start-app-button"
                    onClick={() => openApp(app.id)}
                  >
                    <span className="start-app-icon">
                      {React.isValidElement(app.icon) ? (
                        app.icon
                      ) : typeof app.icon === 'string' && app.icon.startsWith('<svg') ? (
                        <span dangerouslySetInnerHTML={{ __html: app.icon }} />
                      ) : typeof app.icon === 'string' ? (
                        app.icon
                      ) : app.icon ? (
                        React.createElement(app.icon, { size: 16, strokeWidth: 1.8, className: 'start-item-svg' })
                      ) : null}
                    </span>
                    <span>{app.title}</span>
                  </button>
                ))
              ) : (
                <div className="no-apps-found">No matching applications found</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 4. FUTURISTIC BOTTOM TASKBAR (z-index: 100) */}
      <Taskbar
        windows={windows}
        focusedWindowId={focusedWindowId}
        isStartOpen={isStartOpen}
        onToggleStart={(e) => {
          e.stopPropagation();
          setIsStartOpen((prev) => !prev);
        }}
        onAppClick={handleTaskbarAppClick}
        onShowDesktop={handleShowDesktop}
        onOpenApp={openApp}
      />
    </Desktop>
  );
}
