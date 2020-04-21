import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Paper } from '@material-ui/core'
import Social from './social'
import aboutMeCardStyles from './aboutMeCard.module.css'
import profilePic from '../../static/taiyr.png'
import cvFile from "../../static/Taiyr_Begeyev_CV_EU.pdf"
import { about_me, skills } from "../config/text"

const AboutMeCard = () => {
  return (
    <Paper className={aboutMeCardStyles.aboutMeWrapper}>
      <div className={aboutMeCardStyles.aboutMePictureSection}>
        <div className={aboutMeCardStyles.aboutMePictureWrapper}>
          <img alt="Taiyr Profile Pic" src={profilePic} className={aboutMeCardStyles.aboutMePicture} />
        </div>
        <div className={aboutMeCardStyles.aboutMeImage} />
        <div className={aboutMeCardStyles.additionalSection}>
          <a href={cvFile} target="_blank" className={aboutMeCardStyles.button}>Download CV</a>
        </div>
      </div>
      <div className={aboutMeCardStyles.aboutMeInfoSection}>
        <div className={aboutMeCardStyles.aboutMeInfo}>
          <div className={aboutMeCardStyles.aboutMeInfoName}>
            <h2 style={{margin: '0', padding: '0'}}>Taiyr Begeyev</h2>
            <a href="mailto:taiyrbegeyev@gmail.com" className={aboutMeCardStyles.aboutMeInfoNameSub}>taiyrbegeyev@gmail.com</a>
          </div>
          <div className={aboutMeCardStyles.aboutMeInfoDescription}>
            <p>{about_me}</p>
            <hr/>
            {
              skills.map(skills => 
                <>
                  <h3>{skills.title}</h3>
                  <p>{skills.result}</p>
                </>
              )
            }
            <div
              sx={{
                display: `flex`,
                justifyContent: `center`,
                mt: `2rem`,
              }}
            >
              <Social />
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default AboutMeCard
