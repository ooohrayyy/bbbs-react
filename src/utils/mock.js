// Импортируем пакет axios-mock-adapter
import MockAdapter from 'axios-mock-adapter';

// Импортируем файлы json с заготовками данных для разных типов запросов
import token from '../assets/mock-data/token.json';
import cities from '../assets/mock-data/cities.json';
import profile from '../assets/mock-data/profile.json';
import main from '../assets/mock-data/main.json';
import events from '../assets/mock-data/events.json';
import eventParticipants from '../assets/mock-data/event-participants.json';
import meetings from '../assets/mock-data/meetings.json';

class Mock {
  constructor(params) {
    this.params = params;
  }

  // Обработчики запросов к псевдо-серверу
  authUser() {
    return [200, this.params.token];
  }

  getCities() {
    return [200, this.params.cities];
  }

  updateProfile() {
    return [200, this.params.profile];
  }

  getMain() {
    return [200, this.params.main];
  }

  getEvents() {
    return [200, this.params.events];
  }

  bookEvent() {
    return [200, this.params.eventParticipants];
  }

  addPhoto(config) {
    this.params.photo = config;
    return [200, this.params.photo];
  }

  getMeetings() {
    return [200, this.params.meetings];
  }

  // Эмулятор сервера
  initializeAxiosMockAdapter(instance) {
    const mock = new MockAdapter(instance);
    mock.onPost('/token').reply(() => this.authUser());
    mock.onGet('/cities').reply(() => this.getCities());
    mock.onGet('/profile').reply(() => this.updateProfile());
    mock.onGet('/main').reply(() => this.getMain());
    mock.onGet('/afisha/events').reply(() => this.getEvents());
    mock.onPost('/afisha/event-participants').reply(() => this.bookEvent());
    mock.onPost('/event-photo').reply((config) => this.addPhoto(config));
    mock.onGet('/meetings').reply(() => this.getMeetings());
  }
}

// Создание экземпляра класса Mock
const mock = new Mock({
  token,
  cities,
  profile,
  main,
  events,
  eventParticipants,
  meetings,
});

export default mock;
