import React from "react";
import Page from "client/layout/page";
import Icon from "client/components/icon";

import style from "./styles.css";

export default () => (
  <Page>
    <div className={style.banner}>
      <img src="/assets/lilenko-main.png" className={style.bannerImg} />
      <div className={style.bannerText}>
        <div className={style.bannerTextTop}>Практика краудфандинга</div>
        <div>изнутри и снаружи</div>
      </div>
    </div>
    Главная страница...
    <Icon name="rocket" />
  </Page>
);
