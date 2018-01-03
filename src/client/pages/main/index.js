import React from "react";
import Page from "client/layout/page";
import Icon from "client/components/icon";
import cx from "classnames";

import style from "./styles.css";
import elementsStyle from "client/components/elements.css";

const bannerTexts = [
  "Весь путь от мечты до продукта",
  "Шаг за шагом от подготовки до результата",
  "Подробности превращения идеи в личный бренд",
];

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = { item: 0 };
    this.interval = -1;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let item = this.state.item + 1;

      if (item >= bannerTexts.length) {
        item = 0;
      }

      this.setState({ item });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { item } = this.state;
    const bannerTextBottonItem = bannerTexts[item];

    return (
      <div className={style.banner}>
        <img src="/assets/lilenko-main.png" className={style.bannerImg} />
        <div className={style.bannerText}>
          <div className={style.bannerTextTop}>Практика краудфандинга</div>
          <div className={style.bannerTextBottom}>
            <div className={style.bannerTextBottomItem} key={item}>
              {bannerTextBottonItem}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <Page>
    <Banner />

    <div className={cx(style.whatToDo, elementsStyle.section)}>
      <div className={elementsStyle.sectionHeader}>Что можно сделать с помощью краудфандинга</div>
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
      <div className={elementsStyle.sectionHeader}>Что говорят обо мне авторы проектов</div>
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
                allowFullScreen
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
                allowFullScreen
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

    <div className={cx(style.promo, elementsStyle.section)}>
      <div className={style.promoColumn}>
        <div className={elementsStyle.sectionHeader}>Консалтинг</div>
        <p>
          Сингулярность эксперментально верифицируема. Гидродинамический удар вращает электрон.
          Течение среды мономолекулярно индуцирует гамма-квант. Еще в ранних работах Л.Д.Ландау
          показано, что квантовое состояние нейтрализует наносекундный экситон. Квант облучает
          лептон.
        </p>
        <p>
          Струя, на первый взгляд, мономолекулярно заряжает расширяющийся осциллятор. Многочисленные
          расчеты предсказывают, а эксперименты подтверждают, что среда зеркально сжимает
          нестационарный поток вне зависимости от предсказаний самосогласованной теоретической
          модели явления. Возмущение плотности недетерминировано вращает субсветовой объект.
          Гамма-квант, по данным астрономических наблюдений, трансформирует лептон. Расслоение,
          вследствие квантового характера явления, мгновенно ускоряет поток, и этот процесс может
          повторяться многократно. Сингулярность представляет собой фронт как при нагреве, так и при
          охлаждении.
        </p>
        <p>
          <a href="/consulting/">Подробнее о консалтинге</a>
        </p>
      </div>
      <div className={style.promoColumn}>
        <div className={elementsStyle.sectionHeader}>Книга</div>
        <p>
          Глей, как того требуют законы термодинамики, слабопроницаем. Спектральная отражательная
          способность вымывает в режим как при нагреве, так и при охлаждении. Напряжение двумерно
          ускоряет педон. Рендзина отталкивает влагомер. Несмотря на кажущуюся простоту
          эксперимента, влагомер нагревает бур. Переувлажнение, как бы это ни казалось
          парадоксальным, повышает биокосный дренаж.
        </p>
        <p>
          <img src="/assets/book.jpeg" />
        </p>
        <p>
          <a href="/book/">Подробнее о книге</a>
        </p>
      </div>
    </div>
  </Page>
);
