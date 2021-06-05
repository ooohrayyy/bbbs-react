import React, { useEffect, useState, useContext } from 'react';
import CalendarCard from './CalendarCard/CalendarCard';
import Filter from '../Landing/Filter/Filter';
import filters from '../../assets/dev-data/filterTagsData';
import Preloader from '../Landing/Preloader/Preloader';
import {
  getFilteredData,
  sortEventsByDate,
  getInitialTags,
  getParsedEventsData,
} from '../../utils/calendarUtils';
import getFilteredTags from '../../utils/filterUtils';
import Meetup from '../Popups/Meetup/Meetup';
import Confirmation from '../Popups/Confirmation/Confirmation';
import Done from '../Popups/Done/Done';
import Fall from '../Popups/Fall/Fall';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import mock from '../../utils/mock';
import api from '../../utils/api';

function Calendar() {
  mock.initializeAxiosMockAdapter(api.instance);

  const currentUser = useContext(CurrentUserContext);

  const [selectedTags, setSelectedTags] = useState([]);
  const [cityEvents, setCityEvents] = useState([]);
  const [filteredEventsResult, setFilteredEventsResult] = useState([]);
  const [event, setEvent] = useState({});

  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [confirmationMadalIsOpen, setConfirmationMadalIsOpen] = useState(false);
  const [doneModalIsOpen, setDoneModalIsOpen] = useState(false);
  const [fallModalIsOpen, setFallModalIsOpen] = useState(false);

  // модальные окна
  const handleDoneModalOpen = () => setDoneModalIsOpen(true);
  const handleFallMadalOpen = () => setFallModalIsOpen(true);

  function openMore(item) {
    setEvent(item);
    setIsMoreOpen(true);
  }

  function handleConfirmationMadalOpen(item) {
    setEvent(item);
    setConfirmationMadalIsOpen(true);
  }

  function handleAllModalClose() {
    setIsMoreOpen(false);
    setConfirmationMadalIsOpen(false);
    setDoneModalIsOpen(false);
    setFallModalIsOpen(false);
  }

  // выбор тега
  function handleSlectedTag(tag) {
    const newTagsArray = getFilteredTags(tag, selectedTags);
    setSelectedTags(newTagsArray);
  }

  // фильтрация и сортировка по дате событий
  function getFiltredAndSortedEvents(tag, events) {
    const filteredEvents = getFilteredData(tag, events);
    sortEventsByDate(filteredEvents); // убрать, если события будут приходить отсортированные по дате
    setFilteredEventsResult(filteredEvents);
  }

  // запрос списка событий и установка текущего месяца в фильтре
  async function getAllEvents() {
    try {
      const { data } = await api.getEvents();
      const cityEvent = data.filter((i) => currentUser.city === i.city); // убрать, если данные будут приходить отфильтрованные по городу
      const parseDate = getParsedEventsData(cityEvent);
      setCityEvents(parseDate);
      if (filteredEventsResult.length === 0) {
        const initialTagValue = getInitialTags(filters.months, parseDate);
        setSelectedTags(initialTagValue);
        getFiltredAndSortedEvents(initialTagValue, parseDate);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  // запись на событие
  async function handleBookingEventClick(eventId) {
    const { user } = currentUser;
    try {
      await api.bookEvent({ id: user, event: eventId });
      handleDoneModalOpen();
      getAllEvents();
    } catch (err) {
      handleFallMadalOpen();
      console.log(err.message);
    }
  }

  useEffect(() => {
    getAllEvents();
  }, []);

  useEffect(() => {
    getFiltredAndSortedEvents(selectedTags, cityEvents);
  }, [cityEvents, selectedTags]);

  return (
    <>
      <section className="lead page__section">
        <h1 className="main-title">Календарь</h1>
        <Filter
          tags={selectedTags}
          onSelectedTag={handleSlectedTag}
          type="radio"
        />
        <section className="calendar-container">
          {filteredEventsResult.length === 0 ? (
            <Preloader />
          ) : (
            filteredEventsResult.map((item) => (
              <CalendarCard
                event={item}
                key={item.id}
                openMore={openMore}
                openConfirmationMadal={handleConfirmationMadalOpen}
                onBookingEvent={handleBookingEventClick}
                closeMoreModal={handleAllModalClose}
              />
            ))
          )}
        </section>
      </section>
      <Confirmation
        isOpen={confirmationMadalIsOpen}
        handleClose={handleAllModalClose}
        event={event}
        onBookingEvent={handleBookingEventClick}
      />
      <Done
        isOpen={doneModalIsOpen}
        handleClose={handleAllModalClose}
        event={event}
      />
      <Meetup
        isOpen={isMoreOpen}
        handleClose={handleAllModalClose}
        type="Волонтеры"
        event={event}
        needDescription
        booked={event.booked}
        onBookingEvent={handleBookingEventClick}
      />
      <Fall isOpen={fallModalIsOpen} handleClose={handleAllModalClose} />
    </>
  );
}

export default Calendar;
