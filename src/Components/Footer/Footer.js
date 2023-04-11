import React from 'react'
import { Link } from 'react-router-dom';
import imgg1 from "../../img/logo3.png";
import imgg2 from "../../img/pay/app.jpg";
import imgg3 from "../../img/pay/play.jpg";
import imgg4 from "../../img/pay/pay.png";


export default function Footer() {
    return (
        <div>
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
                    <Link to="/about">About Us</Link>
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
