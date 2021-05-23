import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Signin({ isOpen, onSignIn, onClose }) {
  Modal.setAppElement(document.getElementById('root'));

  const { register, handleSubmit } = useForm();

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

  function onSubmit() {
    onSignIn();
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onClose}
      closeTimeoutMS={800}
    >
      <form name="login-form" onSubmit={handleSubmit(onSubmit)}>
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
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('login', { required: true })}
          type="text"
          name="login"
          className="popup__input"
          required
          placeholder="Логин"
          style={{ width: '100%' }}
        />
        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', { required: true })}
          type="password"
          name="password"
          className="popup__input"
          required
          placeholder="Пароль"
          style={{ width: '100%' }}
        />
        <p className="popup__forgot-password ">Забыли пароль?</p>
        <button
          className="button button_theme_light popup__enter"
          type="submit"
        >
          Войти
        </button>
      </form>
    </Modal>
  );
}

export default Signin;

Signin.propTypes = {
  isOpen: PropTypes.bool,
  onSignIn: PropTypes.func,
  onClose: PropTypes.func,
};
