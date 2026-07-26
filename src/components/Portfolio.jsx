import React, { useState } from 'react'

function Portfolio({ items }) {
  const [selected, setSelected] = useState(null)

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Наши проекты</h2>
        <div className="portfolio-grid">
          {items.map((item, index) => (
            <div
              className="portfolio-item"
              key={index}
              onClick={() => setSelected(item)}
            >
              <img src={item.image} alt={item.alt || 'Проект'} />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <img src={selected.image} alt={selected.alt || 'Проект'} />
            {selected.title && <p>{selected.title}</p>}
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio