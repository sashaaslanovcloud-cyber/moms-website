import React from 'react';
import { Waves, TreePine, Lightbulb, HeartHandshake } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Исследования Океанологии & Моря',
    category: 'Экология и Наука',
    description: 'Образовательный проект для детей и юношества о богатстве экосистем Тихого океана и береговых обитателей Калифорнии.',
    icon: <Waves size={24} color="#0284c7" />,
  },
  {
    id: '2',
    title: 'Литературная мастерская сказок',
    category: 'Творчество',
    description: 'Мастер-классы по сочинению увлекательных историй о животных, далеких планетах и волшебных мирах.',
    icon: <Lightbulb size={24} color="#eab308" />,
  },
  {
    id: '3',
    title: 'Сохранение природы Калифорнии',
    category: 'Экологический проект',
    description: 'Инициативы по защите уникальной флоры и фауны, просветительские встречи для юных читателей.',
    icon: <TreePine size={24} color="#16a34a" />,
  },
];

export const ProjectsPage: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="section-title">Проекты</h2>
      <p style={{ color: '#475569', marginBottom: '24px' }}>
        Мои исследовательские и образовательные проекты в области океанологии, экологии и детского литературного творчества.
      </p>

      <div className="projects-grid">
        {PROJECTS.map((proj) => (
          <div key={proj.id} className="project-card">
            <div className="project-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {proj.icon}
                <h3 className="project-title">{proj.title}</h3>
              </div>
              <span className="project-badge">{proj.category}</span>
            </div>
            <p style={{ color: '#475569', marginTop: '8px', lineHeight: '1.6' }}>
              {proj.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
