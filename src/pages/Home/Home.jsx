import React from 'react'
import Chat from '../../components/Chat/Chat'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
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