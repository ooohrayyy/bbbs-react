import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Recomendation({ isOpen, handleClose, handleSubmit }) {
  Modal.setAppElement(document.getElementById('page'));
  const [photoText, setPhotoText] = useState('Добавить фото');
  function handleFileChange(e) {
    setPhotoText(e.target.files[0].name);
  }
  function closeModal() {
    handleClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      className="popup__container popup__container_type_recommendation"
      overlayClassName="popup recommendation"
      onRequestClose={closeModal}
      closeTimeoutMS={800}
    >
      <button
        onClick={closeModal}
        className="popup__close popup__cancel"
        type="button"
      >
        <img alt="close" src={closeImage} />
      </button>
      <legend className="section-title recommendation__popup-title">
        Если вы были в интересном месте и хотите порекомендовать его другим
        наставникам – заполните форму, и мы добавим вашу рекомендацию.
      </legend>
      <div className="popup__box-inputs">
        <input
          type="text"
          name="place"
          className="popup__input popup__input_type_middle"
          required
          placeholder="Название*"
        />
        <input
          type="text"
          name="website"
          className="popup__input popup__input_type_middle"
          placeholder="Сайт"
        />
      </div>
      <input
        type="text"
        name="address"
        className="popup__input"
        required
        placeholder="Адрес*"
      />
      <div className="popup__box-inputs radio">
        <input
          type="text"
          name="boy"
          id="boy"
          className="popup__input popup__input_type_low popup__input_type_radio"
          disabled
          placeholder="Мальчик"
        />
        <input type="radio" className="radio__button-boy" name="sex" required />
        <input
          type="text"
          name="girl"
          id="girl"
          className="popup__input popup__input_type_low popup__input_type_radio"
          disabled
          placeholder="Девочка"
        />
        <input
          type="radio"
          className="radio__button-girl"
          name="sex"
          required
        />
        <input
          type="number"
          name="age"
          className="popup__input popup__input_type_low"
          required
          placeholder="Возраст*"
        />
      </div>
      <input
        type="text"
        name="type"
        className="popup__input"
        required
        placeholder="Тип отдыха*"
      />
      <textarea
        className="popup__textarea"
        required
        placeholder="Комментарий* Поделитесь впечатлениями о проведенном времени"
      />

      <div className="popup__box-inputs">
        <label
          htmlFor="photo-input"
          className="button button_theme_light recommendation__add-button"
        >
          <input
            id="photo-input"
            type="file"
            onChange={handleFileChange}
            className="button recommendation__input-photo"
          />
        </label>
        <p className="recommendation__add-place">{photoText}</p>

        <button
          className="button button_theme_light recommendation__submit"
          type="submit"
          onClick={handleSubmit}
        >
          Отправить
        </button>
      </div>
    </Modal>
  );
}

export default Recomendation;

Recomendation.propTypes = {
  isOpen: PropTypes.bool,
};
