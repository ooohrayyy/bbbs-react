import React from 'react';

function ReadingsButtons({ onClickLeft, onClickRight }) {
  return (
    <div className="preview__buttons">
      <button
        className="preview__button preview__button_left"
        type="button"
        label="left"
        onClick={onClickLeft}
      />
      <button
        className="preview__button preview__button_right"
        type="button"
        label="right"
        onClick={onClickRight}
      />
    </div>
  );
}

export default ReadingsButtons;
