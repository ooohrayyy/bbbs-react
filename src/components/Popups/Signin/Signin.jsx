import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Signin({ isOpen, onSignIn, onClose }) {
  Modal.setAppElement(document.getElementById('root'));

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
      height: '559px',
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
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onClose}
      closeTimeoutMS={800}
    >
      <>
        <button
          onClick={onClose}
          className="popup__close popup__cancel"
          type="button"
        >
          <img alt="close" src={closeImage} />
        </button>
        <h2 className="section-title popup__title_type_sign-in">Вход</h2>
        <p className="paragraph popup__sign-in">
          Вход в личный кабинет доступен наставникам программы «Старшие Братья
          Старшие Сёстры».
        </p>
        <p className="paragraph popup__sign-in">
          Пожалуйста, введите логин и пароль из письма. Если вам не приходило
          письмо, свяжитесь с вашим куратором.
        </p>
        <input
          type="text"
          className="popup__input"
          required
          placeholder="Логин"
        />
        <input
          type="password"
          className="popup__input"
          required
          placeholder="Пароль"
        />
        <p className="popup__forgot-password ">Забыли пароль?</p>
        <button
          onClick={onSignIn}
          className="button button_theme_light popup__enter"
          type="button"
        >
          Войти
        </button>
      </>
    </Modal>
  );
}

export default Signin;

Signin.propTypes = {
  isOpen: PropTypes.bool,
  onSignIn: PropTypes.func,
  onClose: PropTypes.func,
};
