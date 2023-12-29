import First from "./cards/First"
import Second from "./cards/Second"
import Third from "./cards/Third"
import { Suspense } from "react"
import Waiting from "./Waiting"
const Cards = ({weatherData}) => {
  return (
    <>
      <Suspense fallback={<Waiting/>}>
        <First weatherData= {weatherData}/>
        <Second weatherData = {weatherData}/>
        <Third weatherData = {weatherData}/>
      </Suspense>
    </>
  )
}

export default Cards