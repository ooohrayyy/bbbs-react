import React from 'react';

function Quote() {
  return (
    <article className="card card_color_blue card_content_quote">
      <a href="./articles.html" className="card__link-wrap">
        <h3 className="chapter-title card__quote">
          Развитие детей-сирот отличается от развития детей, живущих в семьях.
          Все этапы развития у детей-сирот проходят с искажениями и имеют ряд
          негативных особенностей.
        </h3>
      </a>
      <a href="./articles.html" className="link card__link">
        читать статью
      </a>
    </article>
  );
}

export default Quote;
