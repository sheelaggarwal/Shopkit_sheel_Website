import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../img/logo3.png";

const Header=()=>{
    return (
    <div>
        <section id="header">
        <Link to="/"><img src={Logo} class="logo" alt="" /></Link>

        <div>
            <ul id="navbar">
                <li><Link to="/"><a class="active">Home</a></Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li id="lg-bag"><Link to="/cart"><i class="fa fa-shopping-cart"></i></Link></li>
                <a href="#" id="close"><i class='fas'>&#xf00d;</i></a>
            </ul>
        </div>
        <div id="mobile">
          
          <a href="cart.html"><i class="fa fa-shopping-cart"></i></a>
          <i id="bar" class="fas fa-outdent"></i>

        </div>
    </section>
    </div>
  )
}

export default Header;


