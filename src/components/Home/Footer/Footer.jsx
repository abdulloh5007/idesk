import React from 'react'
import Aos from 'aos'
import './Footer.scss'
function Footer() {
  Aos.init()

  return (
    <div className='footer' id='footer'>
        <div className="footer__container container">
            <div data-aos="fade-up" className="footer__container__text">
                <h6>© Copyright 2009-2022.</h6>
                <p>Использование информации возможно только с использованием активной ссылки на оригинал текста.</p>
                <p>ООО "АЙДЕСК" ИНН: 6658389235</p>
            </div>
        </div>
    </div>
  )
}
export default Footer