import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Soundarya OS Runtime Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#020617',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{
            maxWidth: '560px',
            border: '1px solid rgba(59, 130, 246, 0.5)',
            borderRadius: '12px',
            background: 'rgba(11, 19, 38, 0.95)',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.25)',
            padding: '28px'
          }}>
            <h2 style={{ color: '#60a5fa', marginBottom: '12px' }}>Soundarya OS Recovery</h2>
            <p style={{ color: '#e2e8f0', marginBottom: '16px' }}>
              The system encountered an unexpected startup state:
            </p>
            <pre style={{
              background: 'rgba(0,0,0,0.6)',
              padding: '12px',
              borderRadius: '6px',
              color: '#93c5fd',
              fontSize: '12px',
              overflowX: 'auto',
              marginBottom: '20px'
            }}>
              {String(this.state.error?.message || this.state.error)}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Reboot OS
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
