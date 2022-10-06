import React, { useState } from 'react'

const Button = ({temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true)
  const changeTemp = () => setIsCelsius(!isCelsius)

  return (
    <section className='button_card'>
      <h3 className='button_temp'>{isCelsius ? `${temperature?.celsius}°C` : `${temperature?.farenheit}°F`}</h3>
      <button
        className='button'
        onClick={changeTemp} >
        {isCelsius ? 'Degrees in °F' : 'Degrees in °C'}
      </button >
    </section>

  )
}

  export default Button