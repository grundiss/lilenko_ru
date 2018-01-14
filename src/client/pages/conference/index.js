import React from "react";
import Page from "client/layout/page";
import Section from "client/components/section";
import Subscribe from "client/components/subscribe";
import TheGallery from "client/components/gallery";
import cx from "classnames";

import style from "./styles.css";

export default () => (
  <Page>
    <Section title="Конференция" className={cx(style.section, "clearfix")}>
      <p>
        В 2018 году состоится четвертая конференция по краудфандингу. Особенность этого мероприятия
        в том, что мы приглашаем в качестве докладчиков только реальных авторов проектов, то есть
        практиков этой отрасли. На конференции никогда не выступают теоретики или эксперты, которые
        умеют только красиво говорить. Наши докладчики умеют красиво делать, каждый из них уже делал
        проект "ручками", столкнулся с проблемами, сделал некоторое количество ошибок и придумал
        свои крауд - лайфхаки.
      </p>
      <div className={style.email}>
        <Subscribe
          invitationText="Подпишитесь на обновления о конфернеции"
          id="conf-2018"
          apiUrl="/json/subsribe-to-updates/"
        />
      </div>
      <p>
        А еще мы делаем максимально возможным общение между участниками, создаем комьюнити, которое
        общается между собой и после конференции, придумывает и реализует совместные проекты и
        поддерживает друг друга. Кроме полезной практической информации вы получите несколько
        десятков единомышленников, которые могут стать вашими потенциальными патнерами и бекерами в
        ваших проектах.
      </p>
      <ul className={style.list}>
        <li>
          <a href="http://2014.crowdall.ru" target="_blank">
            Конференция 2014 года
          </a>
        </li>
        <li>
          <a href="http://2015.crowdall.ru" target="_blank">
            Конференция 2015 года
          </a>
        </li>
        <li>
          <a href="http://2017.crowdall.ru" target="_blank">
            Конференция 2017 года
          </a>
        </li>
      </ul>
      <p>
        Приведу пример: на конференции 2017 года, в качестве эксперта была приглашена актриса театра
        и кино Мариэтта Цигаль-Полищук. Маша рассказывала о том, как строить коммуникацию с лидерами
        мнений. Через месяц после конференции фонд "Я не один", который возглавляет Мариэтта начал
        сбор средств, с помощью краудфандинга, на свой ежегодный театральный фестиваль для детей.
        Проект Маши деньгами поддержали многие участники конферении, а позднее уже Мариэтта, по
        просьбе одного из участников, сделала видеобращение для воронежского театрального проекта.
        Яркий пример нетворкинга в действии.
      </p>
      <p>
        И вы, после конференции познакомитесь и даже подружитесь с другими участниками и сможете
        расчитывать на их помощь. Если вам интересно прийти на наше меропяриятие в 2018 года,
        оставьте свой email.
      </p>
    </Section>
    <div className="clearfix">
      <TheGallery />
    </div>
  </Page>
);
