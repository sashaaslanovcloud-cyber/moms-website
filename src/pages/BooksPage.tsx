import React, { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  category: 'children' | 'teen' | 'sci-fi';
  categoryLabel: string;
  description: string;
  tag: string;
  bgGradient: string;
}

const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Тайны океанских глубин',
    category: 'children',
    categoryLabel: 'Детская книга',
    description: 'Увлекательное путешествие малютки-краба и его друзей на самое дно Тихого океана.',
    tag: 'Океанология & Приключения',
    bgGradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
  },
  {
    id: '2',
    title: 'Загадка далёкой планеты',
    category: 'sci-fi',
    categoryLabel: 'Фантастика',
    description: 'Космические детективы спасают удивительный звездный заповедник от загадочной туманности.',
    tag: 'Космос & Детектив',
    bgGradient: 'linear-gradient(135deg, #7e22ce 0%, #6b21a8 100%)',
  },
  {
    id: '3',
    title: 'Истории маленьких обитателей',
    category: 'children',
    categoryLabel: 'Сказки',
    description: 'Добрые сказки о жизни насекомых, лесных духах и волшебстве в обычной траве.',
    tag: 'Насекомые & Волшебство',
    bgGradient: 'linear-gradient(135deg, #15803d 0%, #166534 100%)',
  },
  {
    id: '4',
    title: 'Калифорнийские дневники',
    category: 'teen',
    categoryLabel: 'Подросткам',
    description: 'Захватывающая история о дружбе, первой любви, экологии и охране океана.',
    tag: 'Экология & Любовь',
    bgGradient: 'linear-gradient(135deg, #0d9488 0%, #115e59 100%)',
  },
];

export const BooksPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'children' | 'teen' | 'sci-fi'>('all');

  const filteredBooks = activeFilter === 'all'
    ? BOOKS
    : BOOKS.filter(book => book.category === activeFilter);

  return (
    <div className="fade-in">
      <h2 className="section-title">Мои книги</h2>
      <p style={{ color: '#475569', marginBottom: '20px' }}>
        Истории для детей и подростков о животных, далеких планетах, волшебстве и океане.
      </p>

      {/* Filter Chips */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveFilter('all')}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #cbd5e1',
            background: activeFilter === 'all' ? '#1e8798' : '#ffffff',
            color: activeFilter === 'all' ? '#ffffff' : '#334155',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Все книги ({BOOKS.length})
        </button>
        <button
          onClick={() => setActiveFilter('children')}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #cbd5e1',
            background: activeFilter === 'children' ? '#1e8798' : '#ffffff',
            color: activeFilter === 'children' ? '#ffffff' : '#334155',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Для детей
        </button>
        <button
          onClick={() => setActiveFilter('teen')}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #cbd5e1',
            background: activeFilter === 'teen' ? '#1e8798' : '#ffffff',
            color: activeFilter === 'teen' ? '#ffffff' : '#334155',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Подросткам
        </button>
        <button
          onClick={() => setActiveFilter('sci-fi')}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #cbd5e1',
            background: activeFilter === 'sci-fi' ? '#1e8798' : '#ffffff',
            color: activeFilter === 'sci-fi' ? '#ffffff' : '#334155',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Фантастика &amp; Детективы
        </button>
      </div>

      {/* Books Grid */}
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-cover" style={{ background: book.bgGradient }}>
              <span className="book-tag">{book.categoryLabel}</span>
              <div>
                <BookOpen size={40} style={{ opacity: 0.9, marginBottom: '10px' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'white' }}>{book.title}</h3>
              </div>
            </div>
            <div className="book-info">
              <span style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: 600, marginBottom: '6px' }}>
                {book.tag}
              </span>
              <p className="book-desc">{book.description}</p>
              <button
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  color: '#0f172a',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginTop: 'auto',
                }}
                onClick={() => alert(`Информация о книге: "${book.title}" скоро появится в продаже!`)}
              >
                <Sparkles size={14} /> Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
