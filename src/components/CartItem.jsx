import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem, selectCartItems, selectCartCount } from '../store/CartSlice';
import { getPlant, money } from '../data/plants';
import { Icon } from './Icons';
import Navbar from './Navbar';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const [showCheckout, setShowCheckout] = useState(false);
  const items = cartItems.map((item) => ({ ...item, plant: getPlant(item.id) })).filter((item) => item.plant);
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.plant.price, 0);

  return <><Navbar/><main className="cart-page container">
    <div className="eyebrow"><span className="eyebrow-line"/> YOUR GREENERY, GATHERED</div><div className="cart-page-heading"><div><h1>Your <em>shopping cart.</em></h1><p>{count === 0 ? 'Your next plant adventure starts here.' : `${count} ${count === 1 ? 'plant' : 'plants'} in your basket. Looking good already!`}</p></div><Link to="/plants" className="back-to-plants">Continue shopping <Icon name="arrow" size={17}/></Link></div>
    {items.length === 0 ? <div className="empty-cart"><div className="empty-cart-icon"><Icon name="bag" size={44}/></div><h2>Nothing growing here yet.</h2><p>Your cart is empty. Browse our collection and find your new leafy friend.</p><Link className="btn btn-primary" to="/plants">Explore plants <Icon name="arrow" size={18}/></Link></div> : <div className="cart-layout">
      <section className="cart-items" aria-label="Cart items"><div className="cart-list-header"><span>YOUR ITEMS ({count})</span><span>PRICE</span></div>{items.map(({ id, quantity, plant }) => <article className="cart-item" key={id}><div className="cart-item-image"><img src={plant.image} alt={plant.name} /></div><div className="cart-item-info"><span className="plant-category">{plant.category.replaceAll('-', ' ')}</span><h2>{plant.name}</h2><p>{plant.botanical}</p><p className="cart-unit-price">{money(plant.price)} each</p><div className="cart-item-actions"><div className="quantity-stepper" aria-label={`Quantity of ${plant.name}`}><button type="button" onClick={() => dispatch(updateQuantity({ id, quantity: quantity - 1 }))} aria-label={`Decrease ${plant.name} quantity`}><Icon name="minus" size={16}/></button><span aria-live="polite">{quantity}</span><button type="button" onClick={() => dispatch(updateQuantity({ id, quantity: quantity + 1 }))} aria-label={`Increase ${plant.name} quantity`}><Icon name="plus" size={16}/></button></div><button type="button" className="remove-item" onClick={() => dispatch(removeItem(id))}><Icon name="trash" size={15}/> Remove</button></div></div><strong className="cart-line-total">{money(plant.price * quantity)}</strong></article>)}</section>
      <aside className="order-summary"><h2>Order summary</h2><div className="summary-row"><span>Subtotal ({count} {count === 1 ? 'item' : 'items'})</span><strong>{money(subtotal)}</strong></div><div className="summary-row"><span>Estimated shipping</span><span className="free-shipping">Free</span></div><div className="summary-total"><span>Total Cart Amount</span><strong>{money(subtotal)}</strong></div><p className="summary-note">Taxes, if applicable, would be calculated at checkout.</p><button type="button" className="btn btn-primary checkout-button" onClick={() => setShowCheckout(true)}>Checkout <Icon name="arrow" size={19}/></button><Link className="summary-continue" to="/plants">Continue shopping</Link><div className="summary-trust"><Icon name="shield" size={19}/><span>Made with care, for plant lovers.</span></div></aside>
    </div>}
    {showCheckout && <div className="modal-backdrop" role="presentation" onMouseDown={() => setShowCheckout(false)}><div className="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title" onMouseDown={(event) => event.stopPropagation()}><button type="button" className="modal-close" aria-label="Close dialog" onClick={() => setShowCheckout(false)}><Icon name="x" size={21}/></button><div className="modal-leaf"><Icon name="leaf" size={32}/></div><h2 id="checkout-title">Something lovely is growing.</h2><p>Checkout is coming soon! Your plants are saved in your cart in the meantime.</p><button type="button" className="btn btn-primary" onClick={() => setShowCheckout(false)}>Keep exploring</button></div></div>}
  </main></>;
}
