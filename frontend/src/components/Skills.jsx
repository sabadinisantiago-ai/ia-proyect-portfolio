import './Skills.css'

const levelMap = {
  'Advanced': 3,
  'Intermediate': 2,
  'Basic': 1,
}

function SkillDots({ level }) {
  const filled = levelMap[level] || 1
  return (
    <div className="skills__dots" aria-label={level}>
      {[1, 2, 3].map(i => (
        <span key={i} className={`skills__dot ${i <= filled ? 'skills__dot--filled' : ''}`} />
      ))}
    </div>
  )
}

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Skills & Tools</h2>

        <div className="skills__grid animate-on-scroll">
          {(skills || []).map(category => (
            <div key={category.category} className="skills__category">
              <h3 className="skills__category-title">{category.category}</h3>
              <ul className="skills__list">
                {category.items.map(skill => (
                  <li key={skill.name} className="skills__item">
                    <span className="skills__name">{skill.name}</span>
                    <SkillDots level={skill.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
