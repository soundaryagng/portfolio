import React, { useState, useMemo } from 'react';
import { Cpu, Sparkles, Filter } from 'lucide-react';
import { skillCategories, skillFilterKeys } from '../data/portfolioData';
import SearchBar from '../components/SearchBar';
import SkillCategory from '../components/SkillCategory';

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Compute filtered categories and skills
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return skillCategories
      .map((cat) => {
        // If a specific category filter is chosen, check match
        const matchesFilter =
          activeFilter === 'All' ||
          cat.filterKey.toLowerCase() === activeFilter.toLowerCase();

        if (!matchesFilter) {
          return null;
        }

        // If query is empty, return all skills in this category
        if (!query) {
          return cat;
        }

        // Check if the category title or filterKey matches query
        const categoryMatches =
          cat.title.toLowerCase().includes(query) ||
          cat.filterKey.toLowerCase().includes(query) ||
          cat.id.toLowerCase().includes(query);

        if (categoryMatches) {
          // If category name matches (e.g. "DevOps"), include all its skills
          return cat;
        }

        // Otherwise filter specific skills within category
        const matchingSkills = cat.skills.filter((s) =>
          s.name.toLowerCase().includes(query)
        );

        if (matchingSkills.length > 0) {
          return {
            ...cat,
            skills: matchingSkills
          };
        }

        return null;
      })
      .filter(Boolean);
  }, [searchQuery, activeFilter]);

  // Total matching skills count
  const totalSkillsCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <div className="skills-window-content">
      {/* 1. Header Banner */}
      <div className="skills-header-banner">
        <div className="skills-badge">
          <Sparkles size={12} className="skills-badge-icon" />
          <span>TECHNICAL SPECIFICATION // KERNEL ASSETS</span>
        </div>
        <h2 className="skills-hero-title">
          TECHNICAL <span className="skills-title-highlight">SKILLS</span>
        </h2>
        <p className="skills-subtitle">
          Core competencies and verified engineering proficiencies across software development, web systems, and computational intelligence.
        </p>
      </div>

      {/* 2. Controls Toolbar: Search & Category Filters */}
      <div className="skills-toolbar">
        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search skills (e.g. React, Java, DevOps, C++)..."
        />

        {/* Filter Pills */}
        <div className="skills-filter-group" role="tablist" aria-label="Skill category filter">
          <div className="filter-label">
            <Filter size={13} />
            <span>FILTER:</span>
          </div>
          <div className="filter-pills-list">
            {skillFilterKeys.map((key) => {
              const isActive = activeFilter === key;
              return (
                <button
                  key={key}
                  className={`filter-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveFilter(key)}
                  role="tab"
                  aria-selected={isActive}
                  title={`Filter by ${key}`}
                >
                  <span>{key}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Skills Categories Container */}
      <div className="skills-categories-wrapper">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <SkillCategory
              key={cat.id}
              categoryId={cat.id}
              title={cat.title}
              skills={cat.skills}
            />
          ))
        ) : (
          <div className="skills-empty-state">
            <Cpu size={36} className="empty-state-icon" />
            <h4 className="empty-state-title">No Matching Skills Found</h4>
            <p className="empty-state-desc">
              No technical skill matched "{searchQuery}" under the "{activeFilter}" filter.
            </p>
            <button
              className="empty-clear-btn"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. Footer System Bar */}
      <div className="skills-footer-status">
        <div className="status-item">
          <span className="status-dot">●</span>
          <span>Verified Technologies: <strong>{totalSkillsCount}</strong></span>
        </div>
        <div className="status-filter-info">
          <span>Active Scope: <strong>{activeFilter}</strong></span>
        </div>
      </div>
    </div>
  );
}
