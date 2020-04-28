import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import StoreContext from '../context/StoreContext'

import './ProductGrid.css'

const ProductGrid = () => {

  const { store: {checkout} } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query allProductsQuery {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <div className="Grid">
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => (
          <div className="Product" key={id} >
            <Link to={`/service/${handle}/`}>
              {firstImage && firstImage.localFile &&
                (<Image
                  fluid={firstImage.localFile.childImageSharp.fluid}
                  alt={handle}
                />)}
            </Link>
            <span className="Title">{title}</span>
            <span className="PriceTag">{getPrice(firstVariant.price)}</span>
          </div>
        ))
        : <p>No Products found!</p>}
    </div>
  )
}

export default ProductGrid
