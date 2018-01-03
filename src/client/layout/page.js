import React from "react";
import Icon from "client/components/icon";
import cx from "classnames";

import menu from "./menu.json";

import navStyle from "./nav.css";
import fStyle from "./footer.css";

export default ({ children }) => (
  <div>
    <nav className={navStyle.bar}>
      <a href="/" className={cx(navStyle.link, navStyle.linkHome)}>
        <Icon name="home" />
      </a>
      {menu.map((entry, i) => (
        <a key={i} className={navStyle.link} href="#">
          {entry.title}
        </a>
      ))}
    </nav>
    <div>{children}</div>
    <footer className={fStyle.footer}>
      <nav className={fStyle.nav}>
        {menu.map((entry, i) => (
          <a key={i} className={fStyle.navLink} href="#">
            {entry.title}
          </a>
        ))}
      </nav>
      <div className={fStyle.left}>
        <div>
          (с) Все права защищены. <a href="http://lilenko.ru/">Lilenko.ru</a>
        </div>
        <div className={fStyle.contacts}>
          <a href="https://www.facebook.com/irina.lilenko/" target="_blank">
            Давайте дружить в <Icon name="facebook-official" />
          </a>
          <br />
          <a href="mailto:info@lilenko.ru">info@lilenko.ru</a>
        </div>
      </div>
    </footer>
  </div>
);
