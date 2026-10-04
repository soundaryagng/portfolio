import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Filter,
  Medal
} from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

const CERT_TABS = ["ALL", "NPTEL", "INFOSYS", "INTERNSHIP"];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredCerts = certificatesData.filter((c) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'NPTEL') return c.issuer === 'NPTEL';
    if (activeTab === 'INFOSYS') return c.issuer.includes('Infosys');
    if (activeTab === 'INTERNSHIP') return c.issuer === 'Prodigy';
    return true;
  });

  return (
    <div className="certificates-window-content">
      {/* Header Banner */}
      <div className="app-window-header">
        <div className="header-badge">
          <Sparkles size={12} className="badge-sparkle-icon" />
          <span>CREDENTIAL VAULT // VERIFIED HONORS</span>
        </div>
        <h2 className="app-hero-title">
          VERIFIED <span className="title-gradient">CERTIFICATES</span>
        </h2>
        <p className="app-hero-subtitle">
          Standardized national examinations and industry course completion credentials validating engineering excellence.
        </p>
      </div>

      {/* Tabs */}
      <div className="projects-filter-bar">
        <div className="filter-label-group">
          <Filter size={13} />
          <span>FILTER:</span>
        </div>
        <div className="filter-buttons-scroll">
          {CERT_TABS.map((tab) => (
            <button
              key={tab}
              className={`filter-chip-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="certificates-grid">
        {filteredCerts.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="cert-top-row">
              <span className="cert-issuer-tag">{cert.issuer}</span>
              <span className={`cert-result-badge ${cert.resultType}`}>
                <Medal size={12} /> {cert.badgeLabel}
              </span>
            </div>

            <h3 className="cert-card-title">{cert.title}</h3>
            <p className="cert-card-desc">{cert.description}</p>

            <div className="cert-topics-section">
              <span className="cert-topics-label">Key Core Topics:</span>
              <div className="cert-topics-list">
                {cert.topics.map((t) => (
                  <span key={t} className="tech-badge cert-topic-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="cert-footer-status">
              <CheckCircle2 size={13} className="cert-verified-check" />
              <span>{cert.credentialStatus}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
