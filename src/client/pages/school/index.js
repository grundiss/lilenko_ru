import React from "react";
import Page from "client/layout/page";
import Section from "client/components/section";
import axios from "axios";

import style from "./styles.css";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      state: "form", // 'sending', success', 'error'
    };

    this.send = this.send.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  send() {
    this.setState({ state: "sending" });
    axios
      .post("/json/subsribe-to-school-updates/", {
        email: this.state.value,
        courseType: this.props.id,
      })
      .then(() => this.setState({ state: "success" }))
      .catch(() => this.setState({ state: "error" }));
  }

  setValue({ target: { value } }) {
    this.setState({ value });
  }

  render() {
    const id = this.props.id;

    return (
      <React.Fragment>
        {this.state.state === "success" ? (
          <div className={style.subscriptionSuccess}>Спасибо за подписку!</div>
        ) : (
          <React.Fragment>
            Оставьте свой email<br />и мы оповестим вас о старте курса
            <br />
            <nobr>
              <input type="text" value={this.state.value} onChange={this.setValue} />
              <button onClick={this.send} disabled={this.state.state === "sending"}>
                Подписаться
              </button>
            </nobr>
          </React.Fragment>
        )}
        {this.state.state === "error" && (
          <div className={style.subscriptionError}>
            Произошла ошибка. Пожалуйста, попробуйте позже.
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default () => (
  <Page>
    <Section title="Школа">
      <p className={style.intro}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
        />
      </p>
      <div>
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
              <th className={style.optionShortDescription}>TODO</th>
            </tr>
          </thead>
          <tbody>
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
                    Бумажная книга Ирины Лиленко – Карелиной «Краудфандинг. Как собрать деньги на
                    свою идею»
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
          </tbody>
        </table>
      </div>
    </Section>
  </Page>
);
