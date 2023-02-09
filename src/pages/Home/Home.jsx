import React from 'react'
import Chat from '../../components/Home/Chat/Chat'
import Header from '../../components/Home/Header/Header'
import Intro from '../../components/Home/Intro/Intro'
import './Home.scss'

function Home() {
  return (
    <div>
      <div className="head">
        <div className="animation">
          <Header/>
          <Intro/>
        </div>
      </div>
      <Chat/>
    </div>
  )
}

export default Home