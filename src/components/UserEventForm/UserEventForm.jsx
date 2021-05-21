import { React, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import mock from '../../utils/mock';
import api from '../../utils/api';
import UserMeetPhoto from '../UserMeetPhoto/UserMeetPhoto';

function UserEventForm() {
  mock.initializeAxiosMockAdapter(api.instance);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [photo, setPhoto] = useState('');
  const [file, setFile] = useState(null);
  const [isUploadFile, setIsUploadFile] = useState(false);

  // Использовать API FileReader чтобы переводить загруженные файлы в URL
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    setPhoto(reader.result);
  });

  useEffect(() => {}, [photo]);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUploadFile() {
    setIsUploadFile(true);
  }

  // Положить загруженную фотографию в экземпляр глобального класса FormData,
  // отправить на сервер и преобразовать полученный файл в URL с помощью API FileReader
  function onFileUpload() {
    const formData = new FormData();
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

  return (
    <article className="card-container card-container_type_personal-area">
      {!isUploadFile && (
        <div className="card personal-area__card personal-area__card_type_add-photo">
          <button
            onClick={onFileUpload}
            aria-label="Add photo"
            className="personal-area__add-photo-button"
            type="button"
          />
          <p className="caption personal-area__bottom-caption">
            Загрузить фото
          </p>
          <input
            type="file"
            onChange={handleFileChange}
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
            {...register('date', { required: true, valueAsDate: true })}
            id="date-input"
            type="date"
            name="date"
            placeholder="Дата&emsp;"
            className="personal-area__form-input"
          />
          <textarea
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('story', { required: true })}
            type="text"
            name="story"
            className="personal-area__form-input personal-area__form-input_type_textarea"
            placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
          />

          <div className="personal-area__rating">
            <button
              aria-label="Rate good"
              className="personal-area__rate personal-area__rate_type_good"
              type="button"
            />
            <button
              aria-label="Rate neutral"
              className="personal-area__rate personal-area__rate_type_neutral"
              type="button"
            />
            <button
              aria-label="Rate bad"
              className="personal-area__rate personal-area__rate_type_bad"
              type="button"
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
