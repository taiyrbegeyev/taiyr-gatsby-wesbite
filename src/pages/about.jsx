/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "@theme-ui/components"
import Layout from "../@lekoarts/gatsby-theme-minimal-blog/components/layout"
import SEO from "../@lekoarts/gatsby-theme-minimal-blog/components/seo"
import AboutMeIntro from "../components/aboutMeIntro"
import AboutMeCard from "../components/aboutMeCard"
import TimeLine from "../components/timeline"
import aboutStyles from "./about.module.css"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Flex sx={{ flexFlow: `wrap`, flexDirection: 'column', alignItems: 'center' }}>
        <AboutMeIntro />
        <div className={aboutStyles.page} id="aboutMeCard">
          <AboutMeCard />
        </div>
        <TimeLine />
      </Flex>
    </Layout>
  )
}

export default About
