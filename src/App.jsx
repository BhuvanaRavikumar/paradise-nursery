import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import { Icon } from './components/Icons';
import './App.css';

function LandingPage() {
  return <main className="landing-page">
    <section className="hero"><div className="container hero-layout"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> WELCOME TO PARADISE NURSERY</div><h1>Make room<br/>for a little <em>green.</em></h1><p>Beautiful plants, happier spaces. Discover easy-care favorites and leafy statement makers, picked to help your home feel more like you.</p><div className="hero-actions"><Link to="/plants" className="btn btn-primary btn-hero">Get Started <Icon name="arrow" size={20}/></Link><Link to="/about" className="hero-secondary">Our story <Icon name="arrow" size={17}/></Link></div><div className="hero-social"><div className="avatar-stack"><span>🌿</span><span>🌱</span><span>🍃</span></div><div><strong>Grow at your own pace</strong><small>There's a plant for everyone.</small></div></div></div><div className="hero-visual" aria-label="Illustration of a collection of houseplants"><div className="hero-visual-blob"/><img className="hero-plant hero-plant-back" src="/images/bird-of-paradise.svg" alt=""/><img className="hero-plant hero-plant-main" src="/images/monstera.svg" alt="Monstera plant in a planter"/><img className="hero-plant hero-plant-front" src="/images/snake-plant.svg" alt=""/><div className="floating-note"><Icon name="leaf" size={17}/><span>Let good things grow.</span></div><span className="hero-star star-one">✳</span><span className="hero-star star-two">✳</span></div></div><div className="hero-bottom-line"><div className="container"><span>ROOTED IN NATURE</span><span>MADE FOR YOUR HOME</span><span>GROW WITH US</span></div></div></section>
    <section className="home-benefits container"><div><Icon name="leaf" size={27}/><h3>Plants for everyone</h3><p>From first-time plant parents to lifelong collectors.</p></div><div><Icon name="sun" size={27}/><h3>Thoughtfully curated</h3><p>Find the right green companion for your space.</p></div><div><Icon name="truck" size={27}/><h3>Easy to explore</h3><p>Browse, pick favorites, and build your dream cart.</p></div></section>
    <section className="home-feature container"><div className="home-feature-copy"><span className="section-kicker">A LITTLE GREEN GOES A LONG WAY</span><h2>Life looks better<br/>with <em>leaves.</em></h2><p>From sunny windowsills to cozy reading corners, the right plant makes a space feel alive.</p><Link to="/plants" className="text-link">Shop all plants <Icon name="arrow" size={19}/></Link></div><div className="home-feature-art"><img src="/images/peace-lily.svg" alt="Peace lily illustration"/><img src="/images/pothos.svg" alt="Golden pothos illustration"/></div></section>
  </main>;
}

function Footer() { return <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><Icon name="leaf" size={22}/><span>paradise nursery</span></div><p>Grow something good. © {new Date().getFullYear()} Paradise Nursery.</p><div><Link to="/">Home</Link><Link to="/plants">Plants</Link><Link to="/about">About</Link></div></div></footer>; }

export default function App() {
  return <><Navbar/><Routes><Route path="/" element={<LandingPage/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/><Route path="/about" element={<AboutUs/>}/><Route path="*" element={<div className="not-found container"><h1>Page not found</h1><p>Looks like this path has gone a little wild.</p><Link className="btn btn-primary" to="/">Back home</Link></div>}/></Routes><Footer/></>;
}
