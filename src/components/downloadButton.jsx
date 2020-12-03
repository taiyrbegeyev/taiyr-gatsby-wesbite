import React from 'react'
import buttonStyles from "./downloadButton.module.css"

const DownloadButton = ({ content, href, blog = false }) => {
  if (blog) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={buttonStyles.button2}>{content}</a>
    )
  } else {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={buttonStyles.button}>{content}</a>
    )
  }
}

export default DownloadButton
