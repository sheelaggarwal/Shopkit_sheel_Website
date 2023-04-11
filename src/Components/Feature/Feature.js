import React from 'react'
import image1 from "../../img/features/f1.png";
import image2 from "../../img/features/f2.png";
import image3 from "../../img/features/f3.png";
import image4 from "../../img/features/f4.png";
import image5 from "../../img/features/f5.png";
import image6 from "../../img/features/f6.png";

export default function Feature() {
    return (
        <div>
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
        </div>
    )
}
