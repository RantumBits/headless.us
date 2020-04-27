import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'

const ProductPage = () => (
  <Layout>
    <PageHeader
      title="Products"
      subtitle="List of all Products"
    />
    <section className="section">
      <div className="container">
        <ProductGrid />
      </div>
    </section>

  </Layout>
)

export default ProductPage
