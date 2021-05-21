import React from 'react';

function Answer({ question, answer, rubric }) {
  const [answerIsShown, setAnswerIsShown] = React.useState(false);

  function handleAnswerExpand() {
    if (answerIsShown) {
      setAnswerIsShown(false);
    } else {
      setAnswerIsShown(true);
    }
  }

  const buttonClass = answerIsShown
    ? 'question__show-button question__show-button_active'
    : 'question__show-button';

  const answerClass = answerIsShown
    ? 'question__answer question__answer_visible'
    : 'question__answer';

  return (
    <article className="question">
      <h2
        className="section-title question__title"
        onClick={handleAnswerExpand}
      >
        {question}
      </h2>
      <div className="question__wrap">
        <p className="rubric question__rubric">{rubric}</p>
        <button
          className={buttonClass}
          type="button"
          onClick={handleAnswerExpand}
          aria-label="Показать ответ"
          title="Показать ответ"
        />
      </div>
      <div className={answerClass}>
        <p className="paragraph question__paragraph">{answer}</p>
      </div>
    </article>
  );
}

export default Answer;
