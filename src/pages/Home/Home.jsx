import React from 'react'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
import './Home.scss'

function Home() {
  return (
    <div>
      <div className="head">
        <Header/>
        <Intro/>
      </div>
    </div>
  )
}

export default Home