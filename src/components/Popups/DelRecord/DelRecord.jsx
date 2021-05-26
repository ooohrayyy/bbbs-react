import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

function DelRecord({ isOpen, title, handleClose, handleConfirm }) {
  Modal.setAppElement(document.getElementById('page'));

  return (
    <Modal
      isOpen={isOpen}
      className="popup__container popup__container_type_delete"
      overlayClassName="popup popup_type_confirmation"
      onRequestClose={handleClose}
      closeTimeoutMS={800}
    >
      <form>
        <h2 className="section-title calendar__title_type_popup calendar__title_type_delete">
          {title}
        </h2>
        <div className="calendar__buttons">
          <button
            onClick={handleConfirm}
            className="button button_theme_gray calendar__confirm"
            type="button"
          >
            Удалить
          </button>
          <button
            onClick={handleClose}
            className="button popup__cancel"
            type="button"
          >
            Отмена
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default DelRecord;

DelRecord.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  handleConfirm: PropTypes.func,
};
