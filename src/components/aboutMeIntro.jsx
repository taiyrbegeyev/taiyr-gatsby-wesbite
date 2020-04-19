import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import aboutMeIntroStyles from './aboutMeIntro.module.css'
import taiyrPic from '../../static/taiyrPortrait.jpeg'

const AboutMeIntro = () => {
  return (
    <div className={aboutMeIntroStyles.container}>
      <div style={{textAlign: "center", marginBottom: '0'}}>
        <img src={taiyrPic} alt="taiyr" className={aboutMeIntroStyles.image}/>
        <p className={aboutMeIntroStyles.text}>I am Taiyr.</p>
        <p className={aboutMeIntroStyles.text}>I create things.</p>
      </div>
      <button className={`${aboutMeIntroStyles.scroll} ${aboutMeIntroStyles.btn}`} onClick={() => scrollTo('#aboutMeCard')} />
    </div>
  )
}

export default AboutMeIntro
