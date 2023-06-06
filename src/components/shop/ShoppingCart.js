/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cart } from 'reducers/cart'

export const ShoppingCart = () => {
  const selectedItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))
  if (totalPrice === 0) {
    return (
      <div>
        <h2>Cart</h2>
        <p>Din kurv er tom</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {selectedItems.map((item) => (
          <li key={item._id}>
            <p>{item.quantity} x {item.name} - {item.price}</p>
            <button type="button" onClick={() => dispatch(cart.actions.removeItem(item))}>X</button>
          </li>))}
      </ul>
      <div>
        <p>Total: {totalPrice} dkk</p>
        <button type="button" onClick="">Gå til betaling</button>
      </div>

    </div>
  )
}