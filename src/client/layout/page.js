import React from "react";
import Icon from "client/components/icon";
import cx from "classnames";

import menu from "./menu.json";

import navStyle from "./nav.css";
import fStyle from "./footer.css";

const Menu = ({ className }) =>
  menu.map((entry, i) => (
    <a key={i} className={className} href={entry.link || "#"}>
      {entry.title}
    </a>
  ));

export default ({ children }) => (
  <div>
    <nav className={navStyle.bar}>
      <a href="/" className={cx(navStyle.link, navStyle.linkHome)}>
        <Icon name="home" />
      </a>
      <Menu className={navStyle.link} />
    </nav>
    <div>{children}</div>
    <footer className={fStyle.footer}>
      <nav className={fStyle.nav}>
        <Menu className={fStyle.navLink} />
      </nav>
      <div className={fStyle.left}>
        <div>
          (с) Все права защищены. <a href="http://lilenko.ru/">Lilenko.ru</a>
        </div>
        <div className={fStyle.contacts}>
          <a href="https://www.facebook.com/crowdall/" target="_blank">
            Давайте дружить в <Icon name="facebook-official" />
          </a>
          <br />
          <a href="mailto:info@lilenko.ru">info@lilenko.ru</a>
        </div>
      </div>
    </footer>
  </div>
);
