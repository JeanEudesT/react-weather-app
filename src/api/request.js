import axios from 'axios';

const getWeatherFromCityName = async (city) => {
    const APPID = '5e5a3a615ff3d328ff594d1141594b8f';
    const weatherFromAPI = await axios.get('http://api.openweathermap.org/data/2.5/weather', { 
        params: { 
            'q' : city,
            APPID,
            'units' : 'metric',
        } 
    });
    return weatherFromAPI;
}

export default getWeatherFromCityName;