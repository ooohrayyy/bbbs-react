// Импортируем пакет axios
import axios from 'axios';

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8000',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  authUser() {
    this.instance.defaults.headers = {
      Authorization:
        'Bearer "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIwNDk5MjU1LCJqdGkiOiI3N2Q1MWNmNWM1ZGU0YzBmYjE3MDVlMDgzYjU4YjYyMSIsInVzZXJfaWQiOjF9.jPP3p030SSA4H72m1JpElYh-R-bF20CBcLwnxI7Lxjs"',
      ...this.instance.defaults.headers,
    };
    return this.instance.post('/token');
  }

  getCities() {
    return this.instance.get('/cities');
  }

  updateProfile() {
    return this.instance.get('/profile');
  }

  getMain() {
    return this.instance.get('/main');
  }

  getEvents() {
    return this.instance.get('/afisha/events');
  }

  bookEvent() {
    return this.instance.post('/afisha/event-participants');
  }

  addPhoto(data) {
    return this.instance.post('/event-photo', data);
  }

  getMeetings() {
    return this.instance.get('/meetings');
  }
}

// Создание экземпляра класса Api
const api = new Api();

export default api;
