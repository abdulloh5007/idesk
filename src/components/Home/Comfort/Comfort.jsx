import Aos from 'aos'
import React from 'react'
import './Comfort.scss'

function Comfort() {
  Aos.init()
  return (
    <div className='comfort' id='comfort'>
      <div className="comfort__container container">
        <div className="comfort__container__title">
          <h2>Удобный инструмент для онлайн образования</h2>
        </div>
        <div className="comfort__container__wrapper">
          <div className="comfort__container__wrapper__left">
            <p data-aos="fade-up">С помощью технологии вы можете легко записать <br /> свой видео-урок, снять онлайн-курс <br />
              или провести вебинар.</p>
            <p data-aos="fade-up">Система полностью автоматическая, позволяет в <br />
              2 раза быстрее и в 3 раза экономичнее записать <br />  видео-урок, презентационный или рекламный <br /> видеоролик.</p>
          </div>
          <div className="comfort__container__wrapper__list">
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
            <h4>4</h4>
          </div>
          <div className="comfort__container__wrapper__right">
            <p data-aos="fade-up">Программно-аппаратный комплекс позволяет <br /> работать с дополненной реальностью, <br /> взаимодействовать с презентацией</p>


            <p data-aos="fade-up">Наша компания имеет аккредитацию на всех <br /> популярных электронных площадках. Мы имеем опыт <br /> участия в гос. закупках и проведения их через <br /> электронную площадку.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comfort