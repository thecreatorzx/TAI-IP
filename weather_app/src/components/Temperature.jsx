import { FaTemperatureLow } from "react-icons/fa6";
const Temperature = ({weatherData}) => {
  const date = new Date();
  const day = date.toLocaleString('en-us', {weekday:'long'});
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (
    <>
      <div className="temp">
        <div className="cityName"> {weatherData?weatherData.data[0].city_name:"N/A"}
          <span className="countryCode">({weatherData?weatherData.data[0].country_code:"N/A"})</span>
        </div>
        <div className="date">{weatherData?`${day}, ${month.slice(0,3)} ${year}`:"N/A"}</div>
        <span className="temperature">
          <FaTemperatureLow fontSize={".7em"}/> {weatherData?weatherData.data[0].temp:"N/A"}&deg;
        </span>
        <div className="description">{weatherData?weatherData.data[0].weather.description:"N/A"}</div>
      </div>
      <div className="time">
        <div className="observed">Observed : {weatherData?weatherData.data[0].ob_time:"N/A"}</div>
        <div className="updated">Updated :  {weatherData?`${year}-${date.getMonth()+1}-${date.getDate()} ${hour}:${minute}`:"N/A"}
        </div>
      </div>
    </>
  )
}

export default Temperature