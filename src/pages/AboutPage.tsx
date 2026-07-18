import React from 'react';
import { BookOpen, Compass, Waves } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="section-title">Обо мне</h2>

      <div className="bio-text">
        <p className="bio-paragraph">
          Меня зовут Асланова Юлия, и я пишу истории для детей и подростков.
        </p>
        <p className="bio-paragraph">
          О насекомых, сказочных персонажах, далеких планетах, загадках и любви.
        </p>
        <p className="bio-paragraph">
          Живу и работаю в Калифорнии, обожаю фантастику, детективы и истории про животных. Изучаю океанологию и экологию.
        </p>
      </div>

      {/* Interactive Highlights */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ background: '#f0fdf4', padding: '12px 18px', borderRadius: '12px', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: '10px', color: '#166534', fontSize: '0.9rem', fontWeight: 500 }}>
          <BookOpen size={18} /> Детская &amp; подростковая литература
        </div>
        <div style={{ background: '#f0f9ff', padding: '12px 18px', borderRadius: '12px', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', gap: '10px', color: '#075985', fontSize: '0.9rem', fontWeight: 500 }}>
          <Waves size={18} /> Океанология &amp; Экология
        </div>
        <div style={{ background: '#fdf4ff', padding: '12px 18px', borderRadius: '12px', border: '1px solid #f5d0fe', display: 'flex', alignItems: 'center', gap: '10px', color: '#86198f', fontSize: '0.9rem', fontWeight: 500 }}>
          <Compass size={18} /> Фантастика &amp; Детективы
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="social-links-section">
        <h3 className="social-title">Связаться со мной / Социальные сети</h3>
        <div className="social-buttons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};
