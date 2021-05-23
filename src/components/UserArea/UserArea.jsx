import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserEventForm from '../UserEventForm/UserEventForm';
import UserEvent from '../UserEvent/UserEvent';

function UserArea({ meetings = [], onAddMeeting }) {
  const [isAddMeetButtonClicked, setIsMeetButtonClicked] = useState(false);

  useEffect(() => {}, [meetings]);

  function handleAddMeetClick() {
    setIsMeetButtonClicked(true);
  }

  function handleAddMeetCardClick() {
    setIsMeetButtonClicked(false);
  }

  return (
    <section className="personal-area page__section">
      <div className="personal-area__user-info">
        <button
          type="button"
          className="paragraph personal-area__user-link personal-area__user-link_type_city"
        >
          Изменить город
        </button>
        <Link
          to="/main"
          className="paragraph personal-area__user-link personal-area__user-link_type_exit"
        >
          Выйти
        </Link>
      </div>
      <div className="personal-area__sign-up">
        <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
          У вас нет записи на мероприятия
        </h2>
      </div>
      {isAddMeetButtonClicked && (
        <div className="personal-area__story">
          <h2 className="section-title personal-area__title">
            Составьте историю вашей дружбы с младшим. Эта страница доступна
            только вам.
          </h2>
        </div>
      )}
      {!isAddMeetButtonClicked && (
        <div className="personal-area__add-meeting">
          <button
            onClick={handleAddMeetClick}
            type="button"
            aria-label="Add meeting"
            className="personal-area__add-meeting-button"
          />
          <p className="personal-area__add-meeting-caption">Добавить встречу</p>
        </div>
      )}
      {isAddMeetButtonClicked && (
        <UserEventForm
          onAddMeeting={onAddMeeting}
          onAddMeetingClick={handleAddMeetCardClick}
        />
      )}
      {!isAddMeetButtonClicked &&
        meetings.map((el) => <UserEvent meeting={el} key={el.id} />)}
    </section>
  );
}

UserArea.propTypes = {
  meetings: PropTypes.instanceOf(Array),
};

export default UserArea;
