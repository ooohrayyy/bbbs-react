import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Sucess({ isOpen, handleClose }) {
  Modal.setAppElement(document.getElementById('page'));

  function closeModal() {
    handleClose();
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
      justifyContent: 'center',
      alignItems: 'center',
      height: '618px',
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
      <form noValidate>
        <button
          onClick={closeModal}
          className="popup__close popup__cancel"
          type="button"
        >
          <img alt="close" src={closeImage} />
        </button>
        <div class="recommendation__logo" />
        <legend class="section-title recommendation__popup-title">
          Спасибо, мы проверим информацию, и скоро все пользователи смогут
          увидеть вашу рекомендацию
        </legend>
      </form>
    </Modal>
  );
}

export default Sucess;

Sucess.propTypes = {
  isOpen: PropTypes.bool,
};
