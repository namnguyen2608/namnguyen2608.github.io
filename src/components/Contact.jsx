import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const email = 'namnguyen2608@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/namnguyen2608',
      href: 'https://github.com/namnguyen2608',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email',
      value: email,
      action: copyEmail,
      copyable: true,
    },
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04.</span> Get in Touch
        </h2>
        <div className="section-line" />

        <div className="contact__wrapper">
          <div className="contact__left">
            <h3 className="contact__heading">Let's work together!</h3>
            <p className="contact__desc">
              Whether you have an exciting project, a collaboration idea, or just want to say hello — my inbox is always open. I'll do my best to get back to you!
            </p>
            <p className="contact__desc">
              I'm particularly interested in <strong className="highlight">full-stack development</strong>, <strong className="highlight">Java application development</strong>, and <strong className="highlight">open-source contributions</strong>.
            </p>

            <div className="contact__links">
              {contactItems.map((item) => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item card"
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <div className="contact-label">{item.label}</div>
                      <div className="contact-value">{item.value}</div>
                    </div>
                    <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="contact-item card"
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <div className="contact-label">{item.label}</div>
                      <div className="contact-value">{item.value}</div>
                    </div>
                    <div className="copy-btn">
                      {copied ? '✓ Copied!' : 'Copy'}
                    </div>
                  </button>
                )
              ))}
            </div>
          </div>

          <div className="contact__right">
            <div className="contact__cta-card">
              <div className="cta-emoji">👋</div>
              <h3></h3>
              <p>Currently learning new things</p>
              <div className="availability-status">
                <span className="status-dot" />
                Available right now
              </div>
              <a
                href="https://github.com/namnguyen2608"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                View My GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
