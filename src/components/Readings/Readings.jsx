import React from 'react';

import ReadingsHandbook from '../ReadingsHandbook/ReadingsHandbook';

function Readings() {
  return (
    <>
      <ReadingsHandbook />
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./video.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Видео</h3>
          </a>
          <div className="preview__buttons">
            <button
              className="preview__button preview__button_left"
              type="button"
              label="left"
            />
            <button
              className="preview__button preview__button_right"
              type="button"
              label="right"
            />
          </div>
        </div>
        <div className="preview__row">
          <article className="preview__card card card_content_video">
            <div className="video">
              <img
                src="./images/video/video-ex-1.png"
                alt="Превью видео"
                className="video__img"
              />
              <p className="video__duration paragraph">4:37</p>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">
                  Меняется смысл – меняется жизнь
                </h2>
                <p className="caption card__title-caption">
                  Прямой эфир с актрисой театра и кино Эмилией Спивак
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">
                смотреть видео
              </a>
            </div>
          </article>

          <article className="preview__card card card_content_video">
            <div className="video">
              <img
                src="./images/video/video-ex-2.png"
                alt="Превью видео"
                className="video__img"
              />
              <p className="video__duration paragraph">4:37</p>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">
                  Что в силах волонтера-наставника?
                </h2>
                <p className="caption card__title-caption">
                  Иван Рустаев, волонтер-наставник
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">
                смотреть видео
              </a>
            </div>
          </article>

          <article className="preview__card card card_content_video">
            <div className="video">
              <img
                src="./images/video/video-ex-3.png"
                alt="Превью видео"
                className="video__img"
              />
              <p className="video__duration paragraph">4:37</p>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">
                  Творчество, наставничество, дети
                </h2>
                <p className="caption card__title-caption">
                  Виктория Ямина, Виктория Ямина, волонтеры
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">
                смотреть видео
              </a>
            </div>
          </article>

          <article className="preview__card card card_content_video">
            <div className="video">
              <img
                src="./images/video/video-ex-4.png"
                alt="Превью видео"
                className="video__img"
              />
              <p className="video__duration paragraph">4:37</p>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">
                  Дружба – меняет мир
                </h2>
                <p className="caption card__title-caption">
                  Прямой эфир с актрисой театра и кино Эмилией Спивак
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">
                смотреть видео
              </a>
            </div>
          </article>

          <article className="preview__card card card_content_video">
            <div className="video">
              <img
                src="./images/video/video-ex-1.png"
                alt="Превью видео"
                className="video__img"
              />
              <p className="video__duration paragraph">4:37</p>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">
                  Меняется смысл – меняется жизнь
                </h2>
                <p className="caption card__title-caption">
                  Прямой эфир с актрисой театра и кино Эмилией Спивак
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">
                смотреть видео
              </a>
            </div>
          </article>

          <article className="preview__card card card_content_video">
            <div className="video">
              <img
                src="./images/video/video-ex-2.png"
                alt="Превью видео"
                className="video__img"
              />
              <p className="video__duration paragraph">4:37</p>
            </div>
            <div className="card__video-info">
              <div className="card__title-wrap">
                <h2 className="section-title card__title">
                  Что в силах волонтера-наставника?
                </h2>
                <p className="caption card__title-caption">
                  Иван Рустаев, волонтер-наставник
                </p>
              </div>
              <a href="#" className="link card__link link_action_open-video">
                смотреть видео
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./articles.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Статьи</h3>
          </a>
          <div className="preview__buttons">
            <button
              className="preview__button preview__button_left"
              type="button"
              label="left"
            />
            <button
              className="preview__button preview__button_right"
              type="button"
              label="right"
            />
          </div>
        </div>
        <div className="preview__row">
          <article className="preview__card card-container card-container_type_article">
            <div className="card card_color_green">
              <div className="card__title-wrap">
                <h2 className="section-title">Причины подростковой агрессии</h2>
                <p className="caption card__title-caption">
                  Ирина Стасенко, педагог-психолог
                </p>
              </div>
              <a href="./article.html" className="link card__link">
                читать на сайте
              </a>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container card-container_type_article">
            <div className="card card_color_yellow">
              <div className="card__title-wrap">
                <h2 className="section-title">
                  Самоубийство в подростковом возрасте. Интервью с психологом
                </h2>
                <p className="caption card__title-caption">
                  Ирина Стасенко, педагог-психолог
                </p>
              </div>
              <a href="./article.html" className="link card__link">
                читать на сайте
              </a>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container card-container_type_article">
            <div className="card card_color_pink">
              <div className="card__title-wrap">
                <h2 className="section-title">Причины подростковой агрессии</h2>
                <p className="caption card__title-caption">
                  Ирина Стасенко, педагог-психолог
                </p>
              </div>
              <a href="./article.html" className="link card__link">
                читать на сайте
              </a>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги в несколько абзацев. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется. Вы будете
                    не понимать друг друга, потом понимать чуть лучше и, в конце
                    концов, научитесь даже шутить. В тот момент, как ребёнок
                    научился говорить, и не одно слово, а задавать бесконечное
                    количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container card-container_type_article">
            <div className="card card_color_green">
              <div className="card__title-wrap">
                <h2 className="section-title">Причины подростковой агрессии</h2>
                <p className="caption card__title-caption">
                  Ирина Стасенко, педагог-психолог
                </p>
              </div>
              <a href="./article.html" className="link card__link">
                читать на сайте
              </a>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container card-container_type_article">
            <div className="card card_color_yellow">
              <div className="card__title-wrap">
                <h2 className="section-title">
                  Самоубийство в подростковом возрасте. Интервью с психологом{' '}
                </h2>
                <p className="caption card__title-caption">
                  Ирина Стасенко, педагог-психолог
                </p>
              </div>
              <a href="./article.html" className="link card__link">
                читать на сайте
              </a>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container card-container_type_article">
            <div className="card card_color_pink">
              <div className="card__title-wrap">
                <h2 className="section-title">Причины подростковой агрессии</h2>
                <p className="caption card__title-caption">
                  Ирина Стасенко, педагог-психолог
                </p>
              </div>
              <a href="./article.html" className="link card__link">
                читать на сайте
              </a>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги в несколько абзацев. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется. Вы будете
                    не понимать друг друга, потом понимать чуть лучше и, в конце
                    концов, научитесь даже шутить. В тот момент, как ребёнок
                    научился говорить, и не одно слово, а задавать бесконечное
                    количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./films.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Фильмы</h3>
          </a>
          <div className="preview__buttons">
            <button
              className="preview__button preview__button_left"
              type="button"
              label="left"
            />
            <button
              className="preview__button preview__button_right"
              type="button"
              label="right"
            />
          </div>
        </div>
        <div className="preview__row">
          <article className="preview__card card-container">
            <div className="card card_content_video">
              <div className="video">
                <img
                  src="./images/video/video-prev.png"
                  alt="Превью видео"
                  className="video__img"
                />
                <ul className="video__rubric-list">
                  <li>
                    <p className="rubric video__rubric">рубрика</p>
                  </li>
                  <li>
                    <p className="rubric video__rubric">рубрика</p>
                  </li>
                </ul>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">
                    Жутко громко и запредельно близко
                  </h2>
                  <p className="caption card__title-caption">
                    Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                  </p>
                </div>
                <a href="#" className="link card__link link_action_open-video">
                  смотреть трейлер
                </a>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_video">
              <div className="video">
                <img
                  src="./images/video/video-prev.png"
                  alt="Превью видео"
                  className="video__img"
                />
                <ul className="video__rubric-list">
                  <li>
                    <p className="rubric video__rubric">рубрика</p>
                  </li>
                </ul>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">Жизнь Кабачка</h2>
                  <p className="caption card__title-caption">
                    Клод Баррас, мультфильм, Швейцария, Франция, 2016
                  </p>
                </div>
                <a href="#" className="link card__link link_action_open-video">
                  смотреть трейлер
                </a>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_video">
              <div className="video">
                <img
                  src="./images/video/video-prev.png"
                  alt="Превью видео"
                  className="video__img"
                />
                <ul className="video__rubric-list">
                  <li>
                    <p className="rubric video__rubric">рубрика</p>
                  </li>
                  <li>
                    <p className="rubric video__rubric">рубрика</p>
                  </li>
                </ul>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">Волчок</h2>
                  <p className="caption card__title-caption">
                    Василий Сигарев, Россия, 2009 год
                  </p>
                </div>
                <a href="#" className="link card__link link_action_open-video">
                  смотреть трейлер
                </a>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_video">
              <div className="video">
                <img
                  src="./images/video/video-prev.png"
                  alt="Превью видео"
                  className="video__img"
                />
                <ul className="video__rubric-list">
                  <li>
                    <p className="rubric video__rubric">рубрика</p>
                  </li>
                </ul>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">Жизнь Кабачка</h2>
                  <p className="caption card__title-caption">
                    Клод Баррас, мультфильм, Швейцария, Франция, 2016
                  </p>
                </div>
                <a href="#" className="link card__link link_action_open-video">
                  смотреть трейлер
                </a>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_video">
              <div className="video">
                <img
                  src="./images/video/video-prev.png"
                  alt="Превью видео"
                  className="video__img"
                />
                <ul className="video__rubric-list">
                  <li>
                    <p className="rubric video__rubric">рубрика</p>
                  </li>
                  <li>
                    <p className="rubric video__rubric">рубрика</p>
                  </li>
                </ul>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">
                    Жутко громко и запредельно близко
                  </h2>
                  <p className="caption card__title-caption">
                    Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                  </p>
                </div>
                <a href="#" className="link card__link link_action_open-video">
                  смотреть трейлер
                </a>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_video">
              <div className="video">
                <img
                  src="./images/video/video-prev.png"
                  alt="Превью видео"
                  className="video__img"
                />
                <ul className="video__rubric-list">
                  <li>
                    <p className="rubric video__rubric">рубрика</p>
                  </li>
                </ul>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">
                    Жутко громко и запредельно близко
                  </h2>
                  <p className="caption card__title-caption">
                    Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                  </p>
                </div>
                <a href="#" className="link card__link link_action_open-video">
                  смотреть трейлер
                </a>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./books.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Книги</h3>
          </a>
          <div className="preview__buttons">
            <button
              className="preview__button preview__button_left"
              type="button"
              label="left"
            />
            <button
              className="preview__button preview__button_right"
              type="button"
              label="right"
            />
          </div>
        </div>
        <div className="preview__row">
          <article className="preview__card card-container">
            <div className="card card_content_book">
              <div className="book book_color_pink">
                <h2 className="section-title book__title">
                  Жизнь после утраты
                </h2>
                <div className="book__info">
                  <p className="caption book__author">
                    Волкан Вамик, Зинтл Элизабет
                  </p>
                  <p className="caption book__year">2011 год</p>
                </div>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_book">
              <div className="book book_color_blue">
                <h2 className="section-title book__title">
                  Жизнь после утраты. Психология горевания
                </h2>
                <div className="book__info">
                  <p className="caption book__author">Волкан Вамик,</p>
                  <p className="caption book__year">2011 год</p>
                </div>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_book">
              <div className="book book_color_pink">
                <h2 className="section-title book__title">
                  Жизнь после утраты
                </h2>
                <div className="book__info">
                  <p className="caption book__author">
                    Волкан Вамик, Зинтл Элизабет
                  </p>
                  <p className="caption book__year">2011 год</p>
                </div>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_book">
              <div className="book book_color_blue">
                <h2 className="section-title book__title">
                  Жизнь после утраты. Психология горевания
                </h2>
                <div className="book__info">
                  <p className="caption book__author">Волкан Вамик,</p>
                  <p className="caption book__year">2011 год</p>
                </div>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_book">
              <div className="book book_color_pink">
                <h2 className="section-title book__title">
                  Жизнь после утраты
                </h2>
                <div className="book__info">
                  <p className="caption book__author">
                    Волкан Вамик, Зинтл Элизабет
                  </p>
                  <p className="caption book__year">2011 год</p>
                </div>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="preview__card card-container">
            <div className="card card_content_book">
              <div className="book book_color_blue">
                <h2 className="section-title book__title">
                  Жизнь после утраты. Психология горевания
                </h2>
                <div className="book__info">
                  <p className="caption book__author">Волкан Вамик,</p>
                  <p className="caption book__year">2011 год</p>
                </div>
              </div>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Аннотация книги, статьи, фильма в несколько абзацев. В тот
                    момент, как ребёнок научился говорить, и не одно слово,
                    а задавать бесконечное количество вопросов, жизнь меняется.
                    Вы будете не понимать друг друга, потом понимать чуть лучше
                    и, в конце концов, научитесь даже шутить. В тот момент, как
                    ребёнок научился говорить, и не одно слово, а задавать
                    бесконечное количество вопросов, жизнь меняется.
                  </p>
                  <p className="paragraph card__paragraph">
                    Аннотация статьи в несколько абзацев. Аннотация статьи в
                    несколько абзацев. В тот момент, как ребёнок научился
                    говорить, и не одно слово, а задавать бесконечное количество
                    вопросов, жизнь меняется. Вы будете не понимать друг друга,
                    потом понимать чуть лучше и, в конце концов, научитесь даже
                    шутить. Аннотация статьи в несколько абзацев.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Readings;
