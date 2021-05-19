import React from 'react';

import videoImg from '../../images/video/video-main.jpg';

function Video() {
  return (
    <article className="card-container card-container_type_main-video">
      <div className="card card_color_yellow card_content_video-preview">
        <div className="card__title-wrap">
          <a href="./video.html" className="card__link-wrap">
            <h2 className="section-title card__title">
              Эфир с выпускником нашей программы
            </h2>
          </a>
          <p className="caption card__title-caption">
            Иван Рустаев, выпускник программы
          </p>
        </div>
        <a href="#" className="link card__link link_action_open-video">
          смотреть видео
        </a>
      </div>
      <div className="card card_color_yellow card_content_video video">
        <a href="./video.html" className="card__link-wrap">
          <img
            src={videoImg}
            alt="Превью видео"
            className="video__img video__img_position_main-video"
          />
        </a>
      </div>
    </article>
  );
}

export default Video;
