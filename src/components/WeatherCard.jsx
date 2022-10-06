import React from 'react'
import Button from './Button'
import { InfoCard } from './InfoCard'
import TempCard from './TempCard'
import TitleCard from './TitleCard'

const WeatherCard = ({ weather, temperature }) => {

  console.log(weather)
  return (
    <article className='card'>
      <TitleCard
        weather={weather}
      />
      <TempCard
        temperature={temperature}
        weather={weather}
      />
      <InfoCard
        weather={weather} 
      />
      <Button
        temperature={temperature} 
      />
    </article>
  )
}

export default WeatherCard