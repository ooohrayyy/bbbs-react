import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Done({
  title,
  isOpen,
  handleClose,
  dayMonth,
  endTime,
  mothGenitive,
  time,
}) {
  Modal.setAppElement(document.getElementById('page'));

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
          Подтвердить запись на мероприятие:
          <p>{`"${title}" `}</p>
          <p>{`${dayMonth} ${mothGenitive} с ${time}–${endTime}`}</p>
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
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};
