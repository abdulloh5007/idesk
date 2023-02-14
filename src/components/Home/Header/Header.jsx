import React from 'react'
import './Header.scss'

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { headerLinks } from '../../../data/data';
import { Context } from '../../../Context/Context';

function Header() {
  const {setLang} = React.useContext(Context)

  const [scrol, setScrol] = React.useState(false)
  const offSet = 140;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
  
  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  const [language, setLanguage] = React.useState(window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru')
  
  const handleLanguage = (e) => {
    setLanguage(language ? e.target.textContent.toLowerCase() : 'ru')
    setLang(language ? e.target.textContent.toLowerCase() : 'ru')
    window.localStorage.setItem('lang', e.target.textContent.toLowerCase())
    document.location.reload()
  }

  return (
    <div className='header'>
        <nav className={scrol ? 'nav-fixed' : 'nav'}>
          <a className='logo' href="#logo">Idesk</a>
          <ul className='nav-list'>
            {
              headerLinks?.map((e,i) => (
                <li key={i}>
                  <Link to={e.to}>{e[`link_${language}`]}</Link>
                </li>
              ))
            }
          </ul>
          <ul className='nav-list2'>
            <a href="#support">support@idesk.su</a>
            <Button variant="text" onClick={handleLanguage}>RU</Button>
            <Button variant="text" onClick={handleLanguage}>UZ</Button>
          </ul>
        </nav>
    </div>
  )
}

export default Header