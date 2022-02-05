/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "@theme-ui/components"
// @ts-ignore
import Bottom from "../@lekoarts/gatsby-theme-minimal-blog/texts/bottom"
import Layout from "../@lekoarts/gatsby-theme-minimal-blog/components/layout"
import List from "../@lekoarts/gatsby-theme-minimal-blog/components/list"
import SEO from "../@lekoarts/gatsby-theme-minimal-blog/components/seo"
import AboutMeCard from "../components/aboutMeCard"
import TimeLine from "../components/timeline"
import aboutStyles from "./about.module.css"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Flex sx={{ flexFlow: `wrap`, flexDirection: 'column', alignItems: 'center' }}>
        <div className={aboutStyles.page} id="aboutMeCard">
          <AboutMeCard />
        </div>
        <TimeLine />
        <List>
          <Bottom />
        </List>
      </Flex>
    </Layout>
  )
}

export default About
