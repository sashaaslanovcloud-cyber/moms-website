import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  tag: string;
}

const NEWS_LIST: NewsItem[] = [
  {
    id: '1',
    date: '15 Июля 2026',
    title: 'Анонс новой серии рассказов про морских обитателей',
    summary: 'Готовится к выходу новая иллюстрированная книга о тайнах Тихого океана и удивительных приключениях малютки-краба.',
    tag: 'Анонс книги',
  },
  {
    id: '2',
    date: '2 Июня 2026',
    title: 'Онлайн-встреча с читателями и юными писателями',
    summary: 'Обсудили, как придумывать сказочных персонажей, вдохновляться природой Калифорнии и писать истории о животных.',
    tag: 'Мероприятия',
  },
  {
    id: '3',
    date: '18 Мая 2026',
    title: 'Завершение экологического исследования по океанологии',
    summary: 'Итоги проекта по изучению береговых экосистем и их влиянию на творчество для детей.',
    tag: 'Экология',
  },
];

export const NewsPage: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="section-title">Новости</h2>
      <p style={{ color: '#475569', marginBottom: '24px' }}>
        Анонсы новых книг, встречи с читателями, статьи об экологии и события.
      </p>

      <div className="news-list">
        {NEWS_LIST.map((news) => (
          <div key={news.id} className="news-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
              <span className="news-date" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={14} /> {news.date}
              </span>
              <span style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px' }}>
                {news.tag}
              </span>
            </div>
            <h3 className="news-title">{news.title}</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem' }}>{news.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
