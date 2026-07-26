import React from 'react'

function HowWeWork() {
  const steps = [
    { num: '1', title: 'Запрос', desc: 'Вы присылаете фото, эскиз, проект или просто идею.' },
    { num: '2', title: 'Консультация', desc: 'Обсуждаем материалы, конструкцию, функционал, сроки.' },
    { num: '3', title: 'Коммерческое предложение', desc: 'Готовим КП с описанием материалов, работ и стоимости.' },
    { num: '4', title: 'Предоплата', desc: '70% — для запуска в работу (для крупных заказов — поэтапная оплата).' },
    { num: '5', title: 'Чертежи и согласование', desc: 'Делаем подробные чертежи — согласовываем с вами.' },
    { num: '6', title: 'Изготовление', desc: 'В процессе отправляем промежуточные фото для контроля.' },
    { num: '7', title: 'Доставка и монтаж', desc: 'Наши мастера монтируют изделие (или отправляем ТК с инструкцией).' },
    { num: '8', title: 'Окончательный расчёт', desc: 'После приёмки — оставшиеся 30% (для отправки ТК — до отгрузки).' },
  ]

  return (
    <section className="section how-we-work" id="how">
      <div className="container">
        <h2 className="section-title">Как мы работаем</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.num}>
              <span className="step-number">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="how-note">
          <p>
            <strong>Для дизайнеров и архитекторов</strong> — индивидуальные условия.
            Возможна работа по агентской схеме (процент от заказа) или напрямую с клиентом.
            Скидки для партнёров.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork