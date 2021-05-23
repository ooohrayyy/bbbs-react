import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import mock from '../../../utils/mock';
import api from '../../../utils/api';
import City from '../City/City';

function Cities({ isOpen, handleClose, handleCities }) {
  Modal.setAppElement(document.getElementById('page'));
  const [answer, setAnswer] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);
  mock.initializeAxiosMockAdapter(api.instance);

  useEffect(() => {
    api
      .getCities()
      .then((res) => {
        setAnswer(res.data);
        // setIsLoading(false);
        console.log(answer);
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
  const customStyles = {
    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 2,
      margin: '75px auto 0',
      borderRadius: '30px',
      backgroundColor: '#ffffff',
      boxSizing: 'border-box',
      alignItems: 'center',
      padding: '50px 85px 0',
      justifyContent: 'flex-start',
      maxWidth: '400px',
      maxHeight: '547px',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      closeTimeoutMS={800}
    >
      <>
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
      </>
    </Modal>
  );
}

export default Cities;

Cities.propTypes = {
  isOpen: PropTypes.bool,
};
