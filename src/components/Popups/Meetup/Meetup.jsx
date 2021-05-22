import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Meetup({
  isOpen,
  handleMeetup,
  id,
  type,
  address,
  contact,
  title,
  description,
  startAt,
  endAt,
  seats,
  takenSeats,
}) {
  const [modalIsOpen, setIsOpen] = React.useState(isOpen);
  Modal.setAppElement(document.getElementById('page'));

  function closeModal() {
    setIsOpen(false);
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
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <>
        <button
          onClick={closeModal}
          className="popup__close popup__cancel"
          type="button"
        >
          <img alt="close" src={closeImage} />
        </button>
        <div className="calendar__caption">
          <div className="calendar__info">
            <p className="calendar__type">Волонтёры + дети</p>
            <p className="calendar__weekday">Декабрь / понедельник</p>
          </div>
          <div className="calendar__about">
            <h2 className="section-title calendar__title calendar__title_type_popup">
              Занятие с выпускниками: как составить резюме
            </h2>
            <p className="calendar__date">20</p>
          </div>
        </div>
        <div className="calendar__meetup">
          <ul className="calendar__info-list">
            <li className="calendar__info-item">
              <p className="calendar__time">12:00–14:00</p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__place">
                Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)
              </p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__contact">Александра, +7 926 356-78-90</p>
            </li>
          </ul>
          <div className="calendar__description">
            <p className="paragraph calendar__desc-paragraph">
              Наконец-то наступила весна и мы пережили эту долгую зиму! И
              возможно, что внутренних сил и ресурса сейчас не так много, а до
              окончания учебного года ещё целых несколько месяцев. Поэтому
              приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO",
              которую мы хотим посвятить теме поиска моральных сил, смыслов и
              внутреннего ресурса для общения и взаимодействия с нашими
              подопечными.
            </p>
          </div>
          <div className="calendar__submit">
            <button
              className="button button_theme_light button_action_confirm"
              type="button"
            >
              Записаться
            </button>
            <p className="calendar__place-left">Осталось 5 мест</p>
          </div>
        </div>
      </>
    </Modal>
  );
}

export default Meetup;

Meetup.propTypes = {
  isOpen: PropTypes.bool,
  handleSignin: PropTypes.func,
};
