import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'

const LineItem = props => {
    const { line_item } = props
    const {
        removeLineItem,
        store: { client, checkout },
    } = useContext(StoreContext)

    const variantImage = line_item.variant.image ? (
        <img
            src={line_item.variant.image.src}
            alt={`${line_item.title} product shot`}
            height="60px"
        />
    ) : null

    const selectedOptions = line_item.variant.selectedOptions
        ? line_item.variant.selectedOptions.map(
            option => `${option.name}: ${option.value} `
        )
        : null

    const handleRemove = () => {
        removeLineItem(client, checkout.id, line_item.id)
    }

    return (
        <>
            <br />
            <p>
                {variantImage}
                {`  `}
                {line_item.title}
                {`  `}
                Qty : {line_item.quantity}
                {`  `}
                <button
                    className="Button"
                    style={{ background: "var(--midGrey)", color: "var(--secondary)" }}
                    onClick={handleRemove}>Remove</button>
            </p>
        </>
    )
}

export default LineItem
