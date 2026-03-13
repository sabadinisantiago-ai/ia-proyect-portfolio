import './Experience.css'

export default function Experience({ experience, goals }) {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Experience & Goals</h2>

        <div className="experience__layout animate-on-scroll">
          {/* Experience Timeline */}
          <div className="experience__section">
            <h3 className="experience__subtitle">Work</h3>
            <div className="experience__timeline">
              {(experience || []).map(item => (
                <div key={item.id} className="experience__item">
                  <div className="experience__dot-line">
                    <span className={`experience__dot ${item.current ? 'experience__dot--active' : ''}`}></span>
                    <span className="experience__line"></span>
                  </div>
                  <div className="experience__content">
                    <div className="experience__header">
                      <h4 className="experience__role">{item.role}</h4>
                      <span className="experience__period">{item.period}</span>
                    </div>
                    {item.company !== '—' && (
                      <p className="experience__company">{item.company}</p>
                    )}
                    <p className="experience__desc">{item.description_en || item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="experience__section">
            <h3 className="experience__subtitle">Goals</h3>
            <div className="experience__goals">
              {(goals || []).map((goal, i) => (
                <div key={i} className="card experience__goal-card">
                  <div className="experience__goal-timeline">{goal.timeline}</div>
                  <h4 className="experience__goal-title">{goal.title}</h4>
                  <p className="experience__goal-desc">{goal.description_en || goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
