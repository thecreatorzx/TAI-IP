import { TbWorldLatitude, TbWorldLongitude, TbSunMoon,  } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GiAtSea, GiSunRadiations } from "react-icons/gi";
import { LuSunrise,LuSunset } from "react-icons/lu";
import { IoEarthOutline } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { FaWeight } from "react-icons/fa";

const Third = ({weatherData}) => {
  return (
    <div className="card3">
      <div className="lat"><i><TbWorldLatitude /> Latitude (&deg;)</i><i>{weatherData?weatherData.data[0].lat:"N/A"}</i></div>
      <div className="lon"><i><TbWorldLongitude /> Longitude (&deg;)</i><i>{weatherData?weatherData.data[0].lon:"N/A"}</i></div>
      <div className="gust"><i><FaWeight /> Pressure (mb)</i><i>{weatherData?weatherData.data[0].pres:"N/A"}</i></div>
      <div className="slp"><i><GiAtSea /> Sea Level Pressure (mb)</i><i>{weatherData?weatherData.data[0].slp:"N/A"}</i></div>
      <div className="pod"><i><TbSunMoon/> Part of Day (Day/Night)</i><i>{weatherData?weatherData.data[0].pod:"N/A"}</i></div>
      <div className="rise"><i><LuSunrise /> Sunrise (hh:mm)</i><i>{weatherData?weatherData.data[0].sunrise:"N/A"}</i></div>
      <div className="set"><i><LuSunset /> Sunset (hh:mm)</i><i>{weatherData?weatherData.data[0].sunset:"N/A"}</i></div>
      <div className="tzone"><i><IoEarthOutline /> TimeZone</i><i>{weatherData?weatherData.data[0].timezone:"N/A"}</i></div>
      <div className="uv"><i><GiSunRadiations /> UV Index(0-11+)</i><i>{weatherData?weatherData.data[0].uv:"N/A"}</i></div>
      <div className="vis"><i><MdOutlineVisibility /> Visibility (km)</i><i>{weatherData?weatherData.data[0].vis:"N/A"}</i></div>
    </div>
  )
}

export default Third