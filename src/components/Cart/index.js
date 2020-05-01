import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div>
      {line_items}
      <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      <button
        className = "Button"
        style = {{background: "var(--secondary)"}} 
        onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Check out</button>
    </div>
  )
}

export default Cart
