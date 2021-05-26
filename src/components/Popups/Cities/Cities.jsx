import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import mock from '../../../utils/mock';
import api from '../../../utils/api';
import City from '../City/City';
import Preloader from '../../Preloader/Preloader';

function Cities({ isOpen, handleClose, handleCities }) {
  Modal.setAppElement(document.getElementById('page'));
  const [answer, setAnswer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  mock.initializeAxiosMockAdapter(api.instance);

  useEffect(() => {
    api
      .getCities()
      .then((res) => {
        setAnswer(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  function closeModal() {
    handleClose();
  }
  function handleCity(id) {
    handleClose();
    handleCities(id);
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Modal
          isOpen={isOpen}
          className="popup__container popup__container_type_cities"
          overlayClassName="popup pupup_type_cities cities"
          onRequestClose={closeModal}
          closeTimeoutMS={800}
        >
          <h2 className="cities__title section-title">Выберите ваш город</h2>
          <ul className="cities__capitals">
            {answer.map(
              (item) =>
                item.isPrimary && (
                  <City
                    id={item.id}
                    name={item.name}
                    key={item.id}
                    handleCity={handleCity}
                  />
                ),
            )}
          </ul>
          <ul className="cities__region">
            {answer.map(
              (item) =>
                !item.isPrimary && (
                  <City
                    id={item.id}
                    name={item.name}
                    key={item.id}
                    handleCity={handleCity}
                  />
                ),
            )}
          </ul>
        </Modal>
      )}
    </>
  );
}

export default Cities;

Cities.propTypes = {
  isOpen: PropTypes.bool,
};
