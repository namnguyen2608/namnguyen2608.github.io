import './About.css'

const stats = [
  { value: '2023', label: 'GitHub Member Since' },
  { value: '1+', label: 'Projects on GitHub' },
  { value: 'Java', label: 'Primary Language' },
  { value: '∞', label: 'Lines of Passion' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> About Me
        </h2>
        <div className="section-line" />

        <div className="about__grid">
          <div className="about__text">
            <p>
              Hi there! I'm <strong className="highlight">Nam Nguyen</strong>, a passionate developer who loves building software that makes a difference. I believe that behind great code lies great purpose.
            </p>
            <p>
              My philosophy: <span className="highlight-quote">"Nothing is true, everything is permitted"</span> — meaning I don't limit myself to one technology or paradigm. I explore, learn, and build with whatever best solves the problem.
            </p>
            <p>
              Currently working with <strong className="highlight">Java</strong> for desktop and backend applications, with experience in GUI development using <strong className="highlight">Java Swing</strong>. I'm always eager to learn new technologies and take on challenging projects.
            </p>
            <p>
              When I'm not coding, I'm exploring new frameworks, reading about software architecture, or finding creative ways to improve my craft.
            </p>

            <div className="about__interests">
              <span className="tag">☕ Java</span>
              <span className="tag">🖥 Desktop Apps</span>
              <span className="tag">🌐 Web Dev</span>
              <span className="tag">📐 Clean Code</span>
              <span className="tag">🧠 Problem Solving</span>
            </div>
          </div>

          <div className="about__stats">
            <div className="stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="stat-card card">
                  <div className="stat-value gradient-text">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="about__code-block">
              <div className="code-header">
                <span className="code-dot" style={{ background: '#ff5f56' }} />
                <span className="code-dot" style={{ background: '#ffbd2e' }} />
                <span className="code-dot" style={{ background: '#27c93f' }} />
                <span className="code-filename">about.json</span>
              </div>
              <pre className="code-content">
{`{
  "name": "Nguyen Nam",
  "role": "Developer",
  "location": "Vietnam 🇻🇳",
  "languages": ["Java", "C#"],
  "focus": "Desktop & Web Apps",
  "available": true,
  "motto": "ship it. iterate. grow."
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
