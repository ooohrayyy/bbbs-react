import React from 'react';

function Video({ video }) {
  return (
    <article className="card-container card-container_type_main-video">
      <div className="card card_color_yellow card_content_video-preview">
        <div className="card__title-wrap">
          <a href="./video.html" className="card__link-wrap">
            <h2 className="section-title card__title">{video.title}</h2>
          </a>
          <p className="caption card__title-caption">{video.info}</p>
        </div>
        <a href={video.link} className="link card__link link_action_open-video">
          смотреть видео
        </a>
      </div>
      <div className="card card_color_yellow card_content_video video">
        <a href="./video.html" className="card__link-wrap">
          <img
            src={video.imageUrl}
            alt="Превью видео"
            className="video__img video__img_position_main-video"
          />
          <p className="video__duration video__duration_position_main-video paragraph">
            59:44
          </p>
        </a>
      </div>
    </article>
  );
}

export default Video;
