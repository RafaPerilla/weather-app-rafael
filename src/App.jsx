import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Loading from './components/Loading';
import WeatherCard from './components/WeatherCard';

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()

  useEffect(() => {
    //Esta es la funcion que se ejecuta cuando llega la informacion de nuestra ubicacion
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setCoords(obj)
    }
    //Esto hace el llamado a la api del navegador, para usar la ubicacion actual
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  //------ Peticion del clima -------
  // Necesitamos hace otra peticion: 3 elementos: Estado (useState) (arriba), Evitar ciclo infinito (useEffect),  
  useEffect(() => {
    if (coords) { //evita el primer renderizado  solo e pide cuando coords tiene info dentro. 
      const APIKEY = 'bc2772c25fe8ac0eb1c4527c734d8ef6'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(response => {
          const celsius = (response.data.main.temp - 273.15).toFixed(0)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(0)
          setTemperature({ celsius, farenheit })
          setWeather(response.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">
      {
        weather ?
          <WeatherCard
            temperature={temperature}
            weather={weather}/>
          :
          <Loading />
          }
    </div>
  )
}

export default App
