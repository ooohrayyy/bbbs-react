import React from 'react';

function Film({ item }) {
  return (
    <article
      className="card card_content_video card-pagination_page_main"
      key={item.id}
    >
      <div className="video">
        <a href="./films.html" className="card__link-wrap">
          <img src={item.imageUrl} alt="Превью видео" className="video__img" />
          <ul className="video__rubric-list">
            {item.tags.map((tag) => (
              <li key={tag.id}>
                <p className="rubric video__rubric">{tag.name}</p>
              </li>
            ))}
          </ul>
        </a>
      </div>
      <div className="card__video-info">
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{item.title}</h2>
          <p className="caption card__title-caption">{item.info}</p>
        </div>
        <a href={item.link} className="link card__link link_action_open-video">
          смотреть трейлер
        </a>
      </div>
    </article>
  );
}

export default Film;
