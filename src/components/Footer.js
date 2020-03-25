import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <!--<h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/ecomloop/">@ecomloop</a>
    </h2>
    <br />
    <InstagramFeed count="8" />--
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://ecomloop.com">ecomloop</a>.
        </span>
      </div>
    </footer>
  </div>
)
