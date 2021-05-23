import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import closeImage from '../../../images/svg/popup_close.svg';

function Confirmation({
  title,
  isOpen,
  handleClose,
  handleConfirm,
  butConf = 'Подтвердить запись',
  butEsc = 'Отменить',
}) {
  Modal.setAppElement(document.getElementById('page'));

  function closeModal() {
    handleClose(false);
  }
  const customStyles = {
    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 2,
      margin: '75px auto 0',
      padding: '50px 100px',
      borderRadius: '30px',
      maxWidth: '770px',
      maxHeight: '80vh',
      backgroundColor: '#ffffff',
      boxSizing: 'border-box',
      height: '670px',
      justifyContent: 'center',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      closeTimeoutMS={800}
    >
      <form>
        <button
          onClick={closeModal}
          className="popup__close popup__cancel"
          type="button"
        >
          <img alt="close" src={closeImage} />
        </button>
        <h2 className="section-title calendar__title_type_popup calendar__title_type_confirmation">
          {title}
        </h2>
        <div className="calendar__buttons">
          <button
            onClick={handleConfirm}
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
      </form>
    </Modal>
  );
}

export default Confirmation;

Confirmation.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  handleConfirm: PropTypes.func,
  butConf: PropTypes.string,
  butEsc: PropTypes.string,
};
