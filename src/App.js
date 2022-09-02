import React from 'react';
import './App.css'
import CardsContainer from './components/Article/Cards/CardsContainer';
import FilterContainer from './components/Article/Filter/FilterContainer';
import Header from './components/Header/Header';
import MainTitleContainer from './components/MainTitle/MainTitleContainer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app__body'>
      <Header />
      <div className='app__flex container'>
        <MainTitleContainer />
        <Sidebar />
      </div>
      <div className='app__article container'>
        <FilterContainer />
        <CardsContainer />
      </div>
    </div>
  );
}
export default App;
