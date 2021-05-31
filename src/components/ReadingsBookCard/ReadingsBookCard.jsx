import React from 'react';

function ReadingsBookCard({ title, author, year, annotation, color }) {
  let colorModificator;

  switch (color) {
    case 'pink':
      colorModificator = 'book_color_pink';
      break;
    case 'blue':
    default:
      colorModificator = 'book_color_blue';
  }

  return (
    <article className="preview__card card-container">
      <div className="card card_content_book">
        <div className={`book ${colorModificator}`}>
          <h2 className="section-title book__title">{title}</h2>
          <div className="book__info">
            <p className="caption book__author">{author}</p>
            <p className="caption book__year">{year} год</p>
          </div>
        </div>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content">
          <div className="card__annotation">
            <p className="paragraph card__paragraph">{annotation}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReadingsBookCard;
