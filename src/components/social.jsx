import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"

const links = [
  {
    id: 'github',
    href: 'https://github.com/taiyrbegeyev',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/taiyrbegeyev',
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/tbegeyev',
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/taiyrbegeyev'
  },
]

const Social = () => {
  return (
    <>
      {links.map(item => (
        <div key={item.id}>
          <a href={item.href} target="_blank">
            <img
              sx={{
                margin: '0 0.5rem',
                filter: `invert(0.6)`,
              }}
              width="16"
              src={`https://simpleicons.org/icons/${item.id}.svg`}
            />
          </a>
        </div>
      ))}
    </>
  )
}

export default Social
