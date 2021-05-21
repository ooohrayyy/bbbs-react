import { React, useEffect, useState } from 'react';
import mock from '../../utils/mock';
import api from '../../utils/api';
import UserMeetPhoto from '../UserMeetPhoto/UserMeetPhoto';

function UserEventForm() {
  const [photo, setPhoto] = useState('');
  const [file, setFile] = useState(null);

  const reader = new FileReader();

  reader.addEventListener('load', () => {
    setPhoto(reader.result);
  });

  mock.initializeAxiosMockAdapter(api.instance);

  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [story, setStory] = useState('');

  const [isUploadFile, setIsUploadFile] = useState(false);

  useEffect(() => {}, [photo]);

  function handlePlaceChange(e) {
    setPlace(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleStoryChange(e) {
    setStory(e.target.value);
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUploadFile() {
    setIsUploadFile(true);
  }

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

  function handleSubmit(e) {
    e.preventDefault();
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
          onSubmit={handleSubmit}
        >
          <input
            id="place-input"
            value={place}
            onChange={handlePlaceChange}
            type="text"
            name="place"
            placeholder="Место встречи"
            required
            className="personal-area__form-input"
            minLength="2"
            maxLength="30"
          />
          <input
            id="date-input"
            value={date}
            onChange={handleDateChange}
            type="date"
            name="date"
            placeholder="Дата&emsp;"
            required
            className="personal-area__form-input"
          />
          <textarea
            value={story}
            onChange={handleStoryChange}
            type="text"
            name="story"
            className="personal-area__form-input personal-area__form-input_type_textarea"
            placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
            required
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
            <button className="button" type="submit" disabled>
              Добавить
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default UserEventForm;
