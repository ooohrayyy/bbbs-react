import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import illustration404 from '../../animations/Illustration_404.json';

function PageNotFound() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('.page-404__image'),
      animationData: illustration404,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <section className="page-404">
      <div className="page-404__container">
        <div className="page-404__image" />
        <h2 className="page-404__title">404</h2>
        <p className="page-404__subtitle">
          К сожалению, запрашиваемая страница не найдена. Попробуйте перейти на
          главную страницу
        </p>
        <Link to="/" className="button button_theme_light page-404__button">
          Вернутся на главную
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
