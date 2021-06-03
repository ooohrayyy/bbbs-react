import React from 'react';

function MakePlace({ handleClick }) {
  return (
    <div className="card place-card">
      <h2 className="section-title place-card__text">
        Если вы были в интересном месте и хотите порекомендовать его другим
        наставникам –
        <span
          role="button"
          className="place-card__span-accent"
          onClick={handleClick}
          tabIndex={0}
        >
          заполните форму
        </span>
        , и мы добавим вашу рекомендацию.
      </h2>
    </div>
  );
}

export default MakePlace;
