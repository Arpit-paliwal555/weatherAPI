
import './App.css'
import { Inputcard } from './components/inputcard'
import { useForcast} from './hooks/useForcast'
import {Forecast} from './components/forecast';

function App() {
  const { text, options, city, forecast, onInputChange, onOptionSelect, onSubmit } = useForcast();

  return (
    <div className="">
      {(forecast) ? (<Forecast {...forecast}></Forecast>) : (<Inputcard text={text}
        onInputChange={onInputChange}
        options={options}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
        city={city}></Inputcard>
      )}
    </div>

  )
}

export default App
