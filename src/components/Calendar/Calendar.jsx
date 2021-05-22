import { React, useEffect, useState } from 'react';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import Filter from '../Filter/Filter';
import { months } from '../../utils/initialFilterStates';
import {
  getRotatedMonth,
  getParsedEventsData,
  getFilteredTags,
  getFilteredData,
  sortEventsByDate,
} from '../../utils/calendarUtils';
import mock from '../../utils/mock';
import api from '../../utils/api';

function Calendar() {
  const [events, setEvents] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredEventsResult, setFilteredEventsResult] = useState([]);

  useEffect(() => {
    mock.initializeAxiosMockAdapter(api.instance);
    api
      .getEvents()
      .then(({ data }) => {
        const parsedData = getParsedEventsData(data);
        const initialTagValue = getRotatedMonth(months);
        const filteredEvents = getFilteredData(
          initialTagValue,
          parsedData,
          'startMonth',
        );
        sortEventsByDate(filteredEvents);
        setEvents(parsedData);
        setFilteredEventsResult(filteredEvents);
        setSelectedTags(initialTagValue);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    const filteredEvents = getFilteredData(selectedTags, events, 'startMonth');
    sortEventsByDate(filteredEvents);
    setFilteredEventsResult(filteredEvents);
  }, [selectedTags]);

  function handleSlectedTag(tag) {
    const newTagsArray = getFilteredTags(tag, selectedTags);
    setSelectedTags(newTagsArray);
  }

  return (
    <section className="lead page__section">
      <h1 className="main-title">Календарь</h1>
      <Filter tags={selectedTags} onSelectedTag={handleSlectedTag} />
      <section className="calendar-container page__section">
        {filteredEventsResult.length === 0 ? (
          <p className="section-title">В этом месяце пока нет меропритяий</p>
        ) : (
          filteredEventsResult.map((item) => (
            <CalendarEvent event={item} key={item.id} />
          ))
        )}
      </section>
    </section>
  );
}

export default Calendar;
