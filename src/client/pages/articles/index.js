import React from "react";
import Page from "client/layout/page";
import Icon from "client/components/icon";
import Section from "client/components/section";

import style from "./styles.css";

export default () => (
  <Page>
    <Section title="Статьи" className={style.article}>
      На всех сайтах, у всех экспертов есть кучка статей. И кажется, их никто не читает. А если
      читает, но мельком. То ли скучно написаны, то ли лениво читать. А вот зря, если лениво.
      Познакомиться с авторскими мыслями полезно, как минимум для решения двух задач: разобраться в
      тематике и/или понять, насколько эксперт в теме, и оценить уровень его экспертизы. Все статьи,
      выложенные на этом сайте написаны в разное время и по разным поводам, но все они о тех или
      иных сторонах краудфандинга.
    </Section>

    <Section
      title="Как работает краудфандинг"
      id="how-crowdfunding-works"
      className={style.article}
    >
      <p>
        Если точно перевести с английского слово crowdfunding, то получим «финансирование толпой».
        Слово «толпа» мы воспринимаем как нечто негативное, поэтому самый близкий по смыслу перевод
        слова crowdfunding будет «в складчину». С этим мы хорошо знакомы, и задача скинуться на
        благое дело вопросов, вроде бы, не вызывает.
      </p>
      <div className={style.pic}>
        <img src="/assets/stending.jpg" />
      </div>
      <p>
        Что есть краудфандинг по сути? Всем известна замусоленная поговорка о том, что лучше дать
        человеку удочку, чем накормить рыбой. На самом деле не каждый умеет управляться с удочкой и
        не каждому это дело по душе. Лучше скинутся и купить удочку одному рыбаку, которому быть
        рыбаком в кайф. Тогда он всех накормит рыбой. А рыбаки, в свою очередь, поддержат пекаря и
        пивовара, которые обеспечат их хлебом и пивом, а все вместе поддержат музыканта, который
        напишет им хорошую песню.
      </p>
      <p>
        Краудфандинг - это когда на одну хорошую идею сбрасывается мелкими суммами большое
        количество людей. И, что важно, обязательно каждый поддержавший идею получает взамен
        какое-то вознаграждение. Если вы делаете фильм, это может быть упоминание в титрах, участие
        в массовке, афиша с автографом режиссера, костюмы героев, приглашение на премьеру. Если
        народ скидывается на производство какого-то продукта, например, новый тип противоугонного
        устройства для автомобилей, то каждый именно это устройство и получает. Фактически это
        предоплата продукта, который через указанный в проекте промежуток времени будет
        предоставлен. Такой механизм хорошо понятен тем, кто когда-либо участвовал в подписке на
        издание книг. В советское время такие книги так и назывались – подписные издания. Вот и в
        крудфандинге в абсолютном большинстве случаев идет оплата будущего продукта или будущего
        участия в интересном действии. Но не обязательно так. Могут быть вознаграждения совершенно
        неожиданные. Посетите сайт – платформу, где публикуются краудфандинговые проекты, и вы
        увидите, какие формы вознаграждений там предлагаются (planeta.ru и boomstarter.ru).{" "}
      </p>
      <p>
        Лучше всего у нас пока работают проекты «со слезой»: больные бабушки, дети, котики и
        собачки, решение каких-то социальных задач. Благотворительные проекты собирают больше,
        потому что это привычно и понятно. Люди пока с трудом соглашаются поддерживать бизнес -
        проекты. Они думают примерно так:
      </p>
      <p className={style.q}>
        «Я внесу свои 200 рублей, и человек на моих деньгах ка-а-ак разбогатеет, ка-а-ак станет
        олигархом!"
      </p>
      <p>
        Но постепенно культура поддержки бизнес-проектов (как правило – социальных) приходит и к
        нам, бизнес-проекты поддерживают, и они работают на всеобщее благо. Конечно, поддержку
        находят не все. Потому что в России успех краудфандинга сильно зависит от репутации автора
        проекта. В Америке практика краудфандинга показывает, что для них главное - идея, потом
        личность автора. У нас наоборот, на первом месте стоит личность автора, на втором - идея.
        Это происходит потому, что наши люди пережили МММ, "Гербалайф", 25 кризисов, кучу всякого
        мошенничества. И, конечно, градус недоверия в обществе очень высокий. И тут вы спросите, а
        почему, собственно, сейчас я должен поверить незнакомому мне человеку, что когда-нибудь он
        изготовит свое изделие? Потому что и содержание проекта, и все сведения об авторе открыто
        опубликованы на специальном сайте. С автором всегда можно связаться и задать ему вопрос,
        который возникает у кого-либо из поддержавших.
      </p>
      <p>
        Надо отметить, что в последнее время сборы в краудфандинге в целом увеличились, людей,
        которые дают деньги, становится больше, потому что появляется больше разъяснительной и
        прочей информации.
      </p>
      <p>
        Более подробно об этом и многом другом <a href="/book/">в книге</a>
      </p>
    </Section>

    <Section title="Почему не все проекты успешны" id="why-no-success" className={style.article}>
      <p>
        Краудфандинг не так прост, как кажется. Это метод, технология, со своими правилами. Это
        совсем не сложные правила, но, тем не менее, знать их надо. Никому не придет в голову
        садиться за руль автомобиля, не прочитав правил дорожного движения. Ни один нормальный
        человек не включает только что купленное устройство, не прочитав инструкцию. Так же и в
        краудфандинге есть свои правила, с которыми надо познакомиться, а главное, понять, как эта
        технология работает.
      </p>
      <div className={style.pic}>
        <img src="/assets/sitting.jpg" />
      </div>
      <p>
        Недавно писала об этом в сети и, как обычно, пришли комментарии. Один из комментаторов
        написал: «Да вы нам расскажите, как сто-пяцот тысяч бабла собрать в Америке, а видео мы и
        сами умеем снимать». И я вспомнила совсем свежую историю со съемками видео.{" "}
      </p>
      <p>
        Я готовила к размещению новый краудфандинговый проект. Известный мне давно видеооператор, он
        же режиссер и монтажер каждого ролика к крауд-проектам за последние погода, срочно уехал в
        экспедицию на съемки. Что делать, надо искать другого специалиста. Кинули клич в соц. сетях,
        откликов много, но хорошего качества съемок мало. Пришлось выбирать лучшее из худшего, хотя
        бы приемлемое. Договорились с избранником, все объяснили, кое- как сняли, и тут начался ад
        на монтаже - первые присланные варианты просто отправил меня в нокаут. Пришла в себя,
        объяснила, попросила переделать. По поводу переделок общались в общем 12 часов, разговаривая
        как слепой с глухим. Я с нежностью и слезой вспоминала моего дорого человека-оркестра,
        снимавшего все в два - три дубля и без вопросов при монтаже.
      </p>
      <p>
        Закон парных случаев работает всегда. И на днях новое подтверждение, что эпидемия «как два
        пальца» распространилась широко глубоко и повсеместно. Собрались спонтанно у друзей на
        вечерние посиделки. Хозяин орудует на кухне, он профессионал, нарезает что-то со страшной
        скоростью. Тут заходит на кухню гость, видит ловкие действия хозяина, шумное восхищение
        публики и говорит: «Давай нож, я тоже так могу». Хозяин не возражал. Он отошел в сторону и
        предложил гостю инвентарь: доска, нож, луковица. Гость с энтузиазмом начал стрекотать ножом
        и…нет два пальца. Шутка. Пальцы остались, но крови было много.{" "}
      </p>
      <p>
        Вот и в краудфандинге такая же история – много душевных ран. Услышал, как некий писатель
        собрал миллион на свою книгу, загорелся, и через неделю разместил свой проект на площадке.
        Сидит человек, ждет, когда насыплется миллион. Месяц прошел – ноль рублей. Ах! Ох! Туфта
        этот ваш краудфандинг, пустой разговор, везет счастливчикам. В результате только один из
        трех проектов на российских площадках краудфандинга успешный, что плодит разочаровавшихся
        авторов. И вполне возможно, что проект неудачника по сути был далеко не плохой, а совсем
        наоборот – нужный, перспективный, дельный. Если бы автор знал, как правильно использовать
        возможности краудфандинга, то участь его проекта оказалась бы отнюдь не такой, какой
        оказалась.
      </p>
      <p>
        Нет такого прибора, устройства, метода, которые работают в неумелых руках с первого раза. В
        каждом деле своя загогулина.
      </p>
      <p className={style.q}>
        Зря мы, господа, забываем мудрые книжки и мультики нашего детства. А ведь нам говорили:
        «Если не знаешь, как, надо у кого-нибудь спросить».
      </p>
    </Section>

    <Section title="Кому краудфандинг противопоказан" id="go-away" className={style.article}>
      <p>Только не всем краудфандинг одинаково полезен. Кому-то он противопоказан.</p>
      <p>
        Мы все разные. Одному нельзя виноград, другому нельзя в солярий – так проявляются
        индивидуальные особенности физиологии. Существуют индивидуальные особенности
        психологического устройства людей, поэтому кто-то не годится в актеры, а кому-то нельзя
        водить автомобиль, потому что очень рассеянный человек. Есть и третья категория отличий. Они
        связаны с разными наборами личных моральных принципов, которые в сумме иногда называются
        жизненной позицией. Краудфандинг - изящный хрупкий инструмент общения между людьми, поэтому
        он очень чувствителен к особенностям жизненных позиций индивидуума. Говоря проще, то, что в
        краудфандинге получается у одних, у других не получится никогда.
      </p>
      <p>У кого не получится? Кому противопоказан краудфандинг? </p>
      <p>
        Опыт показывает, что краудфандинг не работает, и никогда не будет работать, если автор
        проекта имеет в своей голове вот такие установки:
      </p>
      <ul>
        <li>Добровольно «за просто так» деньги могут отдавать только лохи. </li>
        <li>
          Краудфандинг – это лохотрон, ловушка для наивных. Человек ловкий, вроде меня, может легко
          ею воспользоваться.
        </li>
        <li>
          Я не вижу в этом деле ничего сложного или особенного, чтобы учиться. Главное, я знаю жизнь
          и её простые принципы.
        </li>
        <li>
          Любителям усложнять очевидное и призывающим к обучению я отвечаю просто: придумать
          какую-нибудь ерунду и написать об этом на сайте может каждый, кто знает буквы. Написал и
          сидишь в сторонке, ждешь, когда лохи накидают деньги.
        </li>
        <li>
          Поэтому я точно знаю, что краудфандинг – самый легкий способ извлекать «бабло» просто так.
        </li>
      </ul>
      <p>
        Если хотя бы одна из пять перечисленных установок присутствует в вашем разуме в виде крепкой
        жизненной позиции или хотя бы в виде легкой фоновой мысли, краудфандинг вам противопоказан
        категорически. Забудьте это слово и его смысл – это не для вас. Живут же люди с запретом,
        например, есть шоколад. И вы живите без попыток прийти в краудфандинг, и не морочьте себе
        голову тем, что не вписывается в ваши моральные принципы.
      </p>
    </Section>

    <Section
      title="Краудфандинг нужен всем. Зачем?"
      id="all-we-need-is-c"
      className={style.article}
    >
      <p>
        Что есть краудфандинг по сути? Всем известна замусоленная поговорка о том, что лучше дать
        человеку удочку, чем накормить рыбой. На самом деле не каждый умеет управляться с удочкой и
        не каждому это дело по душе. Лучше скинутся и купить удочку одному рыбаку, которому быть
        рыбаком в кайф. Тогда он всех накормит рыбой. А рыбаки, в свою очередь, поддержат пекаря и
        пивовара, которые обеспечат их хлебом и пивом, а все вместе поддержат музыканта, который
        напишет им хорошую песню.
      </p>
      <p>
        Сейчас развитие малого бизнеса и социального предпринимательства актуальны как никогда.
        Можно, конечно, сидеть в задумчивости, охранять свою идею и ждать распоряжений государства.
        Это мы уже прошли, это не эффективно. В России огромное количество молодых и даже не очень
        молодых креативных и изобретательных людей, которые хотят выпускать свой продукт, делать
        свое шоу, пахать свое поле. Краудфандинг - это самый безрисковый способ попробовать показать
        миру то, что ты делаешь лучше всех и что могло бы стать делом твоей жизни. Очень многие
        отказываются от своих любимых увлечений, потому что создание собственного дела, фирмы - это
        инвестор, команда, аренда, кредиты. Краудфандинг это проверка себя на прочность и
        одновременно оценка идеи обществом. Такая технология позволяет дать себе самому серьезный
        шанс на реализацию мечты, если она действительно полезна обществу.{" "}
      </p>
      <p>
        Это только одна сторона медали, но есть и другая. Общество, то есть, мы все, остро нуждается
        в людях, умеющих «играть в длинную». Потребность есть – умеющих нет. Поддержка крауд -
        проектов это и есть «игра в длинную». Не поддержка ради фана или майки с автографом
        поп-дивы, а поддержка чего-то или кого-то, кто будет кормить тебя через 10 лет и, как бы
        пафосно это не звучало, построение общества доверия друг к другу.
      </p>
      <p className={style.q}>
        Умение играть в длинную - это значит, требовать в равной степени, как от государства, так и
        от себя лично, ответа, что будет с нами через 5 лет, и через 10, и даже дальше.
      </p>
      <p>
        Что такое «игра в длинную» замечательно показано в одной истории. Кто ее автор, сказать
        трудно, но история хорошая. Дело было в Англии, далее по публикации в интернете:
      </p>
      <p>
        «Когда вы слышите, что Англия - это страна традиций, - верьте! Традиций и планирования - не
        того, которое с выключенным мотором, а того, которое по пунктам и заранее.
      </p>
      <p>
        Итак, 1913 год, Англия, Лондон, Вестминстерский холл, самое старое здание парламента.
        Заседание комиссии по крупной реставрации холла. И очень, знаете ли, грустно у комиссии идут
        дела. Здание начали строить в 11 веке, закончили, видимо, в 14, временами потом
        ремонтировали, но крупная реставрация... То поправить, се починить, и очень надо поменять
        стропила, а они, заразы, большие и дубовые. Дубовых лесов в Англии к тому моменту осталось
        мало, старых - еще меньше, а тут нужны дубы старше 300 лет - потому что все, что моложе,
        банально не подходит по размеру.
      </p>
      <p>
        И говорит некто в комиссии - а откуда мы вообще дерево в прошлый раз брали? "Ээээ, - говорят
        ему, - а когда был прошлый раз?" А прошлый раз был в 14 веке. Мда. Ну все-таки - откуда
        брали? Проверяют. Из Сассекса, дубовые брусья под стропила присланы из владений семейства
        Кортроп. И говорит опять некто в комиссии - большой оптимист человек был: "А давайте с ними
        свяжемся? Владения же никуда из семьи не уходили с 14 века. Ну в порядке бреда - свяжемся?"
      </p>
      <p>
        Связываются. И глава семьи Кортропов сэр Джордж говорит человеческим голосом: "Вы за
        дубовыми стропилами для Вестминстерского холла? Вон те деревья - ваши. Понимаете, когда в 14
        веке мой прапрапрапрапра вам балки поставил, он подумал, что лет через 500 вам новые могут
        понадобиться. И посадил. И велел передавать сообщение дальше."
      </p>
      <p>
        И срубили дубы, и сделали балки, и отремонтировали Вестминстерский холл. Думаю, что сэр
        Джордж тогда приказал еще дубы посадить. А то лет через 500 понадобится...»
      </p>
    </Section>

    <Section
      title="3 главных заблуждения авторов краудфандинговых проектов"
      id="3-mistakes"
      className={style.article}
    >
      <p>
        <b>Первое заблуждение</b>
      </p>
      <p>
        Проект на краудфандинге это легко и просто, и миллион собрать можно на что угодно. Появилась
        идея – надо бежать собирать. Автор думал примерно так: «Давно хотел контору по производству
        зубных щеток, а тут краудфандинг подвернулся, ну я и побегу собирать. Я пока ничего не знаю,
        как вести бизнес, мало знаю о щетках, но побегу, пока время есть, насобираю денег, потом
        разберусь». Это верный путь к провалу. Проект не подготовлен, с высокой долей вероятности он
        не соберет заявленной суммы.
      </p>
      <p>
        И хотя практически все платформы говорят: «Родил идею – беги собирать», я говорю, нет, так
        нельзя. Работу с проектом надо тщательно планировать и осмысленно оформлять.
      </p>
      <p className={style.q}>Чем тщательнее подготовлен проект, тем выше вероятность сбора</p>
      <p>
        Если вы родили что-то сырое, и в таком виде выплюнули на платформу, при этом у вас нет ни
        вашей аудитории, нет аудитории первой волны, у вас нет никаких предварительных
        договоренностей со средствами массовой информации, то вы не собираете ничего. Это уже
        проверено 550 раз. Хотите доказать обратное? Попробуйте. Я каждый раз предлагаю всем
        оппонентам – пожалуйста, сделайте по-другому и докажите мне обратное. Но таких прецедентов
        еще не было.
      </p>
      <p>
        <b>Второе заблуждение</b>
      </p>
      <p>
        Автор искренне уверен, что если что-то выглядит для него актуальным и полезным, то так же
        думают другие люди. Это не факт, спрос далеко не так однозначен. Если ваше любимое занятие
        выпекать чизкейки, то совсем не факт, что это любят все.
      </p>
      <p>
        <b>Третье заблуждение</b>
      </p>
      <p>
        Можно опубликовать проект с любой суммой сбора. Если вы прямо в проекте не объяснили, не
        показали, на какие конкретные расходы, связанные с вашим проектом, нужны деньги и почему у
        вас именно такая цифра, вам никто не поверит. Когда собирают миллион на издание книги, то
        люди приходят в проект и спрашивают: «Что, книга будет с золотым тиснением, будут вставлены
        бриллианты?» Обоснованному бюджету проекта больше доверия. Если люди видят, что все
        прозрачно, ничего сомнительного, что деньги действительно нужны для дела, то поддерживают
        такие проекты с большим энтузиазмом.
      </p>
    </Section>
  </Page>
);
