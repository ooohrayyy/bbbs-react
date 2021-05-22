import React from 'react';
import mock from '../../utils/mock';
import api from '../../utils/api';
import UserArea from '../UserArea/UserArea';

import './App.css';

function App() {
  const [meetings, setMeetings] = React.useState([]);

  mock.initializeAxiosMockAdapter(api.instance);

  React.useEffect(() => {
    api
      .getMeetings()
      .then(({ data }) => {
        setMeetings(data);
      })
      .catch((err) => err.message);
  }, []);

  function handleAddMeeting(meeting) {
    setMeetings([meeting, ...meetings]);
  }

  return <UserArea meetings={meetings} onAddMeeting={handleAddMeeting} />;
}

export default App;
