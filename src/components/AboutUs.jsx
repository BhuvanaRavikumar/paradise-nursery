import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export default function AboutUs() {
  return <main className="about-page">
    <section className="about-hero container">
      <div className="eyebrow"><span className="eyebrow-line"/> A LITTLE ABOUT US</div>
      <h1>Rooted in a love<br/>for <em>living things.</em></h1>
      <p>At Paradise Nursery, we believe a little greenery can change the way a space feels—and the way you feel in it.</p>
    </section>
    <section className="about-content container">
      <div className="about-illustration"><img src="/images/monstera.svg" alt="Illustration of a monstera plant" /></div>
      <div className="about-copy">
        <span className="section-kicker">OUR STORY</span>
        <h2>More than plants.<br/>A place to grow.</h2>
        <p>Paradise Nursery is a fictional online plant shop created as a React and Redux learning project. Our mission is simple: make finding your next favorite houseplant easy, welcoming, and inspiring.</p>
        <p>Explore thoughtfully organized collections, learn about each plant's light and watering needs, and build a cart full of greenery for your home.</p>
        <div className="about-values"><div><Icon name="leaf"/><span>Curated with care</span></div><div><Icon name="sun"/><span>For every skill level</span></div><div><Icon name="shield"/><span>Simple, thoughtful shopping</span></div></div>
        <Link className="btn btn-primary" to="/plants">Explore the collection <Icon name="arrow" size={18}/></Link>
      </div>
    </section>
  </main>;
}
