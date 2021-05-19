import React from 'react';

function FilterTag({ tagName, tagActiv, id }) {
  let classButton = '';
  if (tagActiv) {
    classButton = 'button tags__button tags__button_active';
  } else {
    classButton = 'button tags__button';
  }

  return (
    <li className="tags__list-item" key={id}>
      <button className={classButton} type="button">
        {tagName}
      </button>
    </li>
  );
}

export default FilterTag;
