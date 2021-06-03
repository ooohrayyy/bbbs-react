import React from 'react';

import FilterTagRadio from '../FilterTags/FilterTagRadio/FilterTagRadio';
import FilterTagCheckbox from '../FilterTags/FilterTagCheckbox/FilterTagCheckbox';

function Filter({ tags, onSelectedTag, type }) {
  return (
    <div className="tags">
      <ul className="tags__list">
        {tags.map((item, i) =>
          type === 'radio' ? (
            <FilterTagRadio
              key={i}
              tagName={item.name}
              tagActive={item.active}
              tagValue={item.value}
              onSelectedTag={onSelectedTag}
            />
          ) : (
            <FilterTagCheckbox
              key={i}
              tagName={item.name}
              tagActive={item.active}
              tagValue={item.value}
              onSelectedTag={onSelectedTag}
            />
          ),
        )}
      </ul>
    </div>
  );
}

export default Filter;
