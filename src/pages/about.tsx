/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "@theme-ui/components"
import Layout from "../@lekoarts/gatsby-theme-minimal-blog/components/layout"
import SEO from "../@lekoarts/gatsby-theme-minimal-blog/components/seo"
import AboutMeIntro from "../components/aboutMeIntro"
import TimeLine from "../components/timeline"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Flex sx={{ flexFlow: `wrap`, flexDirection: 'column' }}>
        <AboutMeIntro />
        <TimeLine />
      </Flex>
    </Layout>
  )
}

export default About
