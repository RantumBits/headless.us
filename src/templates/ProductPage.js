import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import ProductForm from '../components/ProductForm'

import './ProductPage.css'

const ProductPage = ({ data }) => {
    const product = data.shopifyProduct
    return (
        <Layout title={product.title || false}>
            <div className="TwoColumnGrid">
                <div className="GridLeft">
                    {product.images.map(image => (
                        <Image
                            fluid={image.localFile.childImageSharp.fluid}
                            key={image.id}
                            alt={product.title}
                        />
                    ))}
                </div>
                <div className="GridRight">
                    <h1 className="ProductTitle">{product.title}</h1>
                    <div className="ProductDescription"
                        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                    />
                    <ProductForm product={product} />
                </div>
            </div>
        </Layout>
    )
}

export default ProductPage

export const pageQuery = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`