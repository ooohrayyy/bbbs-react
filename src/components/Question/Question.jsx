import React from 'react';
import { Link } from 'react-router-dom';

function Question({ question, rubric }) {
  return (
    <article className="question main-questions__item">
      <Link to="/questions" className="main-questions__link">
        <h2 className="section-title question__title main-questions__title">
          {question}
        </h2>
      </Link>
      <p className="rubric question__rubric main-questions__rubric">{rubric}</p>
    </article>
  );
}

export default Question;
