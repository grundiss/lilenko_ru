import React from "react";
import Icon from "client/components/icon";
import { ShareButtons } from "react-share";
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

class ShareBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    if (!this.state.loaded) return null;

    const url = (window && window.location.href) || "http://lilenko.ru";

    return (
      <div className={fStyle.social}>
        Поделитесь полезной информацией с друзьями!
        <br />
        <ShareButtons.FacebookShareButton url={url}>
          <span className={fStyle.socialButton}>
            <Icon name="facebook-official" />
          </span>
        </ShareButtons.FacebookShareButton>{" "}
        <ShareButtons.GooglePlusShareButton url={url}>
          <span className={fStyle.socialButton}>
            <Icon name="google-plus" />
          </span>
        </ShareButtons.GooglePlusShareButton>{" "}
        <ShareButtons.TwitterShareButton url={url}>
          <span className={fStyle.socialButton}>
            <Icon name="twitter" />
          </span>
        </ShareButtons.TwitterShareButton>{" "}
        <ShareButtons.TelegramShareButton url={url}>
          <span className={fStyle.socialButton}>
            <Icon name="telegram" />
          </span>
        </ShareButtons.TelegramShareButton>{" "}
        <ShareButtons.WhatsappShareButton url={url}>
          <span className={fStyle.socialButton}>
            <Icon name="whatsapp" />
          </span>
        </ShareButtons.WhatsappShareButton>{" "}
        <ShareButtons.VKShareButton url={url}>
          <span className={fStyle.socialButton}>
            <Icon name="vk" />
          </span>
        </ShareButtons.VKShareButton>{" "}
        <ShareButtons.OKShareButton url={url}>
          <span className={fStyle.socialButton}>
            <Icon name="odnoklassniki" />
          </span>
        </ShareButtons.OKShareButton>
      </div>
    );
  }
}

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
        <ShareBlock />
      </div>
    </footer>
  </div>
);
