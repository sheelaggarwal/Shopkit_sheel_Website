import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../img/logo3.png";
import imgg1 from "../../img/logo3.png";
import imgg2 from "../../img/pay/app.jpg";
import imgg3 from "../../img/pay/play.jpg";
import imgg4 from "../../img/pay/pay.png";
import img1 from "../../img/people/1.png";
import img2 from "../../img/people/2.png";
import img3 from "../../img/people/3.png";


const Contact = () => {
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
                        <li><Link to="/contact" class="active">Contact</Link></li>
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

                <h2>#let's_talk</h2>

                <p>LEAVE A MESSAGE, We love to hear from you!</p>

            </section>

            <section id="contact-details" class="section-p1">
                <div class="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit our store location or contact us today!</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <i class="fal fa-map"></i>
                            <p>56 Glassford Street Glassgow G1 1UL New York</p>
                        </li>
                        <li>
                            <i class="far fa-envelope"></i>
                            <p>contact@example.com</p>
                        </li>
                        <li>
                            <i class="fas fa-phone-alt"></i>
                            <p>contact@example.com</p>
                        </li>
                        <li>
                            <i class="far fa-clock"></i>
                            <p>Monday to Saturday: 9.00am to 6.00pm</p>
                        </li>
                    </div>
                </div>

                <div class="map">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184363!2d77.2065321676756!3d28.628901718704878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1656505300615!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>

            </section>

            <section id="form-details">
                <form>
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name"></input>
                    <input type="email" placeholder="E-mail"></input>
                    <input type="text" placeholder="Subject"></input>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button class="normal">Submit</button>
                </form>

                <div class="people">
                    <div>
                        <img src={img1} />
                        <p><span>John Doe</span> Senior Marketing Manager <br></br> Phone: +91 9898979695 <br></br>Email: contact@example.com</p>
                    </div>
                    <div>
                        <img src={img2} />
                        <p><span>William Smith</span> Senior Marketing Manager <br></br> Phone: +91 9898979695 <br></br>Email: contact@example.com</p>
                    </div>
                    <div>
                        <img src={img3} />
                        <p><span>Emma Willson</span> Senior Marketing Manager <br></br> Phone: +91 9898979695 <br></br>Email: contact@example.com</p>
                    </div>
                </div>
            </section>

            {/* .....Newsletter..... */}
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
export default Contact;