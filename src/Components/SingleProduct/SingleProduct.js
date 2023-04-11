import React from 'react'
import { Link } from 'react-router-dom';
import FeatureImage1 from "../../img/products/f1.jpg";
import Logo from "../../img/logo3.png";
import imgg1 from "../../img/logo3.png";
import imgg2 from "../../img/pay/app.jpg";
import imgg3 from "../../img/pay/play.jpg";
import imgg4 from "../../img/pay/pay.png";
import img1 from "../../img/products/n1.jpg";
import img2 from "../../img/products/n2.jpg";
import img3 from "../../img/products/n3.jpg";
import img4 from "../../img/products/n4.jpg";
// import './Assets/javascript/javascript2.js';
const SingleProduct = () => {
    return (

        <div>

            {/* .....header..... */}
            <section id="header">
                <Link to="/"><img src={Logo} class="logo" alt="" /></Link>

                <div>
                    <ul id="navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop" class="active">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li id="lg-bag"><Link to="/cart"><i class="fa fa-shopping-cart"></i></Link></li>
                        <a href="#" id="close"><i class='fas'>&#xf00d;</i></a>
                    </ul>
                </div>
                <div id="mobile">

                    <li id="lg-bag"><Link to="/cart"><i class="fa fa-shopping-cart"></i></Link></li>
                    <i id="bar" class="fas fa-outdent"></i>

                </div>
            </section>

            <section id="prodetails" class="section-p1">
                <div class="single-pro-image">
                    <img src={FeatureImage1} width="100%" id="MainImage"></img>
                    {/* <div class="small-img-group">
                        <div class="small-img-col">
                            <img src={FeatureImage1} width="100%" class="small-img"></img>
                        </div>
                        <div class="small-img-col">
                            <img src={FeatureImage2} width="100%" class="small-img"></img>
                        </div>
                        <div class="small-img-col">
                            <img src={FeatureImage3} width="100%" class="small-img"></img>
                        </div>
                        <div class="small-img-col">
                            <img src={FeatureImage4} width="100%" class="small-img"></img>
                        </div>
                    </div> */}
                </div>
                <div class="single-pro-details">
                    <h6>Home / T-Shirt</h6>
                    <h4>Men's Fashion T-Shirt</h4>
                    <h2>$139.00</h2>
                    <select>
                        <option>Select Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                    <input type="number" value="1"></input>
                    <button class="normal">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshurnk jersey kniw provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.</span>
                </div>
            </section>

            <section id="product1" class="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div class="pro-container">
                    <div class="pro">
                        <img src={img1} alt="" />
                        <div class="description">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div class="pro">
                        <img src={img2} alt="" />
                        <div class="description">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div class="pro">
                        <img src={img3} alt="" />
                        <div class="description">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div class="pro">
                        <img src={img4} alt="" />
                        <div class="description">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>

            </section>

            {/* Newsletter */}
            <section id="newsletter" class="section-p1 section-m1">
                <div class="newtext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>
                <div class="form">
                    <input type="text" placeholder="Your email address" />
                    <button class="normal">Sign Up</button>
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
export default SingleProduct;