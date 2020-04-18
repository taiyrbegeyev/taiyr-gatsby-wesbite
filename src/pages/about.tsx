/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import Layout from "../@lekoarts/gatsby-theme-minimal-blog/components/layout"
import Listing from "../@lekoarts/gatsby-theme-minimal-blog/components/listing"
import useMinimalBlogConfig from "../@lekoarts/gatsby-theme-minimal-blog/hooks/use-minimal-blog-config"
import replaceSlashes from "../@lekoarts/gatsby-theme-minimal-blog/utils/replaceSlashes"
import SEO from "../@lekoarts/gatsby-theme-minimal-blog/components/seo"

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

const About = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <SEO title="About" />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Styled.h2>About</Styled.h2>
      </Flex>
    </Layout>
  )
}

export default About