import { React, useState } from 'react';

function FilterTag({ tagName, tagActive, tagValue, id, onSelectedTag }) {
  const [isActive, setActive] = useState(tagActive);

  function handleClick(e) {
    const { value } = e.target;
    setActive(!isActive);
    onSelectedTag({ name: tagName, active: !isActive, value });
  }

  return (
    <li className="tags__list-item" key={id}>
      <button
        className={`button tags__button ${
          isActive ? 'tags__button_active' : ''
        }`}
        type="button"
        value={tagValue}
        onClick={handleClick}
      >
        {tagName}
      </button>
    </li>
  );
}

export default FilterTag;
