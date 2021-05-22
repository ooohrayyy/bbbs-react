import React from 'react';

import Header from '../Header/Header';
// import Calendar from '../Calendar/Calendar';
// import Main from '../Main/Main';
// import AboutUs from '../AboutUs/AboutUs';
// import Places from '../Places/Places';
// import Answers from '../Answers/Answers';
import Readings from '../Readings/Readings';
// import Footer from '../Footer/Footer';

// import answersData from '../../assets/dev-data/answersData';

import './App.css';

function App() {
  return (
    <>
      <Header />
      {/* <Calendar /> */}
      {/* <Main /> */}
      {/* <AboutUs /> */}
      {/* <Places /> */}
      {/* <Answers questions={answersData} /> */}
      <Readings />
      {/* <Footer /> */}
    </>
  );
}

export default App;
