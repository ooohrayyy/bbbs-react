import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import closeImage from '../../../images/svg/popup_close.svg';

function Recomendation({ isOpen, handleClose }) {
  Modal.setAppElement(document.getElementById('page'));

  const [photoText, setPhotoText] = useState('Добавить фото');

  function handleFileChange(e) {
    setPhotoText(e.target.files[0].name);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function closeModal() {
    handleClose();
    reset();
  }

  function onSubmit(data) {
    console.log(data);
    closeModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      className="popup__container popup__container_type_recommendation"
      overlayClassName="popup recommendation"
      onRequestClose={closeModal}
      closeTimeoutMS={800}
    >
      <form name="recommendation-form" onSubmit={handleSubmit(onSubmit)}>
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
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('place', {
              required: true,
              minLength: 2,
              maxLength: 40,
            })}
            type="text"
            name="place"
            className="popup__input popup__input_type_middle"
            placeholder="Название*"
          />
          {errors.place?.type === 'required' && (
            <span className="popup__error">Введите название</span>
          )}
          {errors.place?.type === 'minLength' && (
            <span className="popup__error">
              Длина названия должна быть не менее двух символов
            </span>
          )}
          {errors.place?.type === 'maxLength' && (
            <span className="popup__error">
              Длина названия должна быть не более сорока символов
            </span>
          )}
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('website', {
              required: true,
            })}
            type="url"
            name="website"
            className="popup__input popup__input_type_middle"
            placeholder="Сайт"
          />
          {errors.website?.type === 'required' && (
            <span className="popup__error">Введите сайт</span>
          )}
        </div>
        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('address', {
            required: true,
            minLength: 2,
            maxLength: 60,
          })}
          type="text"
          name="address"
          className="popup__input"
          placeholder="Адрес*"
          style={{ width: '100%' }}
        />
        {errors.address?.type === 'required' && (
          <span className="popup__error">Введите адрес</span>
        )}
        {errors.address?.type === 'minLength' && (
          <span className="popup__error">
            Длина адреса должна быть не менее двух символов
          </span>
        )}
        {errors.address?.type === 'maxLength' && (
          <span className="popup__error">
            Длина адреса должна быть не более шестидесяти символов
          </span>
        )}
        <div className="popup__box-inputs radio">
          <input
            type="text"
            name="boy"
            id="boy"
            className="popup__input popup__input_type_low popup__input_type_radio"
            disabled
            placeholder="Мальчик"
          />
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('sex', { required: true })}
            type="radio"
            className="radio__button-boy"
            name="sex"
          />
          {errors.sex?.type === 'required' && (
            <span className="popup__error">Укажите пол ребенка</span>
          )}
          <input
            type="text"
            name="girl"
            id="girl"
            className="popup__input popup__input_type_low popup__input_type_radio"
            disabled
            placeholder="Девочка"
          />
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('sex', { required: true })}
            type="radio"
            className="radio__button-girl"
            name="sex"
          />
          {errors.sex?.type === 'required' && (
            <span className="popup__error">Укажите пол ребенка</span>
          )}
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('age', { required: true })}
            type="number"
            name="age"
            className="popup__input popup__input_type_low"
            placeholder="Возраст*"
          />
          {errors.age?.type === 'required' && (
            <span className="popup__error">Укажите возраст ребенка</span>
          )}
        </div>
        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('type', { required: true })}
          type="text"
          name="type"
          className="popup__input"
          placeholder="Тип отдыха*"
          style={{ width: '100%' }}
        />
        {errors.type?.type === 'required' && (
          <span className="popup__error">Укажите тип отдыха</span>
        )}
        <textarea
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('text', { required: true })}
          name="text"
          className="popup__textarea"
          placeholder="Комментарий* Поделитесь впечатлениями о проведенном времени"
          style={{ width: '100%' }}
        />
        {errors.text?.type === 'required' && (
          <span className="popup__error">Добавьте комментарий</span>
        )}

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
          >
            Отправить
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Recomendation;

Recomendation.propTypes = {
  isOpen: PropTypes.bool,
};
