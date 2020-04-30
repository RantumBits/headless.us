import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>

    <footer className="footer">
      <div className="container taCenter">
        <span>
          <a href="https://twitter.com/ecomloop" target="_blank">twitter</a> <a href="https://github.com/ecomloop" target="_blank">github</a> <a href="https://www.upwork.com/agencies/~018dcd9aca877342a3" target="_blank">upwork</a> <a target="_blank" href="https://www.linkedin.com/company/ecomloop/">linkedin</a>
          <br/>© Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://ecomloop.com">ecomloop</a>.
        </span>
      </div>
    </footer>
  </div>
)
