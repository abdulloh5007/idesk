import React from 'react'
import { Table } from 'react-bootstrap-icons'
import Advantages from '../../components/Home/Advantages/Advantages'
import Chat from '../../components/Home/Chat/Chat'
import Comfort from '../../components/Home/Comfort/Comfort'
import Compare from '../../components/Home/Compare/Compare'
import Examples from '../../components/Home/Examples/Examples'
import Header from '../../components/Home/Header/Header'
import Intro from '../../components/Home/Intro/Intro'
import Choice from '../../components/Home/Сhoice/Choice'
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
      <Advantages/>
      <Choice/>
      <Table/>
      <Compare/>
      <Comfort/>
      <Examples/>
    </div>
  )
}

export default Home