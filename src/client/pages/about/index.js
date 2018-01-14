import React from "react";
import Page from "client/layout/page";
import Section from "client/components/section";

import style from "./styles.css";

export default () => (
  <Page>
    <Section title="Обо мне">
      <div className={style.twoCols}>
        <div className={style.twoColsRight}>
          <div className={style.media}>
            <img src="/assets/about.jpg" />
          </div>
        </div>
        <div className={style.twoColsLeft}>
          <p>
            Кто я, Ирина Лиленко-Карелина, и почему мне понятен краудфандинг. Прежде всего, потому,
            что:
          </p>
          <ul>
            <li>занимаюсь маркетингом 20 лет, из которых 15 лет ИТ-маркетингом;</li>
            <li>практический опыт в краудфандинге – 5 лет</li>
          </ul>
          <p>За эти 5 лет:</p>
          <ul>
            <li>28 проектов проконсультировала, из них 20 успешных;</li>
            <li>Придумала, организовала и провела 3 практические конференции по краудфандингу.</li>
          </ul>
          <p>Написала книгу-учебник по краудфандингу.</p>
          <p>
            В дополнение к этому: сотня публичных выступлений, полсотни интервью и комментариев для
            СМИ.
          </p>
        </div>
      </div>
    </Section>
  </Page>
);
