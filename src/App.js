import React, {useState} from 'react';
import Welcome from './components/Welcome'
import './App.css';
import PeopleList from './components/PeopleList';
import Favorites from './components/Favorites';
import PlanetList from './components/PlanetList';
import DetailedView from './components/DetailedView';
import Create from './components/Create';

function App() {
  const [currentScreen, setCurrentScreen] = useState('peopleScreen');
  const [detailedPerson, setDetailedPerson] = useState(null);
  const [favoritePeople, setFavoritePeople] = useState([]);
  const [favoritePlanets, setFavoritePlanets] = useState([]);

  console.log(favoritePlanets);
  let content= null;
  switch(currentScreen){
    case 'welcomeScreen':
      content = (
        <Welcome changeScreen={() => setCurrentScreen('peopleScreen')}></Welcome>
      )
      break;
    case 'peopleScreen':
      content = (
        <PeopleList changeScreen={(param) => {setCurrentScreen('detailedScreen'); setDetailedPerson(param)}} setFavoritePeople={(person) => {setFavoritePeople(favoritePeople => favoritePeople.concat(person))}}></PeopleList>
      )
      break;
    case 'favoriteScreen':
      content = (
        <Favorites changeScreen={(param) => {setCurrentScreen('detailedScreen'); setDetailedPerson(param)}} favoritePeople={favoritePeople} favoritePlanets={favoritePlanets} setFavoritePeople={(param) => {setFavoritePeople(param)}} setFavoritePlanets={(planet) => {setFavoritePlanets(planet)}} ></Favorites>
      )
      break;
    case 'planetScreen':
      content = (
        <PlanetList setFavoritePlanets={(planet) => {setFavoritePlanets(favoritePlanets =>  favoritePlanets.concat(planet))}}></PlanetList>
      )
      break;
    case 'detailedScreen':
      content = (
        <DetailedView person={detailedPerson}></DetailedView>
      )
      break;
    case 'createScreen':
        content = (
          <Create setFavoritePeople={(person) => {setFavoritePeople(favoritePeople => favoritePeople.concat(person))}}></Create>
        )
        break;
    default:
      break;

  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
        <button onClick={() => setCurrentScreen('favoriteScreen')}>My favorites</button>
        <button onClick={() => setCurrentScreen('peopleScreen')}>List people </button>
        <button onClick={() => setCurrentScreen('planetScreen')}>List planets </button>
        <button onClick={() => setCurrentScreen('createScreen')}>Add  </button>
        </div>
      </header>
      <main>
        {content}
      </main>
      <span></span>
    </div>
  );
}

export default App;
