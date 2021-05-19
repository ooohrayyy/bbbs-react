import React from 'react';

import Filter from '../Filter/Filter.jsx';
import Place from '../Place/Place.jsx';
import Rubric from '../Rubric/Rubric.jsx';

function Places() {
  // Заготовка для карточек мест
  const initialCard = [
    {
      rubric: 'Выбор наставника',
      title: 'Название места несколько слов',
      address: 'Адрес места в одну строку',
      link: '#',
      caption: 'Девочка, 10 лет. Познавательный',
      paragraph:
        'Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.\nАннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    },
    {
      rubric: '',
      title: 'Название места',
      address: 'Длинный адрес места в несколько строк, длинный адрес места.',
      link: '#',
      caption: '',
      paragraph:
        'Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.\nАннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    },
    {
      rubric: 'Выбор наставника',
      title: 'Фотосессия на природе',
      address: 'Адрес места в одну строку',
      link: '#',
      caption: 'Девочка, 10 лет. Познавательный',
      paragraph:
        'Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.\nАннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    },
  ];

  return (
    <main class="main">
      <section class="lead page__section">
        <h1 class="main-title">Куда пойти</h1>
        <Filter />
      </section>

      <section class="main-card page__section">
        <Rubric />
      </section>

      <section class="cards-grid page__section">
        {initialCard.map((item, i) => (
          <Place item={item} id={i} />
        ))}
      </section>
    </main>
  );
}

export default Places;
