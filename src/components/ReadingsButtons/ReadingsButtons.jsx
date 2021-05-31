import React from 'react';

import useLongPress from '../../utils/useLongPress';

function ReadingsButtons({ onClickLeft, onClickRight }) {
  const leftLongPress = useLongPress(onClickLeft, 100);
  const rightLongPress = useLongPress(onClickRight, 100);

  return (
    <div className="preview__buttons">
      <button
        className="preview__button preview__button_left"
        type="button"
        label="left"
        onClick={onClickLeft}
        onMouseDown={leftLongPress.onMouseDown}
        onMouseUp={leftLongPress.onMouseUp}
        onMouseLeave={leftLongPress.onMouseLeave}
        onTouchStart={leftLongPress.onTouchStart}
        onTouchEnd={leftLongPress.onTouchEnd}
      />
      <button
        className="preview__button preview__button_right"
        type="button"
        label="right"
        onClick={onClickRight}
        onMouseDown={rightLongPress.onMouseDown}
        onMouseUp={rightLongPress.onMouseUp}
        onMouseLeave={rightLongPress.onMouseLeave}
        onTouchStart={rightLongPress.onTouchStart}
        onTouchEnd={rightLongPress.onTouchEnd}
      />
    </div>
  );
}

export default ReadingsButtons;
