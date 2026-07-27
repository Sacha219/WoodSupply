import React from 'react'

function Materials() {
  const materials = [
    { name: 'Массив дуба', desc: 'Твёрдая древесина для премиальных изделий' },
    { name: 'Ясень, орех, сосна', desc: 'Разные породы — от лёгких до благородных' },
    { name: 'МДФ / Шпон', desc: 'Идеальная поверхность под покраску и фактуру' },
    { name: 'Фанера', desc: 'Надёжный материал для конструкций' },
    { name: 'Металл (чёрный, латунь, медь, нерж)', desc: 'Сварка, резка, гибка, покраска' },
    { name: 'Кожа / Ткани', desc: 'Мягкие материалы для обивки' },
    { name: 'Поролон / Синтепон', desc: 'Наполнители для мягкой мебели' },
  ]

  return (
    <section className="section materials" id="materials">
      <div className="container">
        <h2 className="section-title">Материалы</h2>
        <p className="materials-intro">
          В прямом смысле слова — работаем со всем. Что не можем сделать самостоятельно —
          отдаём подрядчикам. Но сборка и конечный результат всегда наши.
        </p>

        <div className="materials-grid-full">
          {materials.map((m) => (
            <div className="material-card" key={m.name}>
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Materials