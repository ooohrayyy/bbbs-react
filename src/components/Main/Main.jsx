import React, { useEffect, useState } from 'react';
import mock from '../../utils/mock';
import api from '../../utils/api';
import { getParsedEvent } from '../../utils/calendarUtils';

import Description from '../Description/Description';
import Stories from '../Stories/Stories';
import Quote from '../Quote/Quote';
import Rubric from '../Rubric/Rubric';
import Video from '../Video/Video';
import Film from '../Film/Film';
import Question from '../Question/Question';
import Facebook from '../Facebook/Facebook';
import Preloader from '../Landing/Preloader/Preloader';
import Meetup from '../Popups/Meetup/Meetup';
import CalendarCard from '../Calendar/CalendarCard/CalendarCard';

function Main({ isAuthorized }) {
  const [answer, setAnswer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  mock.initializeAxiosMockAdapter(api.instance);

  useEffect(() => {
    api
      .getMain()
      .then((res) => {
        const parsedEvent = getParsedEvent(res.data.event);
        setAnswer({ ...res.data, event: parsedEvent });
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  function openMore() {
    setIsMoreOpen(true);
  }
  function handleClose() {
    setIsMoreOpen(false);
  }

  return (
    <>
      <section className="lead page__section">
        <article className="card-container card-container_type_identical">
          {isAuthorized &&
            (isLoading ? (
              <Preloader />
            ) : (
              <CalendarCard event={answer.event} openMore={openMore} />
            ))}
          {!isAuthorized && <Description />}

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
      {isLoading ? (
        <Preloader />
      ) : (
        <Meetup
          isOpen={isMoreOpen}
          handleClose={handleClose}
          type="??????????????????"
          event={answer.event}
          needDescription
        />
      )}
    </>
  );
}

export default Main;
