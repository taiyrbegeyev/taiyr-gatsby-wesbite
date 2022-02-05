/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Social from '../../../components/social'
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
        <Social />
      </div>
    </footer>
  )
}

export default Footer
