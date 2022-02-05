/** @jsx jsx */
import { Global } from "@emotion/core"
import { jsx, Styled, Container, css } from "theme-ui"
import "typeface-ibm-plex-sans"
import { Link } from "gatsby"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Title from "./title"
import List from './list'
import Listing from "./listing"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Styled.root data-testid="theme-root">
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
          },
          "::selection": {
            backgroundColor: `primary`,
            color: `white`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`,
          },
        })}
      />
      <SEO />
      <SkipNavLink>Skip to content</SkipNavLink>
      <Container id="home">
        <Header />
        <main id="skip-nav" css={css({ ...CodeStyles })}>
          <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
            <Hero />
          </section>
          <Title text="Latest Posts">
            <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
          </Title>
          <Listing posts={posts} showTags={false} />
        </main>
        <Footer />
      </Container>
    </Styled.root>
  )
}

export default Homepage
