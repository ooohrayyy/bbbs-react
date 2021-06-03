import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

function VideoPopup({ isOpen, title, caption, film, handleClose }) {
  Modal.setAppElement(document.getElementById('page'));
  function closeModal() {
    handleClose(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      className="popup__box popup__box_type_video card"
      overlayClassName="popup popup_type_video"
      onRequestClose={closeModal}
      closeTimeoutMS={800}
    >
      <>
        <iframe
          title="video"
          className="card__video-iframe"
          src={film}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{title}</h2>
          <p className="caption card__title-caption">{caption}</p>
        </div>
      </>
    </Modal>
  );
}
VideoPopup.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  caption: PropTypes.string,
  film: PropTypes.string,
};

export default VideoPopup;
