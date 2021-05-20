import React, { useEffect, useState } from 'react';
import mock from '../../utils/mock';
import api from '../../utils/api';

import Description from '../Description/Description';
import Quote from '../Quote/Quote';
import Rubric from '../Rubric/Rubric';
import Stories from '../Stories/Stories';
import Video from '../Video/Video';
import Film from '../Film/Film';
import Question from '../Question/Question';
import Facebook from '../Facebook/Facebook';

function Main() {
  const [answer, setAnswer] = useState({});
  function isMockEnabled() {
    return process.env.REACT_APP_MOCK_ENABLED === 'true';
  }

  useEffect(() => {
    if (isMockEnabled()) {
      mock.initializeAxiosMockAdapter(api.instance);
    }
    api
      .getMain()
      .then((res) => setAnswer(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(answer);
  return (
    <main className="main">
      <section className="lead page__section">
        <article className="card-container card-container_type_identical">
          <Description />
          <Stories history={answer.history} />
        </article>
      </section>

      <section className="main-section page__section">
        <Rubric place={answer.place} />
      </section>

      <section className="main-section page__section">
        <Quote article={answer.articles[0]} />
      </section>

      <section className="main-section page__section cards-grid cards-grid_content_small-cards">
        <Film />
        <Film />
        <Film />
        <Film />
      </section>

      <section className="main-section page__section">
        <Video video={answer.video} />
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
        <Quote article={answer.articles[1]} />
      </section>
    </main>
  );
}

export default Main;
