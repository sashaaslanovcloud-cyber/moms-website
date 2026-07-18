import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav: React.FC = () => {
  return (
    <header className="header-wrapper">
      {/* Top Teal Banner */}
      <div className="header-banner">
        <h1 className="header-title">Юлия Асланова</h1>
      </div>

      {/* Overlapping Profile Photo */}
      <div className="photo-container">
        <img
          src="/yulia-photo.jpg"
          alt="Юлия Асланова"
          className="profile-photo"
          onError={(e) => {
            // Fallback if image path is altered
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600';
          }}
        />
      </div>

      {/* Navigation Tabs Bar */}
      <nav className="nav-section">
        <div className="nav-buttons">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Мои книги
          </NavLink>

          {/* Note: In the mock, the default page showing bio text has 'Мои книги' / 'Проекты' / 'Новости' buttons.
              Let's allow 'Обо мне' or direct tab clicks to route smoothly between pages! */}
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Обо мне
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Проекты
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Новости
          </NavLink>
        </div>
        
        {/* Red Accent Bar at right end of navigation */}
        <div className="nav-red-line" />
      </nav>
    </header>
  );
};
