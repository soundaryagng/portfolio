import React from 'react';

export default function DesktopIcon({ id, title, icon: IconComponent, onDoubleClick, onClick, isSelected }) {
  const handleClick = (e) => {
    if (onClick) onClick(id, e);
    if (isSelected || (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches)) {
      if (onDoubleClick) onDoubleClick(id);
    }
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    if (onDoubleClick) onDoubleClick(id);
  };

  return (
    <button
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      title={`${title} (Double-click to open)`}
      aria-label={title}
    >
      <div className="icon-wrapper">
        {React.isValidElement(IconComponent) ? (
          IconComponent
        ) : typeof IconComponent === 'string' && IconComponent.startsWith('<svg') ? (
          <span className="icon-svg-wrapper" dangerouslySetInnerHTML={{ __html: IconComponent }} />
        ) : typeof IconComponent === 'string' ? (
          <span className="icon-fallback">{IconComponent}</span>
        ) : IconComponent ? (
          React.createElement(IconComponent, { className: 'os-line-icon', size: 24, strokeWidth: 1.8 })
        ) : null}
      </div>
      <span className="icon-title">{title}</span>
    </button>
  );
}

