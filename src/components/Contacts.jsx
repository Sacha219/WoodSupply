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
              <a href="tel:+375447261503">+375 (44) 726-15-03 (Минск)</a>
              <a href="tel:+79165189844">+7 (916) 518-98-44 (Москва)</a>
            </div>
            <div>
              <span>📍 Адрес</span>
              <p>г. Минск, ???</p>
              <p>г. Москва, Нахимовский пр.24, пав.3, ряд15, ст.507</p>
            </div>
            <div>
              <span>📸 Мы в соцсетях</span>
              <div className="social-links">
                <a href="https://instagram.com/woodsupply.ru" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts