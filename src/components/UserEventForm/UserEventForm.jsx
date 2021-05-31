import { React, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import mock from '../../utils/mock';
import api from '../../utils/api';
import UserMeetPhoto from '../UserMeetPhoto/UserMeetPhoto';

function UserEventForm({ onAddMeeting, onAddMeetingClick }) {
  mock.initializeAxiosMockAdapter(api.instance);

  const { register, handleSubmit } = useForm();

  const [photo, setPhoto] = useState('');
  const [isUploadFile, setIsUploadFile] = useState(false);
  const [currRate, setCurrRate] = useState('');

  // Использовать API FileReader чтобы переводить загруженные файлы в URL
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    setPhoto(reader.result);
  });

  useEffect(() => {}, [photo]);

  function handleUploadFile() {
    setIsUploadFile(true);
  }

  // Положить загруженную фотографию в экземпляр глобального класса FormData,
  // отправить на сервер и преобразовать полученный файл в URL с помощью API FileReader
  function onFileUpload(e) {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append('userPhoto', file, file.name);

    api
      .addPhoto(formData)
      .then((res) => {
        setPhoto(res.config.data.get('userPhoto'));
        reader.readAsDataURL(file);
        handleUploadFile();
      })
      .catch((err) => err.message);
  }

  function onSubmit(data) {
    // Временное решение для присвоения новой карточке уникального id
    const min = 10;
    const max = 50;
    const num = Math.floor(Math.random() * (max - min) + min);
    onAddMeeting({
      id: num,
      // eslint-disable-next-line object-shorthand
      photo: photo,
      rate: data.rate,
      ...data,
    });
    onAddMeetingClick();
  }

  function handleRate(e) {
    if (currRate === e.target.value) {
      setCurrRate('');
    } else {
      setCurrRate(e.target.value);
    }
  }

  return (
    <article className="card-container card-container_type_personal-area">
      {!isUploadFile && (
        <div className="card personal-area__card personal-area__card_type_add-photo">
          <div className="personal-area__add-photo-button" />
          <p className="caption personal-area__bottom-caption">
            Загрузить фото
          </p>
          <input
            id="photo-input"
            type="file"
            onChange={onFileUpload}
            className="personal-area__input-photo"
          />
        </div>
      )}
      {isUploadFile && <UserMeetPhoto photo={photo} />}
      <div className="card personal-area__card personal-area__card_type_content">
        <form
          action=""
          name="add-story-form"
          className="personal-area__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('place', { required: true })}
            id="place-input"
            type="text"
            name="place"
            placeholder="Место встречи"
            className="personal-area__form-input"
            minLength="2"
            maxLength="30"
          />
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('date', {
              required: true,
              pattern: 'd{4}-d{2}-d{2}',
            })}
            id="date-input"
            type="date"
            name="date"
            placeholder="Дата&emsp;"
            className="personal-area__form-input"
          />
          <textarea
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('description', { required: true })}
            type="text"
            name="description"
            className="personal-area__form-input personal-area__form-input_type_textarea"
            placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
          />

          <div className="personal-area__rating">
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('rate', { required: true })}
              onClick={handleRate}
              id="rate_good"
              value="good"
              type="radio"
              name="rate"
              className={`personal-area__rate personal-area__rate_type_good ${
                currRate === 'good' && 'personal-area__rate_type_active-good'
              }`}
            />
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('rate', { required: true })}
              onClick={handleRate}
              id="rate_neutral"
              value="neutral"
              type="radio"
              name="rate"
              className={`personal-area__rate personal-area__rate_type_neutral ${
                currRate === 'neutral' &&
                'personal-area__rate_type_active-neutral'
              }`}
            />
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('rate', { required: true })}
              onClick={handleRate}
              id="rate_bad"
              value="bad"
              type="radio"
              name="rate"
              className={`personal-area__rate personal-area__rate_type_bad ${
                currRate === 'bad' && 'personal-area__rate_type_active-bad'
              }`}
            />
            <p className="caption personal-area__rating-label">
              Оцените проведенное время
            </p>
          </div>

          <div className="personal-area__buttons">
            <button className="button personal-area__delete" type="button">
              Удалить
            </button>
            <button className="button" type="submit">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default UserEventForm;
