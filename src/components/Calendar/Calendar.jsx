import { React, useEffect, useState } from 'react';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import mock from '../../utils/mock';
import api from '../../utils/api';

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    mock.initializeAxiosMockAdapter(api.instance);
    api
      .getEvents()
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section className="calendar-container page__section">
      {events.map((item) => (
        <CalendarEvent event={item} key={item.id} />
      ))}
    </section>
  );
}
