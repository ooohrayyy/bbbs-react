import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';
import CalendarEvent from '../../Calendar/CalendarEvent/CalendarEvent';

function Meetup({ event, isOpen, handleClose, onBookingEvent }) {
  Modal.setAppElement(document.getElementById('page'));

  function closeModal() {
    handleClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      className={`popup__container popup__container_type_calendar ${
        event.booked ? 'popup__container_type_calendar_booked' : ''
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
        event={event}
        closeMoreMadal={closeModal}
        type="Волонтеры"
        needDescription
        onBookingEvent={onBookingEvent}
      />
    </Modal>
  );
}

export default Meetup;

Meetup.propTypes = {
  event: PropTypes.shape({
    address: PropTypes.string,
    contact: PropTypes.string,
    title: PropTypes.string,
    booked: PropTypes.bool,
    startMonth: PropTypes.string,
    startDayWeek: PropTypes.string,
    startTime: PropTypes.string,
    startDayMonth: PropTypes.string,
    endTime: PropTypes.string,
    remainSeats: PropTypes.number,
    id: PropTypes.number,
    description: PropTypes.string,
    startMonthGenitive: PropTypes.string,
  }),
  onBookingEvent: PropTypes.func,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};
