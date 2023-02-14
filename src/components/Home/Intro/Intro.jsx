import React from 'react'
import './Intro.scss'

import Typed from 'react-typed';
import { btn, intro, introRight } from '../../../data/data';
import { Context } from '../../../Context/Context';

const types = []

function Intro() {
  const {lang} = React.useContext(Context)

  intro.map((e) => {
    e.typed.map((q) => {
      if(!types.includes(q.text_ru)){
        types.push(q[`text_${lang}`])
      }
      return types
    })
    return {}
  })
  // types.toString()
  // console.log(types[0]);

  return (
    <div className='container'>
        <div className="intro">
          {
            intro?.map((e,i) => (
              <div key={i} className="intro-left">
                <b>{e[`title_${lang}`]}</b>
                <p>{lang === 'uz' ? 'uchun' : 'для'} <span></span>
                <Typed
                  key={types}
                  strings={[`${types[0]}`, `${types[1]}`, `${types[2]}`, `${types[3]}`]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                />
                </p>
                <div className="intro-left-btns">
                  {
                    btn?.map((e,i) => (
                      <button className={e.class} key={i}>{e[`title_${lang}`]}</button>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <div className="intro-right">
            <iframe src="https://www.youtube.com/embed/Eq-XjxsUk8E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
            <ul className='intro-right-list'>
              {
                introRight?.map((e,i) => (
                  <li key={i}>
                    {e[`title_${lang}`]}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Intro