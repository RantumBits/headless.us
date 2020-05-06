import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const ProjectsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  date,
  videoPoster,
  videoTitle,
  accordion,
  client,
  body,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <h4>Client: {client} | {date}</h4>
        <Content source={section1} />

      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Screenshot gallery</h2>
        <Gallery images={gallery} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>



    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>

    <section className="section">
      <div className="container">
      <strong>Is your organization effectively leveraging technology for growth?</strong> &nbsp;
        <a href="/contact/" className="Nav--CTA animated rubberBand slow delay-5s center">Get in touch</a>
      </div>
    </section>
  </main>
)

const ProjectsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProjectsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        date(formatString: "MMMM YYYY")
        video
        videoPoster
        videoTitle
        client
        accordion {
          title
          description
        }
      }
    }
  }
`
