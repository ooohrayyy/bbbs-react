import React, { useEffect, useState } from 'react';
import mock from '../../utils/mock';
import api from '../../utils/api';

import Description from '../Description/Description';
import Stories from '../Stories/Stories';
import Quote from '../Quote/Quote';
import Rubric from '../Rubric/Rubric';
import Video from '../Video/Video';
import Film from '../Film/Film';
import Question from '../Question/Question';
import Facebook from '../Facebook/Facebook';
import Preloader from '../Preloader/Preloader';

function Main() {
  const [answer, setAnswer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  mock.initializeAxiosMockAdapter(api.instance);

  useEffect(() => {
    api
      .getMain()
      .then((res) => {
        setAnswer(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <main className="main">
      <section className="lead page__section">
        <article className="card-container card-container_type_identical">
          <Description />
          {isLoading ? <Preloader /> : <Stories history={answer.history} />}
        </article>
      </section>

      <section className="main-section page__section">
        {isLoading ? <Preloader /> : <Rubric place={answer.place} />}
      </section>

      <section className="main-section page__section">
        {isLoading ? <Preloader /> : <Quote article={answer.articles[0]} />}
      </section>

      <section className="main-section page__section cards-grid cards-grid_content_small-cards">
        {isLoading ? (
          <Preloader />
        ) : (
          answer.movies.map((item) => <Film key={item.id} item={item} />)
        )}
      </section>

      <section className="main-section page__section">
        {isLoading ? <Preloader /> : <Video video={answer.video} />}
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
        {isLoading ? <Preloader /> : <Quote article={answer.articles[1]} />}
      </section>
    </main>
  );
}

export default Main;
