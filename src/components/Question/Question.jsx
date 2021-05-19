import React from 'react';

function Question() {
  return (
    <article className="question main-questions__item">
      <a href="./questions.html" className="main-questions__link">
        <h2 className="section-title question__title main-questions__title">
          Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?
        </h2>
      </a>
      <p className="rubric question__rubric main-questions__rubric">рубрика</p>
    </article>
  );
}

export default Question;
