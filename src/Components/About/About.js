import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../img/logo3.png";
import imgg1 from "../../img/logo3.png";
import imgg2 from "../../img/pay/app.jpg";
import imgg3 from "../../img/pay/play.jpg";
import imgg4 from "../../img/pay/pay.png";
import immg1 from "../../img/about/a6.jpg";
import video from "../../img/about/1.mp4";
import image1 from "../../img/features/f1.png";
import image2 from "../../img/features/f2.png";
import image3 from "../../img/features/f3.png";
import image4 from "../../img/features/f4.png";
import image5 from "../../img/features/f5.png";
import image6 from "../../img/features/f6.png";


const About = () => {
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
                        <li><Link to="/about" class="active">About</Link></li>
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
            <section id="page-header" class="about-header">

                <h2>#knowUs</h2>

                <p>Trust The Process Of Knowing Us! </p>

            </section>

            <section id="about-head" class="section-p1">
                <img src={immg1} />
                <div>
                    <h2>Who We Are?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, tempor incident ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, tempor incident ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, tempor incident ut labore et dolore magna aliqua.</p>

                    <br></br>
                    <br></br>

                    {/* sliding text */}
                    <marquee bgcolor="#ccc" loop="-1" scrollamounts="5" width="100%">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</marquee>
                </div>
            </section>

            <section id="about-app" class="section-p1">
                <h1>Download Our <a href="#">App</a></h1>
                <div class="video">
                    <video autoPlay muted loop src={video} ></video>
                </div>
            </section>

            <section id="feature" class="section-p1">
                <div class="feature-box">
                    <img src={image1} alt="" />
                    <h6>Free Shipping</h6>
                </div>

                <div class="feature-box">
                    <img src={image2} alt="" />
                    <h6>Online Order</h6>
                </div>

                <div class="feature-box">
                    <img src={image3} alt="" />
                    <h6>Save Money</h6>
                </div>

                <div class="feature-box">
                    <img src={image4} alt="" />
                    <h6>Promotions</h6>
                </div>

                <div class="feature-box">
                    <img src={image5} alt="" />
                    <h6>Happy Sell</h6>
                </div>

                <div class="feature-box">
                    <img src={image6} alt="" />
                    <h6>24/7 Support</h6>
                </div>

            </section>

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
export default About;