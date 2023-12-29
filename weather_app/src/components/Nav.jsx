import { IoSettingsSharp } from "react-icons/io5";
import { GrRefresh } from "react-icons/gr";
import { WiDayThunderstorm } from "react-icons/wi";


const Nav = ({setSetting,handleSubmit}) => {
  return (
    <nav>
    <div className="logo">WEATHERIA&nbsp;<WiDayThunderstorm size={"2rem"}/></div>
    <div className="settingIcon"><GrRefresh size={"1.5rem"} onClick={()=>handleSubmit}/><IoSettingsSharp size={"1.6rem"} onClick={()=>setSetting(true)}/></div>
    </nav>
  )
}

export default Nav