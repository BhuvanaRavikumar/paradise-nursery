import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, selectCartItems } from '../store/CartSlice';
import { categories, plants, money } from '../data/plants';
import { Icon } from './Icons';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = useMemo(() => new Set(cartItems.map((item) => item.id)), [cartItems]);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const visible = plants.filter((plant) => (category === 'all' || plant.category === category) &&
    `${plant.name} ${plant.botanical} ${plant.description}`.toLowerCase().includes(search.trim().toLowerCase()));

  return <main className="catalog-page">
    <section className="catalog-intro container">
      <div className="eyebrow"><span className="eyebrow-line"/> THE GREEN COLLECTION</div>
      <div className="catalog-heading-row"><div><h1>Find your <em>happy place.</em></h1><p>Thoughtfully chosen greenery for every corner, every mood, and every plant parent.</p></div><div className="catalog-counter"><strong>18</strong><span>plants to love</span></div></div>
    </section>
    <section className="container catalog-section" aria-label="Shop plants">
      <div className="catalog-toolbar"><div className="category-tabs" role="group" aria-label="Filter by category"><button type="button" className={category === 'all' ? 'selected' : ''} onClick={() => setCategory('all')}>All Plants <span>{plants.length}</span></button>{categories.map((item) => <button type="button" key={item.id} className={category === item.id ? 'selected' : ''} onClick={() => setCategory(item.id)}>{item.name} <span>{plants.filter((plant) => plant.category === item.id).length}</span></button>)}</div><label className="search-field"><span className="sr-only">Search plants</span><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search plants..." /></label></div>
      <p className="results-count">Showing {visible.length} {visible.length === 1 ? 'plant' : 'plants'}</p>
      {visible.length === 0 ? <div className="empty-search"><Icon name="leaf" size={36}/><h3>No plants found</h3><p>Try another search or browse all our greenery.</p><button type="button" className="btn btn-outline" onClick={() => { setCategory('all'); setSearch(''); }}>Show all plants</button></div> : <div className="product-grid">{visible.map((plant) => {
        const added = addedIds.has(plant.id);
        return <article className="product-card" key={plant.id}>
          <div className="product-art"><img src={plant.image} alt={`${plant.name} in a planter`} loading="lazy" />{plant.badge && <span className="product-badge">{plant.badge}</span>}</div>
          <div className="product-details"><span className="plant-category">{categories.find((c) => c.id === plant.category)?.name}</span><div className="product-title-row"><h2>{plant.name}</h2><strong>{money(plant.price)}</strong></div><p className="botanical">{plant.botanical}</p><p className="plant-description">{plant.description}</p><div className="plant-care"><span><Icon name="sun" size={15}/>{plant.light}</span><span><Icon name="drop" size={15}/>{plant.water}</span></div><button type="button" className={`add-button ${added ? 'added' : ''}`} disabled={added} onClick={() => dispatch(addToCart(plant.id))}>{added ? <><Icon name="check" size={18}/> Added to Cart</> : <><Icon name="plus" size={18}/> Add to Cart <Icon name="arrow" size={17}/></>}</button></div>
        </article>;
      })}</div>}
      <div className="catalog-footer-cta"><div><Icon name="leaf" size={24}/><span>Good things grow here. Ready to bring a little green home?</span></div><Link to="/cart">View your cart <Icon name="arrow" size={17}/></Link></div>
    </section>
  </main>;
}
