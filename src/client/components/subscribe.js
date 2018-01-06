import React from "react";
import Page from "client/layout/page";
import Section from "client/components/section";
import Icon from "client/components/icon";
import axios from "axios";

import style from "./subscribe.css";

export default class Subscribe extends React.Component {
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
    const email = this.state.value;
    const apiUrl = this.props.apiUrl;

    if (email) {
      this.setState({ state: "sending" });
      axios
        .post(apiUrl, {
          email,
          courseType: this.props.id,
        })
        .then(() => this.setState({ state: "success" }))
        .catch(() => this.setState({ state: "error" }));
    } else {
      this.setState({ state: "error" });
    }
  }

  setValue({ target: { value } }) {
    this.setState({ value, state: "form" });
  }

  render() {
    const {
      invitationText,
      successText = (
        <React.Fragment>
          <Icon name="check" /> Спасибо за подписку!
        </React.Fragment>
      ),
      errorText = "Произошла ошибка. Пожалуйста, попробуйте позже.",
    } = this.props;

    return (
      <React.Fragment>
        {this.state.state === "success" ? (
          <div className={style.subscriptionSuccess}>{successText}</div>
        ) : (
          <React.Fragment>
            {invitationText}
            <br />
            <nobr>
              <input type="text" value={this.state.value} onChange={this.setValue} />
              <button onClick={this.send} disabled={this.state.state === "sending"}>
                Подписаться
              </button>
            </nobr>
          </React.Fragment>
        )}
        {this.state.state === "error" && <div className={style.subscriptionError}>{errorText}</div>}
      </React.Fragment>
    );
  }
}
