import React from "react";
import Page from "client/layout/page";
import Icon from "client/components/icon";
import cx from "classnames";

import style from "./styles.css";
import elementsStyle from "client/components/elements.css";

export default () => (
  <Page>
    <div className={style.banner}>
      <img src="/assets/lilenko-main.png" className={style.bannerImg} />
      <div className={style.bannerText}>
        <div className={style.bannerTextTop}>Практика краудфандинга</div>
        <div>изнутри и снаружи</div>
      </div>
    </div>

    <div className={cx(style.whatToDo, elementsStyle.section)}>
      <div className={style.whatToDoTitle}>Что можно сделать с помощью краудфандинга</div>
      <div className={style.whatToList}>
        <div className={style.whatToItem}>
          <Icon name="paw" className={style.whatToItemIcon} />
          Издать книгу
        </div>
        <div className={style.whatToItem}>
          <Icon name="paw" className={style.whatToItemIcon} />Снять фильм
        </div>
        <div className={style.whatToItem}>
          <Icon name="paw" className={style.whatToItemIcon} />Поставить спектакль
        </div>
        <div className={style.whatToItem}>
          <Icon name="paw" className={style.whatToItemIcon} />Провести мероприятие
        </div>
        <div className={style.whatToItem}>
          <Icon name="paw" className={style.whatToItemIcon} />Начать свое дело
        </div>
        <div className={style.whatToItem}>
          <Icon name="paw" className={style.whatToItemIcon} />Помочь нуждающимся
        </div>
        <div className={style.whatToItem}>
          <Icon name="paw" className={style.whatToItemIcon} />Произвести новый продукт
        </div>
      </div>
    </div>

    <div className={cx(style.feedBack, elementsStyle.section)}>
      <div className={style.feedBackTitle}>Что говорят обо мне авторы проектов</div>
      <div className={style.feedBackList}>
        <div className={style.feedBackColumn}>
          <div className={style.feedBackItem}>
            <div className={style.feedBackItemTitle}>
              Мариэтта Цигаль-Полищук,
              <br />
              Президент благотворительного фонда «Я не один»
            </div>
            <div className={style.feedBackItemMedia}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen
              />
            </div>
          </div>
          <div className={style.feedBackItem}>
            <div className={style.feedBackItemTitle}>
              Мариэтта Цигаль-Полищук,
              <br />
              Президент благотворительного фонда «Я не один»
            </div>
            <div className={style.feedBackItemMedia}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen
              />
            </div>
          </div>
        </div>
        <div className={style.feedBackColumn}>
          <div className={style.feedBackItem}>
            <div className={style.feedBackItemTitle}>
              Яшка Казанова,
              <br />
              поэт, автор книги «Бессердечная мускулатура»
            </div>
            <div className={style.feedBackItemMedia}>
              <img src="/assets/kazanova.jpg" width="560" />
            </div>
            <div className={style.feedBackItemText}>
              <p>
                В связи с этим нужно подчеркнуть, что эффект "вау-вау" регрессийно образует глубокий
                рок-н-ролл 50-х. Векторно-зеркальная синхронность, согласно традиционным
                представлениям, свободна. Арпеджио, согласно традиционным представлениям,
                выстраивает midi-контроллер. Ретро трансформирует громкостнoй прогрессийный период.
                Еще Аристотель в своей «Политике» говорил, что музыка, воздействуя на человека,
                доставляет «своего рода очищение, то есть облегчение, связанное с наслаждением»,
                однако тетрахорд неравномерен. Векторно-зеркальная синхронность диссонирует паузный
                тетрахорд.
              </p>
              <p>
                Асинхронное ритмическое поле последовательно. В связи с этим нужно подчеркнуть, что
                крещендирующее хождение продолжает сет. Мономерная остинатная педаль изящно
                продолжает цикл, таким образом объектом имитации является число длительностей в
                каждой из относительно автономных ритмогрупп ведущего голоса.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.feedBackMore}>
        <a href="/feedback/">Смотреть все отзывы</a>
      </div>
    </div>
  </Page>
);
