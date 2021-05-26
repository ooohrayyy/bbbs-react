import React from 'react';

function FilterTag({ tagName, tagActive, tagValue, onSelectedTag }) {
  function handleClick(e) {
    const { value, name } = e.target;
    onSelectedTag({ name, active: !tagActive, value: Number(value) });
  }

  return (
    <li className="tags__list-item">
      <button
        className={`button tags__button ${
          tagActive ? 'tags__button_active' : ''
        }`}
        type="button"
        value={tagValue}
        name={tagName}
        onClick={handleClick}
      >
        {tagName}
      </button>
    </li>
  );
}

export default FilterTag;
