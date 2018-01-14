import React from "react";
import Page from "client/layout/page";
import Section from "client/components/section";
import Subscribe from "client/components/subscribe";

import style from "./styles.css";

export default () => (
  <Page>
    <Section title="Консалтинг">
      <p>Чтобы сделать правильно, надо знать и о правилах, и об ошибках.</p>
      <p>Формат консультаций:</p>
      <ul>
        <li>Онлайн-консультации по Skype</li>
        <li>Личная встреча</li>
      </ul>
      <p>Что вы получите в результате консультации:</p>
      <p>Ответы на все вопросы о возможностях крауда именно для вашего проекта. ( расшифровать?)</p>
      <p>
        Продолжительность одной консультации не менее 2 часов. В некоторых случаях требуется больше.
        Вы определяете после первой консультации нужно ли вам дополнительное время. Индивидуальное
        консультирование только по предварительной записи.
      </p>
      <div>
        <Subscribe
          id="consult-me"
          invitationText="Запишитесь на консультацию"
          successText="Спаибо за доверие! Скоро я с вами свяжусь"
          apiUrl="/json/subsribe-to-updates/"
        />
      </div>
      <p>Стоимость индивидуального консультирования 2000 рублей за один час</p>
    </Section>
  </Page>
);
