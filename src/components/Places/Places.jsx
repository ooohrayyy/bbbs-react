import React from 'react';

// import Filter from '../Filter/Filter';
import Place from '../Place/Place';
// import Rubric from '../Rubric/Rubric';

import placesCards from '../../assets/dev-data/placesData';

function Places() {
  return (
    <main className="main">
      {/* <section className="lead page__section">
        <h1 className="main-title">Куда пойти</h1>
        <Filter />
      </section>

      <section className="main-card page__section">
        <Rubric />
      </section> */}

      <section className="cards-grid page__section">
        {placesCards.map((item) => (
          <Place item={item} key={item.id} />
        ))}
      </section>
    </main>
  );
}

export default Places;
