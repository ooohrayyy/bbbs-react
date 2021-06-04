import React from 'react';

import Question from '../Question/Question';

function Questions({ questions }) {
  return (
    <>
      {questions.map((item, index) => (
        <Question
          question={item.title}
          rubric={item.tags[0].name}
          key={index}
        />
      ))}
    </>
  );
}

export default Questions;
