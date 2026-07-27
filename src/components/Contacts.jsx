import React from 'react'

function Contacts() {
  return (
    <section className="section contacts" id="contacts">
      <div className="container">
        <h2 className="section-title">Свяжитесь с нами</h2>
        <div className="contacts-grid">
          <div className="contacts-info">
            <div>
              <span>📞 Телефон</span>
              <a href="tel:+375291234567">+375 (29) 123-45-67 (Минск)</a>
              <a href="tel:+74951234567">+7 (495) 123-45-67 (Москва)</a>
            </div>
            <div>
              <span>📧 Email</span>
              <a href="mailto:info@wood-supply.ru">info@wood-supply.ru</a>
            </div>
            <div>
              <span>📍 Адрес</span>
              <p>г. Минск, ул. Примерная, 15</p>
              <p>г. Москва, ул. Образцовая, 10</p>
            </div>
            <div>
              <span>📸 Мы в соцсетях</span>
              <div className="social-links">
                <a href="https://instagram.com/woodsupply.ru" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#">Telegram</a>
                <a href="#">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="contacts-cta">
            <p>Быстрая связь через мессенджеры:</p>
            <div className="messenger-buttons">
              <a href="https://wa.me/375291234567" className="whatsapp-btn">WhatsApp</a>
              <a href="tg://resolve?domain=woodsupply" className="telegram-btn">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts