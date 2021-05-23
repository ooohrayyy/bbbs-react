import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Done({ title, isOpen, handleClose }) {
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
      <>
        <div className="calendar__image-done" />
        <button
          onClick={closeModal}
          className="popup__close popup__cancel"
          type="button"
        >
          <img alt="close" src={closeImage} />
        </button>
        <p className="section-title calendar__title_type_popup calendar__title_type_popup-done ">
          {title}
        </p>
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
