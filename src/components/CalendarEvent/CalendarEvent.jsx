import React from 'react';
import parsedDate from '../../utils/calendarUtils';

export default function CalendarEvent({ event }) {
  const { address, contact, title, startAt, endAt, booked, seats, takenSeats } =
    event;

  const { month, dayWeek, time, dayMonth } = parsedDate(startAt);
  const endTime = parsedDate(endAt);
  const numberOfFreeSeats = seats - takenSeats;
  const hasFreeSeats = numberOfFreeSeats > 0;

  return (
    <article className={`calendar ${booked ? 'calendar_selected' : ''}`}>
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">Волонтёры</p>
          <p className="calendar__weekday">{`${month} / ${dayWeek}`}</p>
        </div>
        <div className="calendar__about">
          <h2 className="section-title calendar__title">{title}</h2>
          <p className="calendar__date">{dayMonth}</p>
        </div>
      </div>

      <div className="calendar__meetup">
        <ul className="calendar__info-list">
          <li className="calendar__info-item">
            <p className="calendar__time">{`${time}-${endTime.time}`}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__place">{address}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__contact">{contact}</p>
          </li>
        </ul>

        <div className="calendar__submit">
          {booked ? (
            <button
              className="button button_theme_light calendar__button calendar__button_selected calendar__button_action_sign-up"
              type="button"
            >
              Отменить запись
            </button>
          ) : (
            <button
              className="button button_theme_light"
              type="button"
              disabled={!hasFreeSeats}
            >
              Записаться
            </button>
          )}
          {!booked && (
            <p className="calendar__place-left">
              {hasFreeSeats
                ? `Осталось ${numberOfFreeSeats} мест`
                : 'Запись закрыта'}
            </p>
          )}
          <button
            className="button calendar__button-dots button_theme_light"
            type="button"
          >
            &#8226;&#8226;&#8226;
          </button>
        </div>
      </div>
    </article>
  );
}
