import React, { useRef, useState, useEffect } from 'react';

export default function Window({
  id,
  title,
  icon,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  onFocus,
  onMinimize,
  onMaximize,
  onClose,
  initialPosition = { x: 120, y: 60 },
  initialSize = { width: 680, height: 460 },
  children
}) {
  const windowRef = useRef(null);
  const [position, setPosition] = useState(initialPosition);
  const [size] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, posX: 0, posY: 0 });

  // Handle title bar dragging
  const handleMouseDown = (e) => {
    onFocus(id);
    if (isMaximized) return; // Prevent drag when maximized
    if (e.target.closest('.win-controls')) return; // Ignore control buttons

    setIsDragging(true);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      posX: position.x,
      posY: position.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartRef.current.mouseX;
      const deltaY = e.clientY - dragStartRef.current.mouseY;

      const newX = Math.max(0, Math.min(window.innerWidth - 100, dragStartRef.current.posX + deltaX));
      const newY = Math.max(0, Math.min(window.innerHeight - 80, dragStartRef.current.posY + deltaY));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  const windowStyles = isMaximized
    ? {
        position: 'absolute',
        top: '8px',
        left: '8px',
        right: '8px',
        bottom: '8px',
        width: 'auto',
        height: 'auto',
        zIndex: zIndex
      }
    : {
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        maxWidth: 'calc(100vw - 24px)',
        maxHeight: 'calc(100vh - 96px)',
        zIndex: zIndex
      };

  return (
    <div
      ref={windowRef}
      className={`os-window ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}
      style={windowStyles}
      onMouseDown={() => onFocus(id)}
    >
      {/* Title Bar */}
      <div className="window-titlebar" onMouseDown={handleMouseDown}>
        <div className="titlebar-info">
          <span className="window-app-icon">
            {React.isValidElement(icon) ? (
              icon
            ) : typeof icon === 'string' && icon.startsWith('<svg') ? (
              <span dangerouslySetInnerHTML={{ __html: icon }} />
            ) : typeof icon === 'string' ? (
              icon
            ) : icon ? (
              React.createElement(icon, { size: 16, strokeWidth: 2, className: 'win-titlebar-icon' })
            ) : null}
          </span>
          <span className="window-title-text">{title}</span>
        </div>

        {/* Window Controls */}
        <div className="win-controls">
          <button
            className="win-btn win-btn-minimize"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize(id);
            }}
            title="Minimize"
            aria-label="Minimize"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          <button
            className="win-btn win-btn-maximize"
            onClick={(e) => {
              e.stopPropagation();
              onMaximize(id);
            }}
            title={isMaximized ? 'Restore' : 'Maximize'}
            aria-label={isMaximized ? 'Restore' : 'Maximize'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            </svg>
          </button>

          <button
            className="win-btn win-btn-close"
            onClick={(e) => {
              e.stopPropagation();
              onClose(id);
            }}
            title="Close"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Window Body Content */}
      <div className="window-body">
        {children}
      </div>
    </div>
  );
}
