import React from 'react'
import { Link } from 'react-router-dom';
import FeatureImage1 from "../../img/products/f1.jpg";
import FeatureImage2 from "../../img/products/f2.jpg";
import FeatureImage3 from "../../img/products/f3.jpg";
import FeatureImage4 from "../../img/products/f4.jpg";
import FeatureImage5 from "../../img/products/f5.jpg";
import FeatureImage6 from "../../img/products/f6.jpg";
import FeatureImage7 from "../../img/products/f7.jpg";
import FeatureImage8 from "../../img/products/f8.jpg";

export default function FeatureProducts() {
    return (
        <div>
            <section id="product1" class="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div class="pro-container">
                    <div class="pro">
                        <Link to="/singleproduct"><img src={FeatureImage1} alt="" /></Link>
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
                        <Link to="/singleproduct2"><img src={FeatureImage2} alt="" /></Link>
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
                        <Link to="/singleproduct3"><img src={FeatureImage3} alt="" /></Link>
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
                    <Link to="/singleproduct4"><img src={FeatureImage4} alt="" /></Link>
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
                        <Link to="/singleproduct5"><img src={FeatureImage5} alt="" /></Link>
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
                        <Link to="/singleproduct6"><img src={FeatureImage6} alt="" /></Link>
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
                        <Link to="/singleproduct7"><img src={FeatureImage7} alt="" /></Link>
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
                        <Link to="/singleproduct8"><img src={FeatureImage8} alt="" /></Link>
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
        </div>
    )
}
