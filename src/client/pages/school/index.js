import React from "react";
import Page from "client/layout/page";
import Section from "client/components/section";

import style from "./styles.css";

const Subscribe = ({ id }) => (
  <React.Fragment>
    Оставьте свой email<br />и мы оповестим вас о старте курса
    <br />
    <nobr>
      <input type="text" />
      <button onClick={() => alert(id)}>Подписаться</button>
    </nobr>
  </React.Fragment>
);

export default () => (
  <Page>
    <Section title="Школа">
      <p className={style.intro}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
        />
      </p>
      <div>
        <table className={style.optionsTable}>
          <tr>
            <th className={style.optionHeader}>Базовый курс</th>
            <th className={style.optionHeader}>Продвинутый курс</th>
            <th className={style.optionHeader}>Продвинутый курс с дальнейшей поддержкой проекта</th>
          </tr>
          <tr>
            <th className={style.optionShortDescription}>от нуля до понимания</th>
            <th className={style.optionShortDescription}>
              вы очень хотите превратить идею в успешный проект
            </th>
            <th className={style.optionShortDescription}>TODO</th>
          </tr>
          <tr>
            <td className={style.optionLongDescription}>
              <ul>
                <li>40 видео – уроков: 4 блока по 10 уроков</li>
                <li>Тестирование после каждого блока с пояснениями</li>
                <li>
                  Электронная книга Ирины Лиленко – Карелиной «Краудфандинг. Как собрать деньги на
                  свою идею»
                </li>
              </ul>
            </td>
            <td className={style.optionLongDescription}>
              <ul>
                <li>60 видео-уроков: 6 блоков по 10 уроков</li>
                <li>Индивидуальное творческое задание с проверкой и комментариями</li>
                <li>
                  Бумажная книга Ирины Лиленко – Карелиной «Краудфандинг. Как собрать деньги на свою
                  идею»
                </li>
              </ul>
            </td>
            <td className={style.optionLongDescription}>TODO</td>
          </tr>
          <tr>
            <td className={style.optionSubscribe}>
              <Subscribe id="base" />
            </td>
            <td className={style.optionSubscribe}>
              <Subscribe id="advanced" />
            </td>
            <td className={style.optionSubscribe}>
              <Subscribe id="advanced-plus" />
            </td>
          </tr>
        </table>
      </div>
    </Section>
  </Page>
);
