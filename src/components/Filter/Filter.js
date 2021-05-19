import React from 'react';
import FilterTag from '../FilterTag/FilterTag';

function Filter() {
  const initialItem = [
    {
      name: 'Все',
      activ: true,
    },
    {
      name: 'Выбор наставников',
      activ: false,
    },
    {
      name: 'Музеи',
      activ: false,
    },
    {
      name: 'Парки',
      activ: false,
    },
    {
      name: 'Театры',
      activ: false,
    },
    {
      name: 'Спорт',
      activ: false,
    },
    {
      name: 'Экскурсии',
      activ: false,
    },
    {
      name: 'Секции',
      activ: false,
    },
    {
      name: '8-10 лет',
      activ: false,
    },
    {
      name: '11-13 лет',
      activ: false,
    },
  ];

  return (
    <div class="tags">
      <ul class="tags__list">
        {initialItem.map((item, i) => (
          <FilterTag
            tagName={item.name}
            tagActiv={item.activ}
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
