import React from 'react';

import FilterTag from '../FilterTag/FilterTag.jsx';

function Filter() {
  const initialItem = [
    {
      name: 'Все',
      active: true,
    },
    {
      name: 'Выбор наставников',
      active: false,
    },
    {
      name: 'Музеи',
      active: false,
    },
    {
      name: 'Парки',
      active: false,
    },
    {
      name: 'Театры',
      active: false,
    },
    {
      name: 'Спорт',
      active: false,
    },
    {
      name: 'Экскурсии',
      active: false,
    },
    {
      name: 'Секции',
      active: false,
    },
    {
      name: '8-10 лет',
      active: false,
    },
    {
      name: '11-13 лет',
      active: false,
    },
  ];

  return (
    <div class="tags">
      <ul class="tags__list">
        {initialItem.map((item, i) => (
          <FilterTag
            tagName={item.name}
            tagActive={item.active}
            id={i}
          ></FilterTag>
        ))}
        <li className="tags__list-item">
          <button className="button tags__button" type="button">
            Выбор наставников
          </button>
        </li>
        <li class="tags__list-item">
          <button className="button tags__button" type="button">
            Музеи
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
