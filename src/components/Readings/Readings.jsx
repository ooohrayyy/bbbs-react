import React from 'react';

import ReadingsHandbook from '../ReadingsHandbook/ReadingsHandbook';
import ReadingsVideo from '../ReadingsVideo/ReadingsVideo';
import ReadingsArticles from '../ReadingsArticles/ReadingsArticles';
import ReadingsMovies from '../ReadingsMovies/ReadingsMovies';

function Readings() {
  return (
    <>
      <ReadingsHandbook />
      <ReadingsVideo />
      <ReadingsArticles />
      <ReadingsMovies />
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
