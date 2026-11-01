import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/CartSlice';
import { Icon } from './Icons';

export default function Navbar({ transparent = false }) {
  const count = useSelector(selectCartCount);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className={`site-header ${transparent ? 'header-landing' : ''}`}>
    <div className="container nav-wrap">
      <Link to="/" className="brand" onClick={close} aria-label="Paradise Nursery home">
        <span className="brand-mark"><Icon name="leaf" size={23} strokeWidth={1.7}/></span>
        <span className="brand-text">paradise<span>nursery</span><small>GROW SOMETHING GOOD</small></span>
      </Link>
      <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><Icon name={open ? 'x' : 'menu'} size={25}/></button>
      <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/plants" onClick={close}>Plants</NavLink>
        <NavLink to="/about" onClick={close}>Our Story</NavLink>
        <NavLink to="/cart" className="cart-nav" onClick={close} aria-label={`Cart with ${count} items`}><Icon name="bag" size={21}/><span>Cart</span><span className="cart-count">{count}</span></NavLink>
      </nav>
    </div>
  </header>;
}
