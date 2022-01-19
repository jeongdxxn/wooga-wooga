import './App.css';
import axios from 'axios';

const api_keys = '43a5e2520a415d989dd6aeb84fccc6c0'

axios.get(`http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${api_keys}`)
.then(res => console.log(res.data.main.temp));

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <a>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
