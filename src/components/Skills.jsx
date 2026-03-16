import { useState } from 'react'
import './Skills.css'

const skills = {
  languages: [
    { name: 'Java', level: 80, icon: '☕' },
    { name: 'C#', level: 70, icon: '🔷' },
    { name: 'JavaScript', level: 65, icon: '✨' },
    { name: 'HTML/CSS', level: 75, icon: '🎨' },
    { name: 'SQL', level: 65, icon: '🗄️' },
  ],
  frameworks: [
    { name: 'Java Swing', level: 80, icon: '🖥' },
    { name: '.NET / C#', level: 70, icon: '💜' },
    { name: 'React', level: 60, icon: '⚛️' },
    { name: 'Spring Boot', level: 50, icon: '🌿' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 75, icon: '🔧' },
    { name: 'IntelliJ IDEA', level: 85, icon: '🧠' },
    { name: 'VS Code', level: 80, icon: '📝' },
    { name: 'Laragon', level: 70, icon: '🐘' },
    { name: 'MySQL', level: 65, icon: '🗃️' },
  ],
}

const categories = ['languages', 'frameworks', 'tools']
const categoryLabels = { languages: 'Languages', frameworks: 'Frameworks & Libraries', tools: 'Tools & Platforms' }

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages')

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span> Skills
        </h2>
        <div className="section-line" />

        <div className="skills__tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`skill-tab ${activeTab === cat ? 'skill-tab--active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {skills[activeTab].map((skill, i) => (
            <div key={skill.name} className="skill-card card" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-percent">{skill.level}%</div>
                </div>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ '--target-width': `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="skills__extra">
          <h3 className="extra-title">Also familiar with</h3>
          <div className="extra-tags">
            {['OOP', 'MVC Pattern', 'REST APIs', 'JDBC', 'Socket Programming', 'Unit Testing', 'Agile', 'Version Control'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
