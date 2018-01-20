import React from "react";
import Page from "client/layout/page";
import Section from "client/components/section";

import style from "./styles.css";

export default () => (
  <Page>
    <div className={style.twoCols}>
      <div className={style.twoColsRight}>
        <div className={style.media}>
          <img src="/assets/about.jpg" />
        </div>
      </div>
      <div className={style.twoColsLeft}>
        <Section title="Обо мне">
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
        </Section>
        <Section title="В СМИ">
          <ul>
            <li>
              <img
                src="https://tjournal.ru/static/build/tjournal.ru/favicons/apple-touch-icon-180x180.png"
                width="16"
                height="16"
              />
              &#160;
              <a href="https://tjournal.ru/55305-crowdmap-interview" target="_blank">
                Почему мошенники не любят краудфандинг
              </a>
            </li>
            <li>
              <img
                src="https://s.rbk.ru/v8_top_static/common/common-8.5.37/images/favicon.png"
                width="16"
                height="16"
              />
              &#160;
              <a
                href="http://tv.rbc.ru/archive/lidery_rynka/582ee0b29a7947ebde81cd7a"
                target="_blank"
              >
                Краудфандинг: Kickstarter vs Indiegogo
              </a>
            </li>
            <li>
              <a
                href="http://www.radiorus.ru/brand/episode/id/60510/episode_id/1458453/"
                target="_blank"
              >
                Что такое краудфандинг и с чем его едят?
              </a>
            </li>
            <li>
              <a
                href="http://crowdsourcing.ru/article/irina_lilenko_ceo_kraudfandingovoj_platformy_srowdrepublic_v_rossii_eshhe_ne_ovladeli_masterstvom"
                target="_blank"
              >
                В России еще не овладели мастерством использования новых Краудфандинговых бизнес-
                инструментов
              </a>
            </li>
            <li>
              <a href="http://lidersk11.ru/video/oMF2stMGNmg" target="_blank">
                Краудсорсинг и Краудфандинг в России и мире
              </a>
            </li>
            <li>
              <a href="https://player.fm/series/series-107527" target="_blank">
                Решили-Сделали!
              </a>
            </li>
            <li>
              <a
                href="https://econet.ru/articles/64454-kak-sobrat-dengi-na-zapusk-svoego-biznesa"
                target="_blank"
              >
                Как собрать деньги на запуск своего бизнеса
              </a>
            </li>
            <li>
              <a href="https://www.espresso-id.ru/authors_column/5727.html" target="_blank">
                Поколение кидалтов
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  </Page>
);
