import React from "react";

export default ({ children }) => (
  <div>
    <nav>
      <a href="#">Книга</a>
      |
      <a href="#">Консультации</a>
      |
      <a href="#">Школа краудфандинга</a>
    </nav>
    <div>{children}</div>
    <footer>(с) Все права защищены. Все молодцы, всем пятерки.</footer>
  </div>
);
