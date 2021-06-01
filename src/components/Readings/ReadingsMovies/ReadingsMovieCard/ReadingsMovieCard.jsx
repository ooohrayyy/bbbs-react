import React from 'react';

function ReadingsMovieCard({
  title,
  caption,
  annotation,
  preview,
  trailer,
  categories,
}) {
  return (
    <article className="preview__card card-container">
      <div className="card card_content_video">
        <div className="video">
          <img src={preview} alt="Превью видео" className="video__img" />
          <ul className="video__rubric-list">
            {categories.map((item, index) => (
              <li key={index}>
                <p className="rubric video__rubric">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card__video-info">
          <div className="card__title-wrap">
            <h2 className="section-title card__title">{title}</h2>
            <p className="caption card__title-caption">{caption}</p>
          </div>
          <a href={trailer} className="link card__link link_action_open-video">
            смотреть трейлер
          </a>
        </div>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content">
          <div className="card__annotation">
            <p className="paragraph card__paragraph">{annotation}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReadingsMovieCard;
