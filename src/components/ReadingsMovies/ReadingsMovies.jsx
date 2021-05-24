import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';

function ReadingsMovies() {
  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./films.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Фильмы</h3>
          </a>
          <ReadingsButtons />
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
    </>
  );
}

export default ReadingsMovies;
