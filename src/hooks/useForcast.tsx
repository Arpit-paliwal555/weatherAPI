// custom hook.
import { useState } from "react";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY
import { optionType, forecastType } from "./../components/types";
//https://api.openweathermap.org/data/3.0/onecall/day_summary?lat={lat}&lon={lon}&date={date}&appid={API key}
const randomCity: optionType = {
  name: "London",
  lat: 51.5074,
  lon: 51.5074
}
export const useForcast = () => {
const [text, setText] = useState<string>("");
const [options, setOptions] = useState<[]>([]);
const [city, setCity] = useState<optionType>(randomCity);
const [forecast, setForecast] = useState<forecastType|null>(null);

const getSearchOptions = async (value: string) => {
    //console.log(REACT_APP_API_KEY);
    await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`)
      .then((res) => res.data)
      .then((data) => setOptions(data))
}
const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setText(value);

    if (value == ''){
      setOptions([]);
      return
    }

    getSearchOptions(value);

};

const onOptionSelect = (option: optionType)=>{
    setCity(option);

    setText(option.name);
    setOptions([]);
   
   
  }

const onSubmit = async(city: optionType)=>{
    if (city.lat == city.lon)
      return;
    
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${apiKey}`)
    .then((res) => res.data)
    .then((data) => {
      const currentForecast: forecastType = {
        ...data.city,
        list: data.list.slice(0,16)
      }
      setForecast(currentForecast);
    });
  }
  return {
    text,
    options,
    city,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit
}
}
export default useForcast;
