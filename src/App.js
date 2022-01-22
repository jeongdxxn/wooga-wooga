import './App.css'
import axios from 'axios';
import RegionAndTemp from './components/RegionAndTemp';
import { useEffect, useState } from 'react';


function App() {

  const [curWeather, setCurWeather] = useState('')
  const api_keys = '43a5e2520a415d989dd6aeb84fccc6c0'
  const getWeather = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=daegu&appid=${api_keys}`
    return await axios.get(url)
  }

  useEffect(() => {
    getWeather()
      .then((data) => {
        setCurWeather(data)
      })
      .catch(err => console.log(err))
  }, [])

  if (curWeather === '') return <div> 날씨를 불러오는 중입니다... </div>
  else {
    const propsData = curWeather.data

      return(
        <div className='App-background'>
          <header className='App-header'>
            Wooga Weather
          </header>
          <hr />
          <section>
            <RegionAndTemp propsData={propsData} />
          </section>
        </div>
      );
  }
}

export default App;
