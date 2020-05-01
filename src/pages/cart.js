import React from 'react'

import { Location } from '@reach/router'
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'

import Cart from '../components/Cart'

const CartPage = () => (
    <Layout>
        <section className="section">
            <div className="container">
                <h1>Cart</h1>
                <Cart />
            </div>
        </section>
    </Layout>
)

export default CartPage
