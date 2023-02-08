import React from 'react'
import './Header.scss'

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <nav className='nav'>
          <a className='logo' href="#logo">Idesk</a>
          <ul className='nav-list'>
            <li><Link to='/product'>ПРОДУКЦИЯ</Link></li>
            <li><Link to='/soft'>СОФТ</Link></li>
            <li><Link to='/azboka'>AZBOOKA</Link></li>
            <li><Link to='/rent'>АРЕНДА</Link></li>
            <li><Link to='/news'>НОВОСТИ</Link></li>
          </ul>
          <ul className='nav-list2'>
            <a href="#support">support@idesk.su</a>
            <Button variant="text">EN</Button>
            <Button variant="text">RU</Button>
          </ul>
        </nav>
    </div>
  )
}

export default Header