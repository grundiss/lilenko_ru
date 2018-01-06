import React from "react";
import Page from "client/layout/page";
import Icon from "client/components/icon";
import Section from "client/components/section";
import cx from "classnames";

import style from "./styles.css";
import sectionStyle from "client/components/section.css";

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

const whatToDo = {
  book: "Издать книгу",
  "camera-retro": "Снять фильм",
  bank: "Поставить спектакль",
  calendar: "Провести мероприятие",
  child: "Начать свое дело",
  "handshake-o": "Помочь нуждающимся",
  "shopping-cart": "Произвести новый продукт",
};

export default () => (
  <Page>
    <Banner />

    <Section className={style.whatToDo} title="Что можно сделать с помощью краудфандинга">
      <div className={style.whatToList}>
        {Object.entries(whatToDo).map(([icon, caption], i) => (
          <div className={style.whatToItem} key={i}>
            <Icon name={icon} size="2x" className={style.whatToItemIcon} />
            {caption}
          </div>
        ))}
      </div>
    </Section>

    <Section title="Как работает краудфандинг">
      <p>
        Если точно перевести с английского слово crowdfunding, то получим «финансирование толпой».
        Слово «толпа» мы воспринимаем как нечто негативное, поэтому в самый близкий по смыслу
        перевод слова crowdfunding будет «в складчину». С этим мы хорошо знакомы, и задача скинуться
        на благое дело вопросов, вроде бы, не вызывает.
      </p>
      <p>
        Что есть краудфандинг по сути?{" "}
        <a href="/articles/#how-crowdfunding-works">Перейти к статье</a>
      </p>
    </Section>

    <Section className={style.feedBack} title="Что говорят обо мне авторы проектов">
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
    </Section>

    <div className={cx(style.promo, sectionStyle.section)}>
      <div className={style.promoColumn}>
        <div className={sectionStyle.sectionHeader}>Консалтинг</div>
        <p>
          Есть такая старая шутка: "Кто не умеет делать - учит". Именно по этому многие не доверяют
          консультантам. В моем случае консультации будущих авторов начались через два года
          практическое работы, созданию и ведению крауд-проектов на самых разных интернет-
          площадках. Только после обширной практики я начала консультировать и обучать. На мой
          взгляд хороший учитель может не иметь полных практических навыков, но консультант высокого
          класса это всегда большая предварительная работа по конкретным проектам.
        </p>
        <p>
          На сегодня очень многие авторы, после консультации, сделали свои успешные проекты и
          собрали серьезные суммы с помощью краудфандинга. Среди них: Яшка Казанова, Мариэтта
          Цигаль-Полищук, Диана Арбенина и многие авторы, чьи имена и фамилии вам ничего не скажут.
        </p>
        <p>
          Консультация поможет вам не сделать всех тех ошибок, которые за 4 года мы с авторами
          делали и исправляли. На консультации мы с вами разберем именно вашу идею и ваш будущий
          проект, вы сможетет задать мне сколько угодно вопросов и получить квалифицированные ответы
          из четырехлетней практики.
        </p>
        <p>
          <a href="/consulting/">Подробнее о консалтинге</a>
        </p>
      </div>
      <div className={style.promoColumn}>
        <div className={sectionStyle.sectionHeader}>Книга</div>
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
