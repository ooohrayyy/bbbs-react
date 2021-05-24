import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';

function ReadingsVideo() {
  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./video.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Видео</h3>
          </a>
          <ReadingsButtons />
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
    </>
  );
}

export default ReadingsVideo;
