import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';
import CalendarEvent from '../../Calendar/CalendarEvent/CalendarEvent';

function Meetup({
  id,
  isOpen,
  handleClose,
  address,
  contact,
  title,
  description,
  startAt,
  endAt,
  seats,
  booked,
  takenSeats,
  onBookingEvent,
}) {
  Modal.setAppElement(document.getElementById('page'));

  function closeModal() {
    handleClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      className={`popup__container popup__container_type_calendar ${
        booked ? 'popup__container_type_calendar_booked' : ''
      }`}
      overlayClassName="popup popup_type_description"
      onRequestClose={closeModal}
      closeTimeoutMS={800}
    >
      <button
        onClick={closeModal}
        className="popup__close popup__cancel"
        type="button"
      >
        <img alt="close" src={closeImage} />
      </button>
      <CalendarEvent
        closeMoreModal={closeModal}
        id={id}
        type="Волонтеры"
        address={address}
        contact={contact}
        title={title}
        description={description}
        startAt={startAt}
        endAt={endAt}
        seats={seats}
        booked={booked}
        takenSeats={takenSeats}
        needDescription
        onBookingEvent={onBookingEvent}
      />
    </Modal>
  );
}

export default Meetup;

Meetup.propTypes = {
  isOpen: PropTypes.bool,
};
