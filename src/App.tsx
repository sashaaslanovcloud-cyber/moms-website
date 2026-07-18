import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HeaderNav } from './components/HeaderNav';
import { AboutPage } from './pages/AboutPage';
import { BooksPage } from './pages/BooksPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { NewsPage } from './pages/NewsPage';
import { Footer } from './components/Footer';

export function App() {
  return (
    <Router>
      <div className="site-wrapper">
        {/* Header & Tabs */}
        <HeaderNav />

        {/* Main Page Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
