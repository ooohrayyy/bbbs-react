import { React, useEffect, useState } from 'react';
import CalendarCard from '../CalendarCard/CalendarCard';
import Filter from '../Filter/Filter';
import filters from '../../assets/dev-data/filterTagsData';
import {
  getRotatedMonth,
  getParsedEventsData,
  getFilteredTags,
  getFilteredData,
  sortEventsByDate,
} from '../../utils/calendarUtils';
import mock from '../../utils/mock';
import api from '../../utils/api';
import Meetup from '../Popups/Meetup/Meetup';

function Calendar() {
  const [events, setEvents] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredEventsResult, setFilteredEventsResult] = useState([]);
  const [event, setEvent] = useState({});
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    mock.initializeAxiosMockAdapter(api.instance);
    api
      .getEvents()
      .then(({ data }) => {
        const parsedData = getParsedEventsData(data);
        const initialTagValue = getRotatedMonth(filters.months);
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
  function openMore(item) {
    setEvent(item);
    setIsMoreOpen(true);
  }
  function handleClose() {
    setIsMoreOpen(false);
  }

  return (
    <>
      <section className="lead page__section">
        <h1 className="main-title">Календарь</h1>
        <Filter tags={selectedTags} onSelectedTag={handleSlectedTag} />
        <section className="calendar-container page__section">
          {filteredEventsResult.length === 0 ? (
            <p className="section-title">В этом месяце пока нет меропритяий</p>
          ) : (
            filteredEventsResult.map((item) => (
              <CalendarCard event={item} key={item.id} openMore={openMore} />
            ))
          )}
        </section>
      </section>
      <Meetup
        isOpen={isMoreOpen}
        handleClose={handleClose}
        type="Волонтеры"
        address={event.address}
        contact={event.contact}
        title={event.title}
        description={event.description}
        startAt={event.startAt}
        endAt={event.endAt}
        seats={event.seats}
        takenSeats={event.takenSeats}
        needDescription
      />
    </>
  );
}

export default Calendar;
