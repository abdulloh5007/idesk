import React from 'react'
import './ScrollTop.scss'

function ScrollTop() {
  const [scrol, setScrol] = React.useState(false)
  const offSet = 140;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
  
  window.addEventListener('scroll', () => {
    if (getTop() >= offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  return (
    <div className={scrol ? 'scrollAnimate' : 'scrollTop'}>
        <button onClick={()=> document.scrollingElement.scrollTo(0, 0)}><i className="bi bi-chevron-up"></i></button>
    </div>
  )
}

export default ScrollTop