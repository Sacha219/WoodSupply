import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">W</span>
          <span>WoodSupply</span>
        </div>
        <div className="footer-links">
          <a href="#about">О нас</a>
          <a href="#portfolio">Проекты</a>
          <a href="#how">Как работаем</a>
          <a href="#partners">Партнёры</a>
          <a href="#contacts">Контакты</a>
        </div>
        <div className="footer-copy">
          <p>© 2026 WoodSupply. Все права защищены.</p>
          <small>Политика конфиденциальности</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer