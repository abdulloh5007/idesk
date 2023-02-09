import React from 'react'
import './Intro.scss'

import Typed from 'react-typed';

function Intro() {
  return (
    <div className='container'>
        <div className="intro">
          <div className="intro-left">
            <b>МЫ ПРОИЗВОДИМ ИНТЕРАКТИВНЫЕ ВИДЕОСТУДИИ</b>
            <p>для <span></span>
              <Typed
                strings={['дистанцианального образование', 'школ и университетов', 'бизнеса','блогерова и онлайн школ']}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </p>
            <div className="intro-left-btns">
              <button className='howMuch'>Рассчитать стоимость</button>
              <button className='order'>Заказать on-line презентацию</button>
            </div>
          </div>
          <div className="intro-right">
            <iframe src="https://www.youtube.com/embed/Eq-XjxsUk8E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
            <ul className='intro-right-list'>
              <li>для записи обучающих роликов</li>
              <li>для дистанционного обучения</li>
              <li>для вебинаров и трансляций</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Intro