import { React, useEffect } from 'react';

function UserMeetPhoto({ photo }) {
  useEffect(() => {}, [photo]);

  return (
    <div className="card card_content_media">
      <img src={photo} alt="Фото с встречи" className="personal-area__photo" />
    </div>
  );
}

export default UserMeetPhoto;
