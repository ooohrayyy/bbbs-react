import React from 'react';
import PropTypes from 'prop-types';

function UserEvent({ meeting }) {
  const { place, story, photo, date } = meeting;

  return (
    <article className="card-container card-container_type_personal-area">
      <div className="card card_content_media">
        <img
          src={photo}
          alt="Фото с встречи"
          className="personal-area__photo"
        />
      </div>
      <div className="card personal-area__card personal-area__date-container">
        <div className="personal-area__text-wrap">
          <h2 className="section-title personal-area__card-title">{place}</h2>
          <p className="paragraph">{story}</p>
        </div>
        <div className="personal-area__card-date">
          <p className="personal-area__card-weekday">
            {`${date.month}, ${date.year}`}
          </p>
          <p className="personal-area__card-day">{date.day}</p>
        </div>
        <div className="personal-area__actions">
          <div className="personal-area__rating">
            <button
              aria-label="Rate good"
              className="personal-area__rate personal-area__rate_type_active-good"
              type="button"
            />
            <p className="caption personal-area__rating-label personal-area__rating-label_type_good">
              Было классно
            </p>
          </div>

          <div className="personal-area__action-elements">
            <p className="caption personal-area__opened-info">
              Открыто Александре К.
            </p>
            <button
              className="caption personal-area__button personal-area__button_action_edit-card"
              type="button"
            >
              Редактировать
            </button>
            <button
              className="caption personal-area__button personal-area__button_action_delete-card"
              type="button"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

UserEvent.propTypes = {
  meeting: PropTypes.instanceOf(Object),
};

export default UserEvent;
