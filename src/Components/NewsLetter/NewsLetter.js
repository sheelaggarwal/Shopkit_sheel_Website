import React from 'react'

export default function NewsLetter() {
  return (
    <div>
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
    </div>
  )
}
