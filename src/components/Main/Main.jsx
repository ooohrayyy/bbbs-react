import React from 'react';
import Description from '../Description/Description.jsx';
import Quote from '../Quote/Quote.jsx';
import Rubric from '../Rubric/Rubric.jsx';
import Stories from '../Stories/Stories.jsx';
import Video from '../Video/Video.jsx';
import Film from '../Film/Film.jsx';
import Question from '../Question/Question.jsx';
import Facebook from '../Facebook/Facebook.jsx';
import Article from '../Article/Article.jsx';

function Main() {
  return (
    <main className="main">
      <section className="lead page__section">
        <article className="card-container card-container_type_identical">
          <Description />
          <Stories />
        </article>
      </section>

      <section className="main-section page__section">
        <Rubric />
      </section>

      <section className="main-section page__section">
        <Quote />
      </section>

      <section className="main-section page__section cards-grid cards-grid_content_small-cards">
        <Film />
        <Film />
        <Film />
        <Film />
      </section>

      <section className="main-section page__section">
        <Video />
      </section>

      <section className="main-section page__section">
        <article className="card-container card-container_type_iframe">
          <Facebook />
          <div className="main-questions">
            <Question />
            <Question />
            <Question />
          </div>
        </article>
      </section>

      <section className="main-section page__section">
        <Article />
      </section>
    </main>
  );
}

export default Main;
