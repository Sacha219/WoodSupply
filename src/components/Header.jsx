import React, { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand" onClick={() => scrollTo('top')}>
            <img src="logo.jpg" alt="WoodSupply" className="brand-logo" />
        </div>

        <button className="burger" onClick={toggleMenu} aria-label="Меню">
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('about')}>О нас</button>
          <button onClick={() => scrollTo('portfolio')}>Проекты</button>
          <button onClick={() => scrollTo('how')}>Как работаем</button>
          <button onClick={() => scrollTo('partners')}>Партнёры</button>
          <button className="nav-cta" onClick={() => scrollTo('contacts')}>Связаться</button>
        </nav>
      </div>
    </header>
  )
}

export default Header