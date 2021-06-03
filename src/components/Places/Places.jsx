import React, { useState, useEffect } from 'react';

import Filter from '../Landing/Filter/Filter';
import Place from './Place/Place';
import Rubric from '../Rubric/Rubric';

import filters from '../../assets/dev-data/filterTagsData';
import getFilteredTags from '../../utils/filterUtils';
import placesCards from '../../assets/dev-data/placesData';
import MakePlace from './MakePlace/MakePlace';
import Recomendation from '../Popups/Recommendation/Recommendation';
import Sucess from '../Popups/Sucess/Sucess';

function Places({ isAuthorized }) {
  const [selectedTags, setSelectedTags] = useState(filters.rubrics);
  const [isRecomendationOpen, setIsRecomendationOpen] = useState(false);
  const [isSucessOpen, setIsSucessOpen] = useState(false);
  const [rubricIndex, setRubricIndex] = useState(-1);
  const isRubricNeed = isAuthorized; // сейчас только авторизация, а затем должно добавиться условие по выбранному значению фильтра "Все"
  function handleMakePlace() {
    setIsRecomendationOpen(true);
  }
  function handleClose() {
    setIsRecomendationOpen(false);
    setIsSucessOpen(false);
  }
  function handleSubmit() {
    setIsRecomendationOpen(false);
    setIsSucessOpen(true);
  }

  function handleSlectedTag(tag) {
    const newTagsArray = getFilteredTags(tag, selectedTags);
    setSelectedTags(newTagsArray);
  }

  useEffect(() => {
    if (isRubricNeed) {
      // необходимо выбрать карточку "Выбор наставника" с самой новой датой для этого сортируем по дате по убыванию
      placesCards.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return 1;
        }
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        return 0;
      });
      // ищем первый объект созданный наставником
      setRubricIndex(
        placesCards.findIndex((item) => item.chosen === 'Выбор наставника'),
      );
    }
  }, [isAuthorized]);

  return (
    <>
      <main className="main">
        <section className="lead page__section">
          <h1 className="main-title">Куда пойти</h1>
          <Filter
            tags={selectedTags}
            onSelectedTag={handleSlectedTag}
            type="checkbox"
          />
        </section>
        {isAuthorized && <MakePlace handleClick={handleMakePlace} />}
        {rubricIndex > -1 && (
          <section className="main-card page__section">
            <Rubric place={placesCards[rubricIndex]} />
          </section>
        )}
        <section className="cards-grid page__section">
          {placesCards.map(
            (item, i) =>
              i !== rubricIndex && <Place item={item} key={item.id} />,
          )}
        </section>
      </main>
      <Recomendation
        isOpen={isRecomendationOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
      <Sucess isOpen={isSucessOpen} handleClose={handleClose} />
    </>
  );
}

export default Places;
