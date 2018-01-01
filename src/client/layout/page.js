import React from "react";

import menu from "./menu.json";

import navStyle from "./nav.css";
import fStyle from "./footer.css";

export default ({ children }) => (
  <div>
    <nav className={navStyle.bar}>
      {menu.map((entry, i) => (
        <a className={navStyle.link} href="#">
          {entry.title}
        </a>
      ))}
    </nav>
    <div>{children}</div>
    <footer className={fStyle.footer}>
      <nav className={fStyle.nav}>
        {menu.map((entry, i) => (
          <a className={fStyle.navLink} href="#">
            {entry.title}
          </a>
        ))}
      </nav>
      <div>
        (с) Все права защищены. <a href="http://lilenko.ru/">Lilenko.ru</a>
      </div>
    </footer>
  </div>
);
