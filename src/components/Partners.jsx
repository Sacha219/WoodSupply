import React from 'react'
import { partners } from '../data/partners'

function Partners() {
  return (
    <section className="section partners" id="partners">
      <div className="container">
        <h2 className="section-title">Наши партнёры</h2>
        <p className="partners-intro">
          Работаем с дизайнерами, архитекторами и поставщиками материалов.
          Если вы хотите стать нашим партнёром — напишите нам!
        </p>
        <div className="partners-grid">
          {partners.map((p) => (
            <div className="partner-card" key={p.id}>
              {p.logo ? <img src={p.logo} alt={p.name} /> : <span className="partner-placeholder">{p.name}</span>}
              <h4>{p.name}</h4>
              <p>{p.description}</p>
              {p.website && <a href={p.website} target="_blank" rel="noopener noreferrer">Перейти на сайт</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners