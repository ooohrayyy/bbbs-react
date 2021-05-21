import { React, useEffect } from 'react';
// import PropTypes from 'prop-types';

function UserMeetPhoto({ photo }) {
  useEffect(() => {
    console.log('photo is ', photo);
  }, [photo]);

  return (
    <div className="card card_content_media">
      <img src={photo} alt="Фото с встречи" className="personal-area__photo" />
    </div>
  );
}

// UserMeetPhoto.propTypes = {

// };

export default UserMeetPhoto;
