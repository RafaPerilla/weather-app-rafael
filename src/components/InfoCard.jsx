import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloud, faDroplet, faEarth, faTemperature3, faWind } from '@fortawesome/free-solid-svg-icons'

export const InfoCard = ({ weather }) => {
  return (
    <section className='info_card'>
      <ul className='info_list'>
        <li className='list-elements'>
          <FontAwesomeIcon 
          className='icon'
          icon={faWind} />
          <h3 className='list-title'><span className='list_span'>Wind speed: </span>{weather?.wind.speed} m/s</h3>
        </li>
        <li className='list-elements'>
          <FontAwesomeIcon 
          className='icon'
          icon={faCloud} />
          <h3 className='list-title'><span className='list_span'>Clouds: </span>{weather?.clouds.all}%</h3>
        </li>
        <li className='list-elements'>
          <FontAwesomeIcon 
          className='icon'
          icon={faTemperature3} />
          <h3 className='list-title'><span className='list_span'>Pressure: </span>{weather?.main.pressure} hPa</h3>
        </li>
        <li className='list-elements'>
          <FontAwesomeIcon 
          className='icon'
          icon={faDroplet} />
          <h3 className='list-title'><span className='list_span'>Humidity: </span>{weather?.main.humidity}%</h3>
        </li>
        <li className='list-elements'>
          <FontAwesomeIcon 
          className='icon'
          icon={faEarth} />
          <h3 className='list-title'><span className='list_span'>Country Code: </span>{weather?.sys.country}</h3>
        </li>
      </ul>
    </section>

  )
}

export default InfoCard