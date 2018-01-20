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
      <TheGallery
        photos={[
          {
            src: "/assets/18557410_1464219270265080_2683031297162435714_n.jpg",
            width: 960,
            height: 640,
          },
          {
            src: "/assets/18698016_1469973053023035_1556575143539679152_n.jpg",
            width: 960,
            height: 640,
          },
          {
            src: "/assets/18698526_1469972186356455_3393573135673060264_n.jpg",
            width: 960,
            height: 640,
          },
          {
            src: "/assets/18739740_1469980449688962_6610982510698125336_n.jpg",
            width: 960,
            height: 640,
          },
          {
            src: "/assets/18740809_1469972003023140_6159934801412263190_n.jpg",
            width: 960,
            height: 640,
          },
          {
            src: "/assets/18765698_1469972719689735_8294837882728339668_n.jpg",
            width: 960,
            height: 640,
          },
        ]}
      />
    </div>
    <Section
      title="Отзывы участников конференции 2017 года"
      className={cx(style.section, style.section2)}
    >
      <div className={cx("clearfix", style.feedback)}>
        <div className={style.item}>
          <h4>Анна Клепиковская</h4>
          <div>
            Владелец отеля" Голубино" в Архангельской области, автор краудфандингового проекта
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/z80IIGotZQA"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
        <div className={style.item}>
          <h4>Анна Таджимуратова</h4>
          <div>Генеральный директор краудфандинговой платформы Казахстана</div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QvvNRYkB1q0"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Section>
  </Page>
);
