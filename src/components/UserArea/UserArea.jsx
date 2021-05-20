// import { React, useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

// import mock from '../../utils/mock';
// import api from '../../utils/api';
import UserEventForm from '../UserEventForm/UserEventForm';
import UserEvent from '../UserEvent/UserEvent';

// import userPhoto from '../../images/personal-area/lk.png';
// import PropTypes from 'prop-types';

function UserArea(meetings) {
  // const [meetings, setMeetings] = useState([]);
  // function handleAddPhotoSubmit(photo) {

  // }
  // mock.initializeAxiosMockAdapter(api.instance);
  // useEffect(() => {
  //   api
  //     .getMeetings()
  //     // .then(({ data }) => console.log(data))
  //     .then(({ res }) => setMeetings(res))
  //     .catch((err) => console.log(err.message));
  // }, []);

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
      <div className="personal-area__story">
        <h2 className="section-title personal-area__title">
          Составьте историю вашей дружбы с младшим. Эта страница доступна только
          вам.
        </h2>
      </div>
      <UserEventForm />
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {meetings.map((el) => (
        <UserEvent meeting={el} key={el.id} />
      ))}
    </section>
  );
}

// UserArea.propTypes = {};

export default UserArea;
