import React from 'react'
import './Advantages.scss'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center'
};


function Advantages() {

  const [scrol2, setScrol2] = React.useState(false)
  const offSet = 250;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener('scroll', () => {
    if (getTop() >= offSet) {
      setScrol2(true)
    } else {
      setScrol2(false)
    }
  })

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bgBlack">
      <div className="container">
        <div className="advantage">
          <div className="advantage-top">
            <b>Преимущества наших видеостудий</b>
          </div>
          <div className="advantage-cards">
            <div className="box card1">
              <div className={scrol2 ? 'animateImg' : ''}>
                <img onClick={handleOpen} src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography sx={{fontWeight: '600'}} id="modal-modal-title" variant="h4" component="h2">
                    Оборудование
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: '300' }}>
                    Наша студия оснащена современной прозрачной доской с RGB LED подсветкой стекла и подсветкой спикера, видеокамерой с FullHD/4K качеством, звуковой системой, мониторами для спикера и оператора, светодиодными светильниками для освещения спикера и фонами (чёрный, бирюзовый, синий и хромакей).
                  </Typography>
                </Box>
              </Modal>
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
              <b>Профессиональное оборудование</b>
              <p>Качественные звук и картинка, профессиональное освещение, сенсорная прозрачная доска</p>
            </div>
            <div className="box card2">
              <div className={scrol2 ? 'animateImg2' : ''}>
                <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              </div>
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
              <b>Интерактивная технология</b>
              <p>Создание интерактива в режиме онлайн: перелистывание презентации сенсором, удаление элементов, рисование и т.д.</p>
            </div>
            <div className="box card3">
              <div className={scrol2 ? 'animateImg3' : ''}>
                <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              </div>
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
              <b>Уникальный формат</b>
              <p>Взаимодействие с элементами презентации (графики, гиф, браузер) в реальном времени</p>
            </div>
            <div className="box card4">
              <div className={scrol2 ? 'animateImg4' : ''}>
                <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              </div>
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
              <b>Экономия бюджета</b>
              <p>Получаете готовый ролик с минимальным монтажом сразу после нажатия на кнопку стоп</p>
            </div>
            <div className="box card5">
              <div className={scrol2 ? 'animateImg' : ''}>
                <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="box-img" />
              </div>
              <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
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