import React from 'react';

function Place({ item, id }) {
  return (
    <article class="card-container card-container_type_article" id={id}>
      <div class="card card_color_green">
        {item.rubric && <p class="rubric card__rubric">{item.rubric}</p>}
        <div class="card__title-wrap">
          <h2 class="section-title card__title">{item.title}</h2>
          <p class="caption card__title-caption">{item.address}</p>
        </div>
        {item.link && (
          <a href={item.link} class="link card__link">
            перейти на сайт
          </a>
        )}
      </div>

      <div class="card card_content_annotation">
        <div class="card__content">
          {item.caption && (
            <p class="caption card__annotation-caption">{item.caption}</p>
          )}

          <div class="card__annotation">
            <p class="paragraph card__paragraph">{item.paragraph}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Place;
