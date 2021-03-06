import React from 'react'
import { Disqus } from 'gatsby-plugin-disqus'
import useSiteMetadata from "../@lekoarts/gatsby-theme-minimal-blog/hooks/use-site-metadata"

const PostTemplate = ({post}) => {
  const site = useSiteMetadata()

  const disqusConfig = {
    url: `${site.siteUrl + post.slug}`,
    identifier: post.slug,
    title: post.title,
  }
  return (
    <>
      <Disqus config={disqusConfig} />
    </>
  )
}

export default PostTemplate
