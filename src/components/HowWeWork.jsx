import React from 'react'

function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Запрос',
      desc: 'Вы присылаете фото, эскиз, проект или просто идею. Мы изучаем задачу и оцениваем возможности.'
    },
    {
      number: '02',
      title: 'Консультация',
      desc: 'Обсуждаем материалы, конструкцию, функционал, сроки. Даём рекомендации с технической стороны.'
    },
    {
      number: '03',
      title: 'Коммерческое предложение',
      desc: 'Готовим КП с описанием материалов, работ и стоимости. Учитываем все пожелания и нюансы.'
    },
    {
      number: '04',
      title: 'Предоплата',
      desc: '70% — для запуска в работу (для крупных заказов — поэтапная оплата). После этого начинаем чертежи.'
    },
    {
      number: '05',
      title: 'Чертежи и согласование',
      desc: 'Делаем подробные чертежи (PDF/DWG). Согласовываем каждый узел, толщины, фурнитуру и покрытие.'
    },
    {
      number: '06',
      title: 'Изготовление',
      desc: 'Запускаем производство. В процессе отправляем промежуточные фото для контроля качества.'
    },
    {
      number: '07',
      title: 'Доставка и монтаж',
      desc: 'Наши мастера монтируют изделие (или отправляем ТК с видеоинструкцией). Всё проверяем на месте.'
    },
    {
      number: '08',
      title: 'Окончательный расчёт',
      desc: 'После приёмки — оставшиеся 30% (для отправки ТК — до отгрузки). Работаем по ИП в РФ и РБ.'
    }
  ]

  return (
    <section className="section how-we-work" id="how">
      <div className="container">
        <div className="how-heading-left">
          <div className="how-eyebrow-wrapper">
            <span className="how-eyebrow-line"></span>
            <p className="how-eyebrow-left">Процесс работы</p>
          </div>
          <h2 className="section-title-left">Как мы выполняем ваш заказ</h2>
        </div>
        <div className="steps-grid-new">
          {steps.map((step) => (
            <div className="step-card-new" key={step.number}>
              <span className="step-number-new">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork