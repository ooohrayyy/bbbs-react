import React from 'react';
import { Link } from 'react-router-dom';

import UserEventForm from '../UserEventForm/UserEventForm';

// import userPhoto from '../../images/personal-area/lk.png';
// import PropTypes from 'prop-types';

function UserArea() {
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
    </section>
  );
}

// UserArea.propTypes = {};

export default UserArea;
