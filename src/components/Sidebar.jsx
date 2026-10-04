import React from 'react';
import DesktopIcon from './DesktopIcon';

export default function Sidebar({ icons, selectedIconId, onSelectIcon, onOpenApp }) {
  return (
    <aside className="desktop-sidebar" onClick={(e) => e.stopPropagation()} aria-label="Desktop Applications Sidebar">
      <div className="desktop-icons-grid">
        {icons.map((item) => (
          <DesktopIcon
            key={item.id}
            id={item.id}
            title={item.title}
            icon={item.icon}
            isSelected={selectedIconId === item.id}
            onClick={(id) => onSelectIcon(id)}
            onDoubleClick={(id) => onOpenApp(id)}
          />
        ))}
      </div>
    </aside>
  );
}
