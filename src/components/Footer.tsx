import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: '1px solid #e2e8f0',
      padding: '24px 48px',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      fontSize: '0.85rem',
      color: '#64748b'
    }}>
      <div>
        © {new Date().getFullYear()} JuliaPortfolio &bull; Юлия Асланова. Все права защищены.
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span>Писательница &bull; Калифорния</span>
        <span style={{ background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', color: '#334155' }}>
          JuliaPortfolio &bull; Hosted on Vercel
        </span>
      </div>
    </footer>
  );
};
