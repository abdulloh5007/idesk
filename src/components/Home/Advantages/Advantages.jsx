import React from 'react'
import './Advantages.scss'


const loopArr = []
function Advantages() {

  const [scrol2, setScrol2] = React.useState(false)
  const offSet = 250;
  const loop = 'ishladim'

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener('scroll', () => {
    if (getTop() >= offSet) {
      setScrol2(true)
      if(loopArr.includes(!loop)){
        loopArr.push(loop)
      }
    } else {
      setScrol2(false)
    }
  })

  return (
    <div className="bgBlack">
      <div className="container">
        <div className="advantage">
          <div className="advantage-top">
            <b>Преимущества наших видеостудий</b>
          </div>
          <div className="advantage-cards">
            <div className="box card1">
              <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
              <b>Профессиональное оборудование</b>
              <p>Качественные звук и картинка, профессиональное освещение, сенсорная прозрачная доска</p>
            </div>
            <div className="box card2">
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
              <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              <b>Интерактивная технология</b>
              <p>Создание интерактива в режиме онлайн: перелистывание презентации сенсором, удаление элементов, рисование и т.д.</p>
            </div>
            <div className="box card3">
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
              <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              <b>Уникальный формат</b>
              <p>Взаимодействие с элементами презентации (графики, гиф, браузер) в реальном времени</p>
            </div>
            <div className="box card4">
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
              <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              <b>Экономия бюджета</b>
              <p>Получаете готовый ролик с минимальным монтажом сразу после нажатия на кнопку стоп</p>
            </div>
            <div className="box card5">
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
              <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              <b>Собственное ПО</b>
              <p>Мы разрабатываем собственное программное обеспечение специально для наших студий</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages