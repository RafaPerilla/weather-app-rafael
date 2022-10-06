import { useState } from "react"

const TempCard = ({weather}) => {
  
  return (
    <div className='temperature_card'>
      <img
      className="temperature_img"
      src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
      <h2 className='temperature_info'>"{weather?.weather[0].description}"</h2>
    </div>
  )
}

export default TempCard