import React from 'react';

export default function Desktop({ children }) {
  return (
    <div className="soundarya-os">
      {/* Background Atmosphere Layers (z-index: 0) - Zero UI elements */}
      <div className="cyber-grid" aria-hidden="true" />
      <div className="ambient-glow glow-blue-top" aria-hidden="true" />
      <div className="ambient-glow glow-violet-bottom" aria-hidden="true" />

      {/* Main OS Viewport */}
      {children}
    </div>
  );
}
