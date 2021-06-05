import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Done({ event, isOpen, handleClose }) {
  Modal.setAppElement(document.getElementById('page'));

  const { title, startDayMonth, endTime, startMonthGenitive, startTime } =
    event;

  function closeModal() {
    handleClose(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      className="popup__container popup__container_type_done"
      overlayClassName="popup popup_type_done"
      onRequestClose={closeModal}
      closeTimeoutMS={800}
    >
      <>
        <div className="calendar__image-done" />
        <button
          onClick={closeModal}
          className="popup__close popup__cancel"
          type="button"
        >
          <img alt="close" src={closeImage} />
        </button>
        <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done ">
          Вы записаны на мероприятие:
          <span>{`"${title}" `}</span>
          <span>{`${startDayMonth} ${startMonthGenitive} с ${startTime}–${endTime}`}</span>
        </h2>
        <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done">
          Если у вас не получится прийти — отмените, пожалуйста, запись.
        </h2>
        <button
          onClick={closeModal}
          className="button calendar__back popup__cancel"
          type="button"
        >
          Вернуться к календарю
        </button>
      </>
    </Modal>
  );
}

export default Done;

Done.propTypes = {
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
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};
