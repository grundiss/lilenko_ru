import React from "react";
import Page from "client/layout/page";
import Icon from "client/components/icon";
import Section from "client/components/section";
import Youtube from "client/components/youtube";
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
    }, 4500);
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
        {Object.entries(whatToDo).map(([icon, caption], i, { length }) => (
          <div
            className={cx(style.whatToItem, { [style.whatToItemDropOnMobile]: i === length - 1 })}
            key={i}
          >
            <Icon name={icon} size="2x" className={style.whatToItemIcon} />
            {caption}
          </div>
        ))}
      </div>
    </Section>

    <Section title="Как работает краудфандинг">
      <p>
        Если точно перевести с английского слово crowdfunding, то получим «финансирование толпой».
        Слово «толпа» мы воспринимаем как нечто негативное, поэтому самый близкий по смыслу перевод
        слова crowdfunding будет «в складчину». С этим мы хорошо знакомы, и задача скинуться на
        благое дело вопросов, вроде бы, не вызывает.
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
            <h4 className={style.feedBackItemTitle}>
              Мариэтта Цигаль-Полищук,
              <br />
              Президент благотворительного фонда «Я не один»
            </h4>
            <Youtube id="8rOs6-OTYkY" className={style.feedBackItemMedia} />
          </div>
          <div className={style.feedBackItem}>
            <h4 className={style.feedBackItemTitle}>
              Шаши Мартынова,
              <br />
              автор восьми краудфандинговых проектов. Переводчик, редактор
            </h4>
            <div className={style.feedBackItemText}>
              <p>
                С Ирой мы в 2015-м вместе вели небольшой по сумме, но бодрый и живой крауд-проект —
                подписку на издание маленького романа Спайка Миллигэна "Пакун". К тому времени мы
                обе уже успели съесть собаку-другую на краудфандинге, Ира взяла на себя часть
                сетевого продвижения проекта и кое-какие организационные задачи. Легко и приятно
                иметь дело с человеком и сходного темперамента, и похожих идейных кренов, и уверенно
                компетентным и увлеченным. Всё получилось, проект состоялся, сумму мы перебрали еще
                до заявленной даты финиша, до сих пор с удовольствием вспоминаем, с каким аллюром и
                многими смехами получилось то приключение.
              </p>
            </div>
          </div>
        </div>
        <div className={style.feedBackColumn}>
          <div className={style.feedBackItem}>
            <h4 className={style.feedBackItemTitle}>
              Яшка Казанова,
              <br />
              поэт, автор книги «Бессердечная мускулатура»
            </h4>
            <div className={style.feedBackItemMedia}>
              <img src="/assets/kazanova.jpg" />
            </div>
            <div className={style.feedBackItemText}>
              <p>
                С Лиленкой у меня было незабываемое. Первый краудфандинг. Без Лиленки его попросту
                не было бы. Даже намека и движения в ту сторону бы не наблюдалось. Но пришла
                Лиленка, и сразу стало понятно, что с подводной лодки никуда, но капитан знает, что
                делает. И капитану не все равно. Небезразличие - это Лиленка и есть. И искренность
                еще. Лиленка каким-то образом умудряется не наступать на грабли, а гулять по ним,
                обжигаясь постоянно, но не утрачивая честности как основополагающей ее, лиленкиной,
                составляющей.
              </p>
              <p>
                А еще Лиленка умеет успокаивать. И подсказывать. И показывать. Но при этом не
                затискивать в ограничения жанра. Лиленка в краудфандинговых проектах, как будто
                мама, но мама друга - клевая, умная, с которой можно поделиться всем и получить не
                оплеуху, а совет.
              </p>
              <p>
                Поэтому очень хорошо, что Лиленка собрала все свои знания в кучу и написала книгу.
                После прочтения захочется найти в себе этакое, придумать вечный двигатель и
                запустить свой краудфандинговый проект. А совет у Лиленки спрашивать все равно
                придется, но хотя бы не каждые 5 минут.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <div className={cx(style.promo, sectionStyle.section)}>
      <div className={style.promoColumn}>
        <div className={sectionStyle.sectionHeader}>Консалтинг</div>
        <p>
          Есть такая старая шутка: "Кто не умеет делать - учит". Именно поэтому многие не доверяют
          консультантам. В моем случае консультации будущих авторов начались через два года
          практическое работы, созданию и ведению крауд-проектов на самых разных интернет-
          площадках. Только после обширной практики я начала консультировать и обучать. На мой
          взгляд хороший учитель может не иметь полных практических навыков, но консультант высокого
          класса это всегда большая предварительная работа по конкретным проектам.
        </p>
        <p>
          На сегодня очень многие авторы, после консультации, сделали свои успешные проекты и
          собрали серьезные суммы с помощью краудфандинга. Среди них: Яшка Казанова, Мариэтта
          Цигаль-Полищук, Диана Арбенина и многие другие, чьи имена и фамилии вам ничего не скажут.
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
          Эта книга рождалась два года. Первая попытка написать и издать учебник по краудфандингу
          была еще в 2015 году. И хорошо, что тогда не получилось. Потому что опыт двух лет в крауде
          и опыт четырех — это разный опыт. Я рада, что только после десятка проектов для книги
          нашелся издатель и очень благодарна тем, кто в пятнадцатом году делать книгу побоялся. И
          это правилльно. Тогда краудфндинг был слишком юн и мало кому понятен и известен, хотя бы
          как термин.
        </p>
        <p>
          Сейчас совсем другое дело. Надо заметить, что проектов на площадках стало больше, но и
          количество неудавшихся проектов тоже возросло. Это и обидно, потому что часто даже
          полезные и интересные проекты не находят финансирования только потому, что автор не
          владеет краудфандингом как инструментом. Учебник нужен и полезен тем, кто хочет
          гарантированного привлечения финансирования.
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
