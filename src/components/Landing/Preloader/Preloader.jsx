import React from 'react';
import './Preloader.css';
import loader from '../../../images/loading.png';

function Preloader() {
  return (
    <div className="preloader">
      <img className="loader" src={loader} alt="Loading..." />
    </div>
  );
}

export default Preloader;
