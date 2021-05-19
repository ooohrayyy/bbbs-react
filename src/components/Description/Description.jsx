import stubLogo from '../../images/svg/calendar_logo.svg';

function Description() {
  return (
    <article class="card card_color_green stub">
      <div class="stub__upper-element">
        <a href="./index.html">
          <img
            src={stubLogo}
            alt="Логотип Старшие Братья Старшие Сестры России"
            class="stub__logo"
          ></img>
        </a>
      </div>
      <div class="stub__content">
        <h2 class="section-title stub__text">
          Наставники.про – цифоровая информационная платформа огрганизации
          «Старшие Братья Старшие Сестры». Созданная для поддержки наставников
          программы.
        </h2>
      </div>
    </article>
  );
}

export default Description;
