import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Portfolio({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)

  const itemsPerView = 3
  const totalSlides = Math.max(0, items.length - itemsPerView)
  const showArrows = items.length > itemsPerView

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides))
  }

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Примеры наших работ</h2>

        <div className="portfolio-carousel">
          <div className="portfolio-track-wrapper">
            <div
              className="portfolio-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView + (24 / (itemsPerView * 10)))}%)`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {items.map((item, index) => (
                <div
                  className="portfolio-item"
                  key={item.id || index}
                  onClick={() => setSelected(item)}
                >
                  <img src={item.image} alt={item.alt || 'Проект'} />
                </div>
              ))}
            </div>
          </div>

          {showArrows && (
            <>
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={goPrev}
                disabled={currentIndex === 0}
                aria-label="Предыдущие проекты"
              >
                ‹
              </button>
              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={goNext}
                disabled={currentIndex >= totalSlides}
                aria-label="Следующие проекты"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>

      {selected && ReactDOM.createPortal(
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <img src={selected.image} alt={selected.alt || 'Проект'} />
            {selected.title && <p>{selected.title}</p>}
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Portfolio