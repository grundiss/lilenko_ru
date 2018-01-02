import React from "react";
import Icon from "client/components/icon";

import menu from "./menu.json";

import navStyle from "./nav.css";
import fStyle from "./footer.css";

export default ({ children }) => (
  <div>
    <nav className={navStyle.bar}>
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
      <div>
        (с) Все права защищены. <a href="http://lilenko.ru/">Lilenko.ru</a>{" "}
        <a href="https://www.facebook.com/irina.lilenko/" target="_blank">
          <Icon name="facebook-official" />
        </a>
      </div>
    </footer>
  </div>
);
