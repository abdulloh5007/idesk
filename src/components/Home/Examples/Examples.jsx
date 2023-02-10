import React from 'react'
import './Examples.scss'
function Examples() {
  return (
    <div className='examples'>
      <div className="examples__container container">
        <div className="examples__container__title">
          <h2>Примеры видео из iDesk Studio</h2>
        </div>
        <div className="examples__container__videos">
        <iframe data-aos="fade-right" width="362" height="208" src="https://www.youtube.com/embed/itk3W2wf7l0" title="Новая версия программы iDesk Studio (+ редактор презентаций)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe  data-aos="fade-top" width="362" height="207" src="https://www.youtube.com/embed/Q7CAh8Lk4is" title="Первая онлайн школа о жизни с близорукостью. Анастасия Никифорова." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe data-aos="fade-left" width="362" height="210" src="https://www.youtube.com/embed/MYEXt4nYOoI" title="Образовательные видеостудии iDesk Studio. Ваши уроки больше никогда не будут скучными!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Examples