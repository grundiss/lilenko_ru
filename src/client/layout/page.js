import React from "react";

export default ({ children }) => (
  <div>
    <nav>
      <a href="#">Конференция</a>
      |
      <a href="#">Книга</a>
      |
      <a href="#">Школа краудфандинга</a>
      |
      <a href="#">Консалтинг</a>
      |
      <a href="#">Обо мне</a>
      |
      <a href="#">Вопросы</a>
      |
      <a href="#">Статьи</a>
      |
      <a href="#">Контакты</a>
    </nav>
    <div>{children}</div>
    <footer>(с) Все права защищены. Все молодцы, всем пятерки.</footer>
  </div>
);
