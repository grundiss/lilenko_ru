import React from "react";
import Page from "client/layout/page";
import Section from "client/components/section";
import Youtube from "client/components/youtube";
import SubscribeOriginal from "client/components/subscribe";

import style from "./styles.css";

const Subscribe = props => (
  <SubscribeOriginal
    invitationText={
      <React.Fragment>
        Оставьте свой email<br />и мы оповестим вас о старте курса
      </React.Fragment>
    }
    apiUrl="/json/subsribe-to-updates/"
    {...props}
  />
);

export default () => (
  <Page>
    <Section title="Школа">
      <Youtube className={style.intro} id="dQw4w9WgXcQ" />
      <div className={style.optionsTableWrapper}>
        <table className={style.optionsTable}>
          <thead>
            <tr>
              <th className={style.optionHeader}>Базовый курс</th>
              <th className={style.optionHeader}>Продвинутый курс</th>
              <th className={style.optionHeader}>
                Продвинутый курс с дальнейшей поддержкой проекта
              </th>
            </tr>
            <tr>
              <th className={style.optionShortDescription}>от нуля до понимания</th>
              <th className={style.optionShortDescription}>
                вы очень хотите превратить идею в успешный проект
              </th>
              <th className={style.optionShortDescription}>&#160;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.optionLongDescription}>
                <ul>
                  <li>40 видео – уроков: 4 блока по 10 уроков</li>
                  <li>Тестирование после окончания курса</li>
                  <li>
                    Скайп-консультация продолжительностью 1 час, ответы на вопросы по результатам
                    прохождения курса и тестирования
                  </li>
                  <li>
                    Электронная книга Ирины Лиленко-Карелиной «Краудфандинг. Как собрать деньги на
                    свою идею»
                  </li>
                </ul>
              </td>
              <td className={style.optionLongDescription}>
                <ul>
                  <li>60 видео-уроков: 6 блоков по 10 уроков</li>
                  <li>Тестирование после каждого блока с пояснениями</li>
                  <li>Индивидуальное творческое задание с проверкой и комментариями</li>
                  <li>
                    Скайп-консультация продолжительностью 2 час, ответы на вопросы по результатам
                    прохождения курса и тестирования, сделанного творческого задания
                  </li>
                  <li>Проверка подготовленного крауд-проекта перед публикацией на площадке</li>
                  <li>
                    Бумажная книга Ирины Лиленко-Карелиной «Краудфандинг. Как собрать деньги на свою
                    идею»
                  </li>
                </ul>
              </td>
              <td className={style.optionLongDescription}>
                <ul>
                  <li>50 видео-уроков продвинутого формата, с разбором кейсов успешных авторов</li>
                  <li>
                    Индивидуальное творческое задание с проверкой, комментариями и обсуждением в
                    формате скайп-консультации
                  </li>
                  <li>Три скайп-консультации по оформлению и продвижению вашего крауд-проекта</li>
                  <li>Проверка подготовленного крауд -проекта перед публикацией на площадке</li>
                  <li>
                    Бумажная книга Ирины Лиленко-Карелиной «Краудфандинг. Как собрать деньги на свою
                    идею»
                  </li>
                  <li>
                    Сопровождение проекта в режиме реального времени в формате 4-х
                    скайп-консультаций в формате «еженедельный разбор полета»
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className={style.optionSubscribe}>
                Старт курса 15 марта, продолжительность 1 месяц
                <br />
                Группа не более 7 человек
                <br />
                <Subscribe id="base" />
              </td>
              <td className={style.optionSubscribe}>
                Старт курса 15 марта, продолжительность 1,5 месяца
                <br />
                Группа не более 5 человек
                <br />
                <Subscribe id="advanced" />
              </td>
              <td className={style.optionSubscribe}>
                Старт курса 1 июня, продолжительность 2,5 месяца
                <br />
                Группа не более 5 человек
                <br />
                <Subscribe id="advanced-plus" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  </Page>
);
