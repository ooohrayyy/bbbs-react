import React from 'react';

function UserRegistredEvent({ title, startDayMonth, startMonth }) {
  return (
    <li className="personal-area__reg-event">
      <div className="personal-area__reg-event-date">
        <span className="personal-area__reg-event-day">{startDayMonth}</span>
        <span className="personal-area__reg-event-month">{startMonth}</span>
      </div>
      <p className="personal-area__reg-event-description">{title}</p>
    </li>
  );
}

export default UserRegistredEvent;
