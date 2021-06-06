# Сайт организации «Старшие Братья Старшие Сёстры»

В этом репозитории — проект нового сайта для организации [Старшие Братья Старшие Сёстры](https://nastavniki.org), который наша команда разработала в рамках благотворительной программы [«Яндекс.Практикума»](https://praktikum.yandex.ru/).

Над вёрсткой работала команда [SophieMilash](https://github.com/SophieMilash), [jusstes](https://github.com/jusstes) и [Павел Жаров](https://github.com/pavelprna) — их репозиторий можно посмотреть [по ссылке](https://github.com/SophieMilash/bbbs).

На этом этапе представлена реализация функциональности сайта на React. Над ней работали мы — [Юлия Зизенко](https://github.com/Yulya-Ziz), [Евгения Зубова](https://github.com/EvgeniiaZu8ova), [Сергей Криворучко](https://github.com/SergeyK2004) и [Борис Никиташов](https://github.com/ooohrayyy).

## Как запустить проект

Репозиторий создан с использованием утилиты create-react-app.

Для запуска сайта нужно скопировать репозиторий, установить зависимости командой `npm i`, а затем дать команду `npm start`.

## Технологии

В разработке функциональной части сайта использовался фреймворк React и связанные библиотеки — react-router-dom, react-modal, react-paginate, react-hook-form и другие. Полный список зависимостей можно изучить в файле `package.json`.

## На момент публикации реализовано

### Эмуляция сервера

Поскольку на этапе разработки фронтенда рабочего сервера ещё не было, мы эмулируем сервер при помощи axios. Код мока и запросов находится в директории `src/utils`, это файлы `mock.js` и `api.js`.

### Авторизация

Авторизация происходит с использованием константного токена (код запроса авторизации лежит в файле `src/utils/api.js`).

Интерфейс страницы и функционал отличаются для неавторизованного и авторизованного пользователя.

Авторизация запускается по кнопке, расположенной в правом верхнем углу страницы. Авторизованный пользователь по клику на иконку попадёт в личный кабинет, неавторизованный — увидит модальное окно с предложением авторизоваться.

Вкладка «Календарь» доступна только авторизованному пользьзователю, неавторизованный также увидит модальное окно с формой авторизации.

При первом посещении страницы пользователю будет предложено выбрать город, в котором он хочет отслеживать мероприятия.

### Личный кабинет

В личном кабинете при клике на кнопку «Добавить встречу» откроется форма, через которую можно будет добавить новую встречу, внести информацию о ней и добавить иллюстрацию.

Сейчас при добавлении карточки встреча сохраняется до следующего обновления страницы.

В верхней части страницы есть панель с небольшими карточками — это миниатюры карточек событий из календаря, на которые записался пользователь. По клику на такую миниатюру отобразится модальное окно с предложением удалить встречу.

Кроме того, в личном кабинете пользователь может изменить свой город.

### Главная страница

На главной странице сайта отображается подборка актуальных материалов — на разные темы и в разных форматах.

Авторизованный пользователь увидит в первом блоке напоминание о ближайшей запланированной встрече. Неавторизованный — предложение узнать о проекте побольше.

### «Календарь»

В разделе «Календарь» можно записаться на понравившееся событие из списка, а также узнать о любом из предложенных событий поподробнее.

События можно фильтровать по месяцам.

### «Куда пойти»

В разделе «Куда пойти» авторизованный пользователь может добавлять рекомендации по интересным местам.

Рекомендации других пользователей также отображаются в этом разделе.

### «Вопросы»

В разделе «Вопросы» можно прочитать список часто задаваемых наставниками вопросов. Каждую карточку можно раскрыть, отобразив ответ на вопрос.

### «Читать и смотреть»

В разделе «Читать и смотреть» отображаются актуальные материалы из справочника, видеоролики, статьи, фильмы и книги.

В каждом блоке реализован скролл — как жестами мыши или трекпада, так и по кнопкам-индикаторам.

### «Права детей»

В разделе «Права детей» отображается список опубликованных материалов на юридические темы. В конце страницы реализована пагинация.

### Поисковая строка

В верхнем правом углу рядом с иконкой пользователя есть значок поиска. При нажатии на него откроется поисковая строка. Закрыть её можно также - нажатием на иконку поиска.

### Раздел «О нас»

По ссылке в футере можно пройти на страницу «О проекте» — и почитать о деятельности организации.
