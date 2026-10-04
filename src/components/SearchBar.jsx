import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = "Search skills..." }) {
  return (
    <div className="skills-search-bar" role="search">
      <Search size={16} className="search-bar-icon" />
      <input
        type="text"
        className="search-bar-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search skills"
      />
      {value && (
        <button
          className="search-bar-clear"
          onClick={() => onChange('')}
          title="Clear search"
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
