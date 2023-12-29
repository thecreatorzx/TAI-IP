import { useEffect } from "react";

const Settings = ({city,getResponse, handleInputChange,setting,setSetting}) => {
  const night = ["#212d3b"," #732f3f", "#54647c84"," #ce3050", "white"],
  day = ["whitesmoke"," rgba(184, 184, 184, 0.458)","#3a4a6253","#7b7b7b"," rgb(66, 66, 66)"], 
  blue = ["#5397e2","#0000","#6aa6e5","#0000","white"],
  pink =["rgb(45, 2, 76)","rgba(238, 130, 238, 0.936)","rgba(202, 112, 202, 0.443)","rgb(76, 0, 130)","white"];
  let theme="Night";
  const changeTheme = (color)=>{
    switch (color){
      case "Night":
        theme = night;
        break;
      case "Day":
        theme = day;
        break;
      case "Blue":
        theme = blue;
        break; 
      case "Pink":
        theme = pink;
        break;
    }
  document.querySelector(':root').style.setProperty('--color-1', theme[0])
  document.querySelector(':root').style.setProperty('--color-2', theme[1])
  document.querySelector(':root').style.setProperty('--color-3', theme[2])
  document.querySelector(':root').style.setProperty('--color-4', theme[3])
  document.querySelector(':root').style.setProperty('--color-5', theme[4])
 
 }
 useEffect(()=>
 changeTheme(theme),[])
  return (
    <>
      {setting&&(<div className="settings">
        <form>
          <input
            type="text"
            id="cityInput" 
            placeholder='Enter City Name'
            value = {city}
            onChange={handleInputChange} />
          {city?(
          <button onClick={
            ()=>{setSetting(false); 
              getResponse();}
          }>Get Weather Updates</button>):(
          <button disabled >Get Weather Updates</button>)}
        </form>
          <button onClick={()=>setSetting(false)} className="close">X </button>
          <div className="otherSettings">
            <div className="theme">
              <i>Colour scheme:</i>
              <div className="themeOptions">  
              <>
                <input  type="radio" name="theme" id="theme1"/>
                <label onClick={()=>changeTheme("Night")} htmlFor="theme1">NIGHT</label>
              </>
              <>
                <input type="radio" name="theme" id="theme2" />
                <label onClick={()=>changeTheme("Day")} htmlFor="theme2">DAY</label>
              </>
              <>
                <input type="radio" name="theme" id="theme3" />
                <label onClick={()=>changeTheme("Blue")} htmlFor="theme3">BLUE</label>
              </>
              <>
                <input type="radio" name="theme" id="theme4" />
                <label onClick={()=>changeTheme("Pink")} htmlFor="theme4">PINK</label>
              </>
              </div>
            </div>

          </div>
      </div>)}
    </>
  )
}

export default Settings