import styled from 'styled-components';
import Title from './components/Title'
import { createGlobalStyle } from 'styled-components';
import Input from './components/Input';
import DisplayWeather from './components/DisplayWeather';
import SpecificDetails from './components/SpecificDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


const OuterContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
box-sizing: border-box;
display: flex;
align-items: center;
flex-direction: column;
height: 82vh;
width: 40%;
border: 3px dashed black;
border-radius: 10px;
`;

type inputDataType = {
  city : string,
  country: string,
}

function App() {
  const [inputData, setInputData] = useState<inputDataType>({
    city: '',
    country: '',
  });
  const [weatherData, setWeatherData] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  const handleData = (city: string, country: string) => {
    setInputData({
      city: city,
      country: country,
    })
    setDataFetched(false);
  }

  function convertTimestampToTime(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours}:${minutes.substr(-2)}:${seconds.substr(-2)} ${ampm}`;
    return formattedTime;
  }

  const convertKelvinToCelsius = (temperature: number) => {
    return Math.round(temperature - 273.15)
  }

  const weatherDataset = (data: any) => {
    setWeatherData({
      city: data.name,
      country: data.sys.country,
      currentTime: convertTimestampToTime(data.dt),
      temp: convertKelvinToCelsius(data.main.temp),
      type: data.weather[0].main,
      sunrise : convertTimestampToTime(data.sys.sunrise),
      sunset : convertTimestampToTime(data.sys.sunset),
      high : convertKelvinToCelsius(data.main.temp_max),
      low : convertKelvinToCelsius(data.main.temp_min),
      humidity: data.main.humidity,
      visibility: data.visibility/1000,
      pressure: data.main.pressure,
      direction: data.wind.deg,
      speed: data.wind.speed,
      icon: data.weather[0].icon,
    })
  }

  useEffect(() => {
    if (inputData.city && inputData.country) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputData.city},${inputData.country}&appid=babd83173cb2de68d0870532887bd092`)
      .then((res) => {
        weatherDataset(res.data);
        setDataFetched(true);
      })
      .catch((err) => {
        alert("Invalid Details");
        setDataFetched(false);
      })
    }
  },[inputData])
  

  return(
    <div>
      <GlobalStyle/>
      <OuterContainer>
        <Title/>
        <Input onData={handleData}/>
        {
          (dataFetched) ?
          <>
            <DisplayWeather data = {weatherData}/>
            <SpecificDetails data = {weatherData}/>
          </>
            : ''
          
        }
      </OuterContainer>

    </div>
  )
}

export default App
