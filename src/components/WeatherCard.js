import up from '../backgrounds/upload.png'
import down from '../backgrounds/arrow-down-sign.png'

const WeatherCard = (props) => {
    return (
        <>
        <div className="card">
            <h2 className="city">{props.weather.city}</h2>
            <h3 className="description">{props.weather.description}</h3>
            <div className="temperature">
                <h1 className="celsius">{props.weather.temp} °</h1>
                <div className="logo">
                <img src={props.weather.icon}></img>
                </div>
            </div>
            <div className="temperature-max-min">
                <p className="t-maxMinElement"><img width="10px" src={up}></img> {props.weather.temp_max}</p>  
                <p><img width="10px" src={down} ></img> {props.weather.temp_min}</p>  
            </div>
        </div>
        </>
    )
}

export default WeatherCard;