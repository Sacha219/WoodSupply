import React from 'react'

const heroImage = 'hero.jpg'

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="top">
      <img src={heroImage} alt="WoodSupply мастерская" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-eyebrow">Изготовление по фото, чертежу</p>
        <h1>WoodSupply — мебель на заказ</h1>
        <p className="hero-sub">Работаем по всей Беларуси и России.</p>
        <button className="primary-button" onClick={() => scrollTo('portfolio')}>
          Смотреть проекты
        </button>
      </div>
    </section>
  )
}

export default Hero