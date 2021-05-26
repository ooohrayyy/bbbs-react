import { React, useEffect } from 'react';
import mock from '../utils/mock';
import api from '../utils/api';

import './App.css';

function App() {
  function isMockEnabled() {
    return process.env.REACT_APP_MOCK_ENABLED === 'true';
  }

  useEffect(() => {
    if (isMockEnabled()) {
      mock.initializeAxiosMockAdapter(api.instance);
    }
    api
      .bookEvent()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return <></>;
}

export default App;
