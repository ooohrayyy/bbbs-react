import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import arrow from '../../images/svg/arrow-right.svg';

import RightsCard from './RightsCard/RightsCard';
import rightsCardsData from '../../assets/dev-data/rightsCardsData';

import Filter from '../Landing/Filter/Filter';
import filters from '../../assets/dev-data/filterTagsData';
import getFilteredTags from '../../utils/filterUtils';

function Rights() {
  const [selectedTags, setSelectedTags] = useState(filters.rights);

  function handleSlectedTag(tag) {
    const newTagsArray = getFilteredTags(tag, selectedTags);
    setSelectedTags(newTagsArray);
  }

  const cardsTotalCount = rightsCardsData.length;
  const screenWidth = window.screen.width;
  let cardsLimit;

  switch (true) {
    case screenWidth >= 1920:
      cardsLimit = 16;
      break;
    case screenWidth >= 1440:
      cardsLimit = 12;
      break;
    default:
      cardsLimit = 4;
  }

  const pageCount = Math.ceil(cardsTotalCount / cardsLimit);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(cardsLimit);

  function handlePageClick(e) {
    const pageNum = e.selected;
    if (pageNum > 0) {
      const currStart = pageNum * cardsLimit + 1;
      const currEnd = currStart + cardsLimit;
      setStart(currStart);
      setEnd(currEnd);
    }
  }

  return (
    <>
      <section className="lead page__section">
        <h1 className="main-title">Права детей</h1>
        <Filter
          tags={selectedTags}
          onSelectedTag={handleSlectedTag}
          type="radio"
        />
      </section>

      <section className="rights page__section">
        <div className="rights__line rights__line_stage_first" />
        <div className="rights__line rights__line_stage_second" />
        <div className="rights__line rights__line_stage_third" />

        {rightsCardsData
          .map((item, index) => (
            <RightsCard
              cardTitle={item.cardTitle}
              cardLink={item.cardLink}
              cardForm={item.cardForm}
              cardColor={item.cardColor}
              key={index}
            />
          ))
          .slice(start, end)}
      </section>

      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ReactPaginate
            pageCount={pageCount}
            previousLabel=""
            nextLabel={<img src={arrow} alt="стрелка вправо" />}
            breakLabel="..."
            containerClassName="pagination__list"
            pageClassName="pagination__list-item section-title"
            pageLinkClassName="pagination__link"
            activeLinkClassName="pagination__link pagination__link_active"
            nextClassName="pagination__arrow"
            onPageChange={handlePageClick}
            marginPagesDisplayed={1}
          />
        </nav>
      </section>
    </>
  );
}

export default Rights;
