import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import closeImage from '../../../images/svg/popup_close.svg';

function Confirmation({
  event,
  isOpen,
  handleClose,
  onBookingEvent,
  butConf = 'Подтвердить запись',
  butEsc = 'Отменить',
}) {
  Modal.setAppElement(document.getElementById('page'));

  const { id, title, startDayMonth, endTime, startMonthGenitive, startTime } =
    event;

  function closeModal() {
    handleClose(false);
  }

  function handleBookingEventClick() {
    onBookingEvent(id);
    closeModal();
  }
  return (
    <Modal
      isOpen={isOpen}
      className="popup__container popup__container_type_confirmation"
      overlayClassName="popup popup_type_confirmation"
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
      <h2 className="section-title calendar__title_type_popup calendar__title_type_confirmation">
        Подтвердить запись на мероприятие:
        <span>{`"${title}" `}</span>
        <span>{`${startDayMonth} ${startMonthGenitive} с ${startTime}–${endTime}`}</span>
      </h2>
      <div className="calendar__buttons">
        <button
          onClick={handleBookingEventClick}
          className="button button_theme_light calendar__confirm"
          type="button"
        >
          {butConf}
        </button>
        <button
          onClick={closeModal}
          className="button popup__cancel"
          type="button"
        >
          {butEsc}
        </button>
      </div>
    </Modal>
  );
}

export default Confirmation;

Confirmation.propTypes = {
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
