import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../img/logo3.png";
import imgg1 from "../../img/logo3.png";
import imgg2 from "../../img/pay/app.jpg";
import imgg3 from "../../img/pay/play.jpg";
import imgg4 from "../../img/pay/pay.png";
import img1 from "../../img/products/f1.jpg";
import img2 from "../../img/products/f2.jpg";
import img3 from "../../img/products/f3.jpg";



const Cart = () => {
    return (

        <div>

            {/* .....header..... */}
            <section id="header">
                <Link to="/"><img src={Logo} class="logo" alt="" /></Link>

                <div>
                    <ul id="navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li id="lg-bag"><Link to="/cart" class="active"><i class="fa fa-shopping-cart"></i></Link></li>
                        <a href="#" id="close"><i class='fas'>&#xf00d;</i></a>
                    </ul>
                </div>
                <div id="mobile">

                    <a href="cart.html"><i class="fa fa-shopping-cart"></i></a>
                    <i id="bar" class="fas fa-outdent"></i>

                </div>
            </section>

            {/* .....Hero..... */}
            <section id="page-header" class="about-header">

                <h2>#cart</h2>

                <p>Apply your coupon code & SAVE upto 70%! </p>

            </section>

            <section id="cart" class="section-p1">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                            <td><img src={img1}/></td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1"/></td>
                            <td>$118.19</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                            <td><img src={img2}/></td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1"/></td>
                            <td>$118.19</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                            <td><img src={img3}/></td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1"/></td>
                            <td>$118.19</td>
                        </tr>
                    </tbody>
                </table>


            </section>

            <section id="cart-add" class="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon"></input>
                        <button class="normal">Apply</button>
                    </div>
                </div>

                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$335</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$335</strong></td>
                        </tr>
                    </table>
                    <button class="normal">Proceed to checkout</button>

                </div>
            </section>

            {/* Footer */}
            <footer className="section-p1">
                <div className="column">
                    <img className="logo" src={imgg1} alt="" />
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
                    <p><strong>Phone:</strong> (+91) 9899999999 / (+91) 0000000000</p>
                    <p><strong>Hours:</strong> 10:00-18:00, Mon-Sat</p>
                    <div className="follow">
                        <h4>Follow us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>
                <div className="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className="row">
                        <img src={imgg2} alt="" />
                        <img src={imgg3} alt="" />
                    </div>
                    <p>Secure Payment Gateways</p>
                    <img src={imgg4} alt="" />
                </div>
                <div className="copyright">
                    <p>&#169; 2022, SetGalaxy - MarketPlace Website </p>
                </div>
            </footer>

        </div>
    )
}
export default Cart;