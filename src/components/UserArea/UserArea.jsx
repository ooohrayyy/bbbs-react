import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import UserEventForm from '../UserEventForm/UserEventForm';
import UserEvent from '../UserEvent/UserEvent';
import UserRegistredEvent from '../UserRegistredEvent/UserRegistredEvent';

import getRegistredEvents from '../../utils/userAreauUtils';

function UserArea({
  meetings = [],
  onAddMeeting,
  allEvents,
  onSignOut,
  isLoading,
  userCity,
  onChooseCity,
}) {
  const [isAddMeetButtonClicked, setIsMeetButtonClicked] = useState(false);
  const [bookedEvents, setBookedEvents] = useState([]);

  useEffect(() => {}, [meetings]);

  useEffect(() => {}, [userCity]);

  useEffect(() => {
    setBookedEvents(getRegistredEvents(allEvents));
  }, [allEvents]);

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
          onClick={onChooseCity}
          type="button"
          className="paragraph personal-area__user-link personal-area__user-link_type_city"
        >
          {userCity && `${userCity}. `} Изменить город
        </button>
        <button
          type="button"
          onClick={onSignOut}
          className="paragraph personal-area__user-link personal-area__user-link_type_exit"
        >
          Выйти
        </button>
      </div>
      <div className="personal-area__sign-up">
        <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
          {bookedEvents.length === 0
            ? 'У вас нет записи на мероприятия'
            : 'Вы записаны на мероприятия:'}
        </h2>
        <ul className="personal-area__reg-events">
          {bookedEvents.map((i) => (
            <UserRegistredEvent
              key={i.id}
              title={i.title}
              startDayMonth={i.startDayMonth}
              startMonth={i.startMonth}
            />
          ))}
        </ul>
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
        meetings.map((el) => (
          <UserEvent meeting={el} isLoading={isLoading} key={el.id} />
        ))}
    </section>
  );
}

UserArea.propTypes = {
  meetings: PropTypes.instanceOf(Array),
};

export default UserArea;
