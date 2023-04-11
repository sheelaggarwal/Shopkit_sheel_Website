import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & upto 70% off! </p>
        <Link to="/shop"><button>Shop Now</button></Link>
      </section>
    </div>
  )
}

export default Hero;
