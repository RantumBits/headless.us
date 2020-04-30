import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'

const ServicesPage = () => (
  <Layout>
    <PageHeader
      title="Leverage technology effectively"
      subtitle="Get started *today* with Ecomloop Services, designed to begin quickly & identify actionable next steps"
      backgroundImage='../images/ecoomloop_clock_leverage.png'
    />
    <section className="section">
      <div className="container">
        <ProductGrid />
      </div>
    </section>

  </Layout>
)

export default ServicesPage
