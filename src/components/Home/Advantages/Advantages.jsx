import React from 'react'
import './Advantages.scss'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { advantages } from '../../../data/data';

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

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // <Modal
  //   open={open}
  //   onClose={handleClose}
  //   aria-labelledby="modal-modal-title"
  //   aria-describedby="modal-modal-description"
  // >
  //   <Box sx={style}>
  //     <Typography sx={{fontWeight: '600'}} id="modal-modal-title" variant="h4" component="h2">
  //       Оборудование
  //     </Typography>
  //     <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: '300' }}>
  //       Наша студия оснащена современной прозрачной доской с RGB LED подсветкой стекла и подсветкой спикера, видеокамерой с FullHD/4K качеством, звуковой системой, мониторами для спикера и оператора, светодиодными светильниками для освещения спикера и фонами (чёрный, бирюзовый, синий и хромакей).
  //     </Typography>
  //   </Box>
  // </Modal>

  return (
    <div className="bgBlack">
      <div className="container">
        <div className="advantage">
          <div className="advantage-top">
            <b>Преимущества наших видеостудий</b>
          </div>
          <div className="advantage-cards">
            {
              advantages?.map((e,i)=> (
                <div key={e.id} className={`box ${e.card}`}>
                  <div className={scrol2 ? e.animImg : ''}>
                    <img src={e.img} alt="box-img" />
                  </div>
                  <div className={scrol2 ? 'animationBox' : 'box-img'}></div>
                  <b>{e.title_ru}</b>
                  <p>{e.text_ru}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages