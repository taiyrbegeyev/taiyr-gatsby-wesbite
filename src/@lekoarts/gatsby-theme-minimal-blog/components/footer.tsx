/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

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

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `row`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div
        sx={{
          display: `flex`,
          mt: [20, 0, 0],
        }}
      >
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
      </div>
    </footer>
  )
}

export default Footer
