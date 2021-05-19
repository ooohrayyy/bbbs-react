import Description from '../Description/Description.jsx';
import Quote from '../Quote/Quote.jsx';
import Rubric from '../Rubric/Rubric.jsx';
import Stories from '../Stories/Stories.jsx';
import Video from '../Video/Video.jsx';
import Film from '../Film/Film.jsx';
import Question from '../Question/Question.jsx';
import Facebook from '../Facebook/Facebook.jsx';

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
        <Quote
          content="Развитие детей-сирот отличается от развития детей, живущих в семьях.
          Все этапы развития у детей-сирот проходят с искажениями и имеют ряд
          негативных особенностей."
          colorStyle="card_color_blue"
        />
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
        <Quote
          content="У таких детей возникает ощущение отверженности. Оно приводит к
          напряженности и недоверию к людям и, как итог, к реальному неприятию
          себя и окружающих."
          colorStyle="card_color_green"
        />
      </section>
    </main>
  );
}

export default Main;
