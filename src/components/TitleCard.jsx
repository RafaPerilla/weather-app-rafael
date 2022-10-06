import React from 'react'

const TitleCard = ({weather}) => {
  return (
    <div className='principal_card'>
      <h1 className='principal-title'>Weather App</h1>
      <h2 className='principal-city'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
    </div>
  )
}

export default TitleCard