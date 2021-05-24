import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Sucess({ isOpen, handleClose }) {
  Modal.setAppElement(document.getElementById('page'));

  function closeModal() {
    handleClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      className="
          popup__container
          popup__container_type_recommendation
          popup__container_type_recommendation-finish"
      overlayClassName="popup recommendation recommendation_type_finish"
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
