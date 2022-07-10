import React from 'react';
import Logo from './../images/image-logo.svg';

function Header() {
  return ((
    <header className="header">
      <a href="https://salatsr.github.io/mesto/index.html"
          className="header__logo-link">
        <img src={Logo}
          alt="Логотип Mestro Russia"
          className="header__logo" />
      </a>
    </header>
  ));
}

export default Header;