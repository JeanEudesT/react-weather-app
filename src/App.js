import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';


function App() {
  const [ weather, setWeather ] = useState({});
  const [ query, setQuery ] = useState('');

  return (
    <>
    <SearchBar setWeather={setWeather} setQuery={setQuery} query={query}></SearchBar>
    <WeatherCard weather={weather}></WeatherCard>
    </>
  );
}

export default App;
