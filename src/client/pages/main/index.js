import React from "react";
import Page from "client/layout/page";
import Icon from "client/components/icon";

import style from "./styles.css";

export default () => (
  <Page>
    <div className={style.banner}>
      <img src="/assets/lilenko.png" className={style.bannerImg} />
      <div className={style.bannerText}>
        <div className={style.bannerTextTop}>Жили у бабуси</div>
        <div>два веселых гуся</div>
      </div>
    </div>
    Главная страница...
    <Icon name="rocket" />
  </Page>
);
