import React from 'react'
import buttonStyles from "./downloadButton.module.css"

const DownloadButton = ({ content, blog = false }) => {
  if (blog) {
    return (
      <a href="#!" className={buttonStyles.button2}>{content}</a>
    )
  } else {
    return (
      <a href="#!" className={buttonStyles.button}>{content}</a>
    )
  }
}

export default DownloadButton
