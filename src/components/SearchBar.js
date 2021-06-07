import getWeatherFromCityName from '../api/request.js';

const SearchBar = (props) => {
    const search = async (e) => {
      if (e.key !== 'Enter') return;
      const w = await getWeatherFromCityName(props.query);
      const weatherInfos = getInfosFromWeather(w.data);
      props.setWeather(weatherInfos);
      props.setQuery('');
    }

    return (
        <div className="searchBarContainer"><input type="text" className="searchBar" onChange={(e) => props.setQuery(e.target.value)} onKeyPress={search}></input></div>
    )
}

function getInfosFromWeather(data){
    const iconurl = 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
    return {
      city: data.name,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      sunset: data.sys.sunrise,
      sunrise: data.sys.sunset,
      description: data.weather[0].main,
      icon: iconurl,
    }
  }

export default SearchBar;