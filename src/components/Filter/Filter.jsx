import { React, useState } from 'react';
import { months } from '../../utils/initialFlterStates';

import FilterTag from '../FilterTag/FilterTag';

function Filter() {
  const [selectedTag, setSelectedTag] = useState([]);

  function handleSlectedTag(tag) {
    setSelectedTag([tag, ...selectedTag]);
  }

  return (
    <div className="tags">
      <ul className="tags__list">
        {months.map((item, i) => (
          <FilterTag
            tagName={item.name}
            tagActive={item.active}
            tagValue={item.value}
            id={i}
            onSelectedTag={handleSlectedTag}
          />
        ))}
        <li className="tags__list-item">
          <button className="button tags__button" type="button">
            Выбор наставников
          </button>
        </li>
        <li className="tags__list-item">
          <button className="button tags__button" type="button">
            Музеи
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
