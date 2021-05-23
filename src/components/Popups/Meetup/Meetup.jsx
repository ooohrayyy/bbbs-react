import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';
import CalendarEvent from '../../CalendarEvent/CalendarEvent';

function Meetup({
  isOpen,
  handleClose,
  address,
  contact,
  title,
  description,
  startAt,
  endAt,
  seats,
  takenSeats,
}) {
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
      justifyContent: 'space-between',
      height: '670px',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      backdropFilter: 'blur(7px)',
    },
  };
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
      <>
        <button
          onClick={closeModal}
          className="popup__close popup__cancel"
          type="button"
        >
          <img alt="close" src={closeImage} />
        </button>
        <CalendarEvent
          type="Волонтеры"
          address={address}
          contact={contact}
          title={title}
          description={description}
          startAt={startAt}
          endAt={endAt}
          seats={seats}
          takenSeats={takenSeats}
          needDescription
        />
      </>
    </Modal>
  );
}

export default Meetup;

Meetup.propTypes = {
  isOpen: PropTypes.bool,
};
