import { TbChartBubble } from "react-icons/tb";
import { MdOutlineWbCloudy } from "react-icons/md";
import { GiDew } from "react-icons/gi";


const First = ({weatherData}) => {
  return (
    <div className="card1">
      <div className="aqi"><i><TbChartBubble /> AQ Index</i><i> {weatherData?weatherData.data[0].aqi:"N/A"}</i></div>
      <div className="clouds"><i><MdOutlineWbCloudy /> Clouds(%)</i><i> {weatherData?weatherData.data[0].clouds:"N/A"}</i></div>
      <div className="dewpt"><i><GiDew /> Dew Point(&deg;C)</i><i>{weatherData?weatherData.data[0].dewpt:"N/A"}</i></div>
      <div className="sources">Sources:
      <i>&#9672; {weatherData?weatherData.data[0].sources[0]:"N/A"}</i>
      <i>&#9672; {weatherData?weatherData.data[0].sources[1]:"N/A"}</i>
      <i>&#9672; {weatherData?weatherData.data[0].sources[2]:"N/A"}</i> </div>
    </div>
  )
}

export default First