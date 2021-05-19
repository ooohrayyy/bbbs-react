import React from 'react';

function Place({ item, id }) {
  return (
    <article className="card-container card-container_type_article" id={id}>
      <div className="card card_color_green">
        {item.rubric && <p className="rubric card__rubric">{item.rubric}</p>}
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{item.title}</h2>
          <p className="caption card__title-caption">{item.address}</p>
        </div>
        {item.link && (
          <a href={item.link} className="link card__link">
            перейти на сайт
          </a>
        )}
      </div>

      <div className="card card_content_annotation">
        <div className="card__content">
          {item.caption && (
            <p className="caption card__annotation-caption">{item.caption}</p>
          )}

          <div className="card__annotation">
            <p className="paragraph card__paragraph">{item.paragraph}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Place;
