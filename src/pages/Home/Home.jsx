import React from 'react'
import { Table } from 'react-bootstrap-icons'
import Advantages from '../../components/Home/Advantages/Advantages'
import Chat from '../../components/Home/Chat/Chat'
import Comfort from '../../components/Home/Comfort/Comfort'
import Compare from '../../components/Home/Compare/Compare'
import Examples from '../../components/Home/Examples/Examples'
import Footer from '../../components/Home/Footer/Footer'
import Header from '../../components/Home/Header/Header'
import Intro from '../../components/Home/Intro/Intro'
import ScrollTop from '../../components/Home/ScrollTop/ScrollTop'
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
      <ScrollTop/>
      <Advantages/>
      <Choice/>
      <Table/>
      <Compare/>
      <Comfort/>
      <Examples/>
      <Footer/>
    </div>
  )
}

export default Home