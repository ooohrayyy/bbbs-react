import { React, useState } from 'react';

function FilterTag({ tagName, tagActive, tagValue, onSelectedTag }) {
  const [isActive, setActive] = useState(tagActive);

  function handleClick(e) {
    const { value, name } = e.target;
    setActive(!isActive);
    onSelectedTag({ name, active: !isActive, value });
  }

  return (
    <li className="tags__list-item">
      <button
        className={`button tags__button ${
          isActive ? 'tags__button_active' : ''
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
