import { React, useEffect, useState } from 'react';
import CalendarCard from '../CalendarCard/CalendarCard';
import Filter from '../Filter/Filter';
import filters from '../../assets/dev-data/filterTagsData';
import Preloader from '../Preloader/Preloader';
import {
  getFilteredTags,
  getFilteredData,
  sortEventsByDate,
  getInitialTags,
} from '../../utils/calendarUtils';
import Meetup from '../Popups/Meetup/Meetup';
import Confirmation from '../Popups/Confirmation/Confirmation';
import Done from '../Popups/Done/Done';

function Calendar({ cityEvents, onBookingEvent, isRegisteredEvent }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredEventsResult, setFilteredEventsResult] = useState([]);
  const [event, setEvent] = useState({});

  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [confirmationMadalIsOpen, setConfirmationMadalIsOpen] = useState(false);
  const [doneModalIsOpen, setDoneModalIsOpen] = useState(false);

  function handleDoneModalOpen(value) {
    setDoneModalIsOpen(value);
  }

  useEffect(() => {
    if (selectedTags.length !== 0) {
      handleDoneModalOpen(isRegisteredEvent); // подумать, как лучше сделать
      const filteredEvents = getFilteredData(selectedTags, cityEvents);
      sortEventsByDate(filteredEvents);
      setFilteredEventsResult(filteredEvents);
    } else {
      const initialTagValue = getInitialTags(filters.months, cityEvents);
      const filteredEvents = getFilteredData(initialTagValue, cityEvents);
      sortEventsByDate(filteredEvents);
      setFilteredEventsResult(filteredEvents);
      setSelectedTags(initialTagValue);
    }
  }, [cityEvents]);

  useEffect(() => {
    const filteredEvents = getFilteredData(selectedTags, cityEvents);
    sortEventsByDate(filteredEvents);
    setFilteredEventsResult(filteredEvents);
  }, [selectedTags]);

  function handleSlectedTag(tag) {
    const newTagsArray = getFilteredTags(tag, selectedTags);
    setSelectedTags(newTagsArray);
  }

  // модальные окна
  function openMore(item) {
    setEvent(item);
    setIsMoreOpen(true);
  }
  function handleAllModalClose() {
    setIsMoreOpen(false);
    setConfirmationMadalIsOpen(false);
    setDoneModalIsOpen(false);
  }

  function handleConfirmationMadalOpen(item) {
    setEvent(item);
    setConfirmationMadalIsOpen(true);
  }

  return (
    <>
      <section className="lead page__section">
        <h1 className="main-title">Календарь</h1>
        <Filter tags={selectedTags} onSelectedTag={handleSlectedTag} />
        <section className="calendar-container page__section">
          {filteredEventsResult.length === 0 ? (
            <Preloader />
          ) : (
            filteredEventsResult.map((item) => (
              <CalendarCard
                event={item}
                key={item.id}
                openMore={openMore}
                openConfirmationMadal={handleConfirmationMadalOpen}
                onBookingEvent={onBookingEvent}
                closeMoreModal={handleAllModalClose}
              />
            ))
          )}
        </section>
      </section>
      <Confirmation
        isOpen={confirmationMadalIsOpen}
        handleClose={handleAllModalClose}
        title={event.title}
        dayMonth={event.dayMonth}
        endTime={event.endTime}
        mothGenitive={event.mothGenitive}
        time={event.time}
        id={event.id}
        onBookingEvent={onBookingEvent}
      />
      <Done
        isOpen={doneModalIsOpen}
        handleClose={handleAllModalClose}
        title={event.title}
        dayMonth={event.dayMonth}
        endTime={event.endTime}
        mothGenitive={event.mothGenitive}
        time={event.time}
      />
      <Meetup
        isOpen={isMoreOpen}
        handleClose={handleAllModalClose}
        type="Волонтеры"
        address={event.address}
        contact={event.contact}
        id={event.id}
        title={event.title}
        description={event.description}
        startAt={event.startAt}
        endAt={event.endAt}
        seats={event.seats}
        takenSeats={event.takenSeats}
        needDescription
        onBookingEvent={onBookingEvent}
      />
    </>
  );
}

export default Calendar;
