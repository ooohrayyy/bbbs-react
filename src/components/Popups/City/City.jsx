import React from 'react';
import PropTypes from 'prop-types';

function City({ id, name, handleCity }) {
  function handleClick() {
    handleCity(id);
  }

  return (
    <li className="cities__name">
      <p onClick={handleClick} className="cities__link">
        {name}
      </p>
    </li>
  );
}

City.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default City;
