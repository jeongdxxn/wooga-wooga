import './App.css'
import axios from 'axios';
import RegionAndTemp from './components/RegionAndTemp';
import Forecast from './components/Forecast';
import { useEffect, useState } from 'react';



function App() {

  const [curWeather, setCurWeather] = useState('')
  const api_keys = 'cd5f6cc939ea3acecedbae7014429728'
  const url = `http://api.openweathermap.org/data/2.5/weather?q=daegu&appid=${api_keys}`
  const getWeather = (url) => {
    return axios.get(url)
      .then(res => setCurWeather(res.data))
  }

  useEffect(async () => {
    const weatherData = await getWeather(url)
    // setCurWeather(weatherData)
    // console.log(curWeather)
  }, [])

  return (
    <div className='App-background'>
      <header className='App-header'>
        Wooga Weather
      </header>
      <hr />
      <section>
        <RegionAndTemp curWeather={curWeather} />
        <Forecast curWeather={curWeather} />
      </section>
    </div>
  );
}

export default App;
