import {forecastType} from './types'
import SmallCard from './smallCard.tsx'
import sunsetImg from './icons/icons8-sunset-64.png'
import sunriseImg from './icons/icons8-sunrise-50.png'
import humidityImg from './icons/icons8-humidity-50.png'
import windImg from './icons/icons8-wind-64.png'
import pressureImg from './icons/icons8-pressure-80.png'
import visibilityImg from './icons/icons8-visibility-80.png'
import feelsImg from './icons/icons8-thermometer-24.png'
import precipitationImg from './icons/icons8-precipitation-50.png'

import {
  getHumidityValue,
  getWindDirection,
  getVisibilityValue,
  getSunTime,
  getPop,
} from './helperFunctions'

export const Forecast = (forecastData: forecastType) =>{ 
  const today = forecastData.list[0]
return (
    <div className='h-{100vh} bg-gradient-to-r from-sky-500 via-cyan-600 to-emerald-500 ...'>
      <div className='items-center  p-5 bg-indigo-600 bg-opacity-20 w-2/5 h-screen mx-auto rounded-xl text-center '>
          <h2 className='text-2xl m-2 font-black text-center'>
            {forecastData.name} <span className='font-thin'>{forecastData.country}</span>
          </h2>
          <h1 className='text-4xl m-2 font-extrabold '>
              <span>{Math.round(today.main.temp)}<sup>o</sup></span>
          </h1>
          <p className="text-sm m-2">
            {today.weather[0].main} ({today.weather[0].description})
          </p>
          <p className='text-sm'>
          H: <span>{Math.floor(today.main.temp_min)}<sup>o</sup></span>{" "}L:{" "}
          <span>{Math.ceil(today.main.temp_max)}<sup>o</sup></span>
          </p>
          <div className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          {forecastData.list.map((item, i) => (
            <div
              key={i}
              className="inline-block text-center w-[50px] flex-shrink-0"
            >
              <p className="text-sm">
                {i === 0 ? 'Now' : new Date(+item.dt*1000).getHours()}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm font-bold">
              <span>{Math.round(today.main.temp)}<sup>o</sup></span>
              </p>
            </div>
          ))}</div>
          

          <div className="grid grid-cols-2 place-items-center justify-between text-zinc-700">
          <div className=" w-[130px] h-[120px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <img src={sunriseImg}/> <span className="mt-2">{getSunTime(+forecastData.sunrise)}</span>
          </div>
          <div className="w-[130px] h-[120px] text-xs font-bold flex flex-col items-center bg-white/20  rounded drop-shadow-lg py-4 mb-5">
          <img  alt='error' src={sunsetImg}/> <span className="mt-2">{getSunTime(+forecastData.sunset)}</span>
          </div>
          <SmallCard
            icon={windImg}
            title="Wind"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(
              Math.round(today.wind.deg)
            )}, gusts 
            ${today.wind.gust.toFixed(1)} km/h`}
          />
          <SmallCard
            icon={feelsImg}
            title="Feels like"
            info={<span>{Math.round(today.main.feels_like)}<sup>o</sup></span>}
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'colder'
                : 'warmer'
            }`}
          />
          <SmallCard
            icon={humidityImg}
            title="Humidity"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <SmallCard
            icon={precipitationImg}
            title="Precipitation"
            info={`${Math.round(today.pop * 100)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />
          <SmallCard
            icon={pressureImg}
            title="Pressure"
            info={`${today.main.pressure} hPa`}
            description={` ${
              Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
            } than standard`}
          />
          <SmallCard
            icon={visibilityImg}
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={getVisibilityValue(today.visibility)}
          />
          </div>
            


          </div>

    </div>

  )
}
