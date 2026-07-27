import React from 'react'
import { serialItems } from '../data/serialItems'

function SerialProduction() {
  return (
    <section className="section serial" id="serial">
      <div className="container">
        <h2 className="section-title">Готовые изделия в наличии</h2>
        <p className="serial-intro">
          Мы запускаем серию изделий, которые всегда есть на складе. Забирайте сразу или заказывайте доставку.
        </p>
        <div className="serial-grid">
          {serialItems.map((item) => (
            <div className="serial-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.price && <span className="serial-price">{item.price} руб.</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SerialProduction