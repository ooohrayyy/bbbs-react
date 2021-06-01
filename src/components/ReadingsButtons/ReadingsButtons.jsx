import React from 'react';

import useLongPress from '../../utils/useLongPress';

function ReadingsButtons({
  onClickLeft,
  onClickRight,
  containerPosition,
  containerScrollWidth,
  containerOffsetWidth,
}) {
  const leftLongPress = useLongPress(onClickLeft, 100);
  const rightLongPress = useLongPress(onClickRight, 100);

  const leftButtonModificator =
    containerPosition === 0
      ? 'preview__button_left-grey'
      : 'preview__button_left';
  const rightButtonModificator =
    containerPosition >= containerScrollWidth - containerOffsetWidth
      ? 'preview__button_right-grey'
      : 'preview__button_right';

  return (
    <div className="preview__buttons">
      <button
        className={`preview__button ${leftButtonModificator}`}
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
        className={`preview__button ${rightButtonModificator}`}
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
