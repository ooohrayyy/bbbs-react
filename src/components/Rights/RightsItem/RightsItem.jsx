import React from 'react';
import PropTypes from 'prop-types';
import arrow from '../../../images/svg/arrow-right.svg';

function RightsItem({ title }) {
  return (
    <>
      <div className="article-lead__top-overlay" />
      <div className="article-lead__top" />
      <div className="article-lead__overlay" />
      <section className="article-lead">
        <div className="article-lead__content">
          <h1 className="chapter-title article-lead__title">{title}</h1>
          <p className="section-title article-lead__text">
            Развитие детей-сирот отличается от&nbsp;развития детей, живущих
            в&nbsp;семьях. Все этапы развития у&nbsp;детей-сирот проходят
            с&nbsp;искажениями и&nbsp;имеют ряд негативных особенностей:
            замедленный темп психического развития, низкий уровень
            интеллектуального развития, позднее формирование навыков
            саморегуляции и&nbsp;правил поведения, бедную эмоциональную сферу
            и&nbsp;воображение.
          </p>
        </div>
      </section>

      <section className="article page__section page__section_rights">
        <div className="article__container">
          <h2 className="section-title article__subtitle">
            Отрицательный образ себя
          </h2>
          <p className="paragraph">
            У&nbsp;таких детей возникает ощущение отверженности. Оно приводит
            к&nbsp;напряженности и&nbsp;недоверию к&nbsp;людям&nbsp;и, как итог,
            к&nbsp;реальному неприятию себя и&nbsp;окружающих. В&nbsp;ходе
            дальнейших взаимоотношений с&nbsp;окружающими негативное отношение
            к&nbsp;себе усиливается. Причиной формирования отрицательного образа
            себя, является также и&nbsp;недостаток безусловной любви, т.&nbsp;е.
            любви не&nbsp;за&nbsp;что-то, а&nbsp;просто, потому что&nbsp;он,
            ребенок, есть. И&nbsp;домашний ребенок может быть заброшен
            на&nbsp;няню, а&nbsp;в&nbsp;старшем возрасте безнадзорен.
          </p>

          <h2 className="section-title article__subtitle">
            Особенности психофизического развития и эмоциональной сферы
            детей-сирот
          </h2>
          <ul className="card article__card">
            <li className="article__card-list-item">
              <p className="paragraph">
                замедленное развитие познавательной деятельности (мало
                интересуются окружающим миром).
              </p>
            </li>
            <li className="article__card-list-item">
              <p className="paragraph">эмоциональная бедность.</p>
            </li>
            <li className="article__card-list-item">
              <p className="paragraph">
                отсутствует интерес к оценке взрослого.
              </p>
            </li>
            <li className="article__card-list-item">
              <p className="paragraph">
                отсутствует переживание неуспеха в деятельности. Нет потребности
                в положительной оценке взрослых и сверстников.
              </p>
            </li>
            <li className="article__card-list-item">
              <p className="paragraph">
                не умеют дифференцировать успешное и неуспешное действие.
              </p>
            </li>
            <li className="article__card-list-item">
              <p className="paragraph">отставание в развитии речи.</p>
            </li>
            <li className="article__card-list-item">
              <p className="paragraph">нарушения самоидентичности.</p>
            </li>
            <li className="article__card-list-item">
              <p className="paragraph">
                интеллектуальное развитие характеризуется дисгармоничностью,
                несбалансированностью видов мышления. Предметное и наглядное
                мышление у детей-сирот является главным: что видят, о том и
                думают.
              </p>
            </li>
            <li className="article__card-list-item">
              <p className="paragraph">
                вербальное (словесное) мышление достигает возрастной нормы к 6-и
                годам, а невербальное значительно отстает и формируется уже в
                школьном возрасте.
              </p>
            </li>
          </ul>

          <h2 className="section-title article__subtitle">
            Младший школьный возраст
          </h2>
          <p className="paragraph">
            Для воспитанников младшего школьного возраста характерны ярко
            выраженные мотивы, непосредственно связанные с их повседневной
            деятельностью в детском доме: выполнением режима проживания в
            детском доме, правил поведения в детском доме и в школе, тогда как у
            семейных детей этой возрастной группы мотивы их деятельности и
            общения значительно богаче и разнообразнее. Такая ограниченность и
            бедность мотивационной сферы связаны с условиями проживания детей в
            детском доме и их недостаточно полным общением со взрослыми.
          </p>

          <h2 className="section-title article__subtitle">
            Заголовок в одну строку
          </h2>
          <div className="card article__card card_color_yellow">
            <p className="paragraph">
              Для воспитанников младшего школьного возраста характерны ярко
              выраженные мотивы, непосредственно связанные с их повседневной
              деятельностью в детском доме: выполнением режима проживания в
              детском доме, правил поведения в детском доме и в школе, тогда как
              у семейных детей этой возрастной группы мотивы их деятельности и
              общения значительно богаче и разнообразнее. Такая ограниченность и
              бедность мотивационной сферы связаны с условиями проживания детей
              в детском доме и их недостаточно полным общением со взрослыми.
            </p>
          </div>

          <div className="next-page">
            <div className="next-page__img card_color_green" />
            <a href="#" className="next-page__link" target="_self">
              <h2 className="section-title next-page__title">
                Льготы детей на жилье
              </h2>
              <img
                src={arrow}
                alt="Стрелка"
                className="next-page__arrow-icon"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

RightsItem.propTypes = {
  title: PropTypes.string,
};

export default RightsItem;
