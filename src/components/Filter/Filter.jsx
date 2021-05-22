import React from 'react';

import FilterTag from '../FilterTag/FilterTag';

function Filter({ tags, onSelectedTag }) {
  return (
    <div className="tags">
      <ul className="tags__list">
        {tags.map((item, i) => (
          <FilterTag
            key={i}
            tagName={item.name}
            tagActive={item.active}
            tagValue={item.value}
            onSelectedTag={onSelectedTag}
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;
