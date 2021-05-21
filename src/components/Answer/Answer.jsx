import React from 'react';

function Answer({ question, answer, rubric }) {
  return (
    <article className="question">
      <h2 className="section-title question__title">{question}</h2>
      <div className="question__wrap">
        <p className="rubric question__rubric">{rubric}</p>
        <button
          className="question__show-button"
          type="button"
          aria-label="Показать ответ"
          title="Показать ответ"
        />
      </div>
      <div className="question__answer">
        <p className="paragraph question__paragraph">{answer}</p>
      </div>
    </article>
  );
}

export default Answer;
