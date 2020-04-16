import React, {Component, useState, useEffect} from 'react'
import desktopImage from '../../static/taiyr_desktop.jpg'
import mobileImage from '../../static/taiyr_mobile.jpg'
import Typist from 'react-typist'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import scrollTo from 'gatsby-plugin-smoothscroll'
import introStyles from "./intro.module.css"

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

function Intro() {
  const size = useWindowSize();
  console.log(size);
  const imageUrl = size.width >= 768 ? desktopImage : mobileImage
  const titleMargin = size.width >= 768 ? 9 : 40;

  return (
    <div
      id='intro'
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${imageUrl})`, 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        sx={{
          marginBottom: `${titleMargin}vh`,
          color: 'white',
          textAlign: 'center',
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif"

        }}
      >
        <div
          sx={{
            borderBottom: "1px solid rgba(255,255,255,0.55)",
            fontSize: '3vh',
          }}
        >
          <Typist cursor={{show: false}} avgTypingDelay={140}>
            <h1
              sx={{
                margin: '0',
                padding: '0'
              }}
            >
              Taiyr Begeyev
            </h1>
          </Typist>
        </div>
        <div
          sx={{
            fontSize: '3.5vh'
          }}
        >
          <Typist cursor={{show: false}} startDelay={2000}>
            <p1
              sx={{
                margin: '0',
                padding: '0'
              }}
            >
              Software Engineer
            </p1>
          </Typist>
        </div>
      </div>
      {/* <a className={introStyles.scroll} href="/" onClick={() => scrollTo('#some-id')}></a> */}
      <button className={`${introStyles.scroll} ${introStyles.btn}`} onClick={() => scrollTo('#some-id')} />
    </div>
  );
}

export default Intro
