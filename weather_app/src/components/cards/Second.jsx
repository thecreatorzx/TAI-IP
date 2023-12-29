import { GiWindsock, GiWindHole } from "react-icons/gi";
import { FaWind } from "react-icons/fa";



const Second = ({weatherData}) => {
  return (
    <div className="card2">
      <div className="windangle"><i><GiWindsock /> Wind Direction(&deg;)</i><i> {weatherData?weatherData.data[0].wind_dir:"N/A"}</i></div>
      <div className="winddir"><i><GiWindHole /> Wind Direction</i><i>({weatherData?weatherData.data[0].wind_cdir_full:"N/A"}) {weatherData?weatherData.data[0].wind_cdir:"N/A"}</i></div>
      <div className="windspeed"><i><FaWind /> Wind Speed (m/s)</i><i> {weatherData?weatherData.data[0].wind_spd:"N/A"}</i></div>
    </div>
  )
}

export default Second