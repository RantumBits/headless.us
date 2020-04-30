import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'
import Layout from '../components/Layout'

/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 */
export const byDate = posts => {
  const now = Date.now()
  return posts.filter(post => Date.parse(post.date) <= now)
}

// Export Template for use in CMS preview
export const ProjectIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  posts = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      
      return (
        <main className="Blog">
          <PageHeader
            title={title}
            subtitle={subtitle}
            backgroundImage={featuredImage}
          />

          {!!posts.length && (
            <section className="section">
              <div className="container">
                <PostSection posts={posts} />
              </div>
            </section>
          )}
        </main>
      )
    }}
  </Location>
)

// Export Default ProjectIndex for front-end
const ProjectIndex = ({ data: { page, posts } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProjectIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      posts={posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default ProjectIndex

export const pageQuery = graphql`
  ## Query for ProjectIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ProjectIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        excerpt
        template
        subtitle
        featuredImage
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "projects" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "dddd MMMM DD, YYYY")
            categories {
              category
            }
            featuredImage
          }
        }
      }
    }
  }
`
