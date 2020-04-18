import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import downloadButtonStyles from './downloadButton.module.css'
import aboutMeIntroStyles from './aboutMeIntro.module.css'
import taiyrPic from '../../static/taiyr.png'

const AboutMeIntro = () => {
  return (
    <div className={aboutMeIntroStyles.container}>
      <div style={{textAlign: "center", marginBottom: '0'}}>
        <img src={taiyrPic} alt="taiyr" className={aboutMeIntroStyles.image}/>
        <p className={aboutMeIntroStyles.text}>I am Taiyr.</p>
        <p className={aboutMeIntroStyles.text}>I create things.</p>
      </div>
      <button className={`${aboutMeIntroStyles.scroll} ${aboutMeIntroStyles.btn}`} onClick={() => scrollTo('#timeline')} />
    </div>
  )
}

export default AboutMeIntro
