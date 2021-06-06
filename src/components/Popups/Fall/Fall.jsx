import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

function Fall({ isOpen, handleClose }) {
  Modal.setAppElement(document.getElementById('page'));

  function closeModal() {
    handleClose(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      className="popup__container popup__container_type_fall"
      overlayClassName="popup popup_type_done"
      onRequestClose={closeModal}
      closeTimeoutMS={800}
    >
      <>
        <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-fall ">
          Что-то пошло не так, попробуйте записаться снова
        </h2>
        <button
          onClick={closeModal}
          className="button calendar__back popup__back"
          type="button"
        >
          Вернуться к мероприятию
        </button>
      </>
    </Modal>
  );
}

export default Fall;

Fall.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};
