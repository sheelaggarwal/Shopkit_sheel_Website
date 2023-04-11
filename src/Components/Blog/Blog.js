import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../img/logo3.png";
import FeatureImage1 from "../../img/products/f1.jpg";
import FeatureImage2 from "../../img/products/f2.jpg";
import FeatureImage3 from "../../img/products/f3.jpg";
import FeatureImage4 from "../../img/products/f4.jpg";
import FeatureImage5 from "../../img/products/f5.jpg";
import FeatureImage6 from "../../img/products/f6.jpg";
import FeatureImage7 from "../../img/products/f7.jpg";
import FeatureImage8 from "../../img/products/f8.jpg";
import imgg1 from "../../img/logo3.png";
import imgg2 from "../../img/pay/app.jpg";
import imgg3 from "../../img/pay/play.jpg";
import imgg4 from "../../img/pay/pay.png";
import imag1 from "../../img/blog/b1.jpg";
import imag2 from "../../img/blog/b2.jpg";
import imag3 from "../../img/blog/b3.jpg";
import imag4 from "../../img/blog/b4.jpg";
import imag6 from "../../img/blog/b6.jpg";

const Blog = () => {
    return (
        <div>
            {/* .....header..... */}
            <section id="header">
                <Link to="/"><img src={Logo} class="logo" alt="" /></Link>

                <div>
                    <ul id="navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog" class="active">Blog</Link></li>
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

            {/* .....Hero..... */}
            <section id="page-header" class="blog-header">

                <h2>#readmore</h2>
                <p>Read all case studies about our products!</p>

            </section>

            {/* .....blog..... */}
            <section id="blog">
                <div class="blog-box">
                    <div class="blog-img">
                        <img src={imag1} />
                    </div>
                    <div class="blog-details">
                        <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
                        <p>Kickstarter man braid godard coloring black. Raclette waistcoat selfies yr wolf chartruse hexagon irony, godard...</p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>13/01</h1>
                </div>

                <div class="blog-box">
                    <div class="blog-img">
                        <img src={imag2} />
                    </div>
                    <div class="blog-details">
                        <h4>How to Style a Quiff</h4>
                        <p>Kickstarter man braid godard coloring black. Raclette waistcoat selfies yr wolf chartruse hexagon irony, godard...</p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>13/04</h1>
                </div>

                <div class="blog-box">
                    <div class="blog-img">
                        <img src={imag3} />
                    </div>
                    <div class="blog-details">
                        <h4>Must-have skater Girl Items</h4>
                        <p>Kickstarter man braid godard coloring black. Raclette waistcoat selfies yr wolf chartruse hexagon irony, godard...</p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>12/01</h1>
                </div>

                <div class="blog-box">
                    <div class="blog-img">
                        <img src={imag4} />
                    </div>
                    <div class="blog-details">
                        <h4>Runaway-Inspired Trends</h4>
                        <p>Kickstarter man braid godard coloring black. Raclette waistcoat selfies yr wolf chartruse hexagon irony, godard...</p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>16/01</h1>
                </div>

                <div class="blog-box">
                    <div class="blog-img">
                        <img src={imag6} />
                    </div>
                    <div class="blog-details">
                        <h4>AW20 Menswear Trends</h4>
                        <p>Kickstarter man braid godard coloring black. Raclette waistcoat selfies yr wolf chartruse hexagon irony, godard...</p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>10/03</h1>
                </div>
            </section>

            {/* .....Pagination..... */}
            <section id="pagination" class="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i class="fas fa-angle-double-right"></i></a>

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

export default Blog;