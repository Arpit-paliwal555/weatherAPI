import { optionType } from "./types";
import weathreIcon from "../weatherIcon.png";

type props = {
  text:string,
  options:[],
  city:optionType,
  onInputChange: (arg0: React.ChangeEvent<HTMLInputElement>)=> void,
  onOptionSelect: (arg0: optionType)=> void,
  onSubmit: (arg0: optionType)=>void
}

export const Inputcard = ({text,onInputChange, options,onOptionSelect,onSubmit, city}: props) => {
  

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-purple-600 to-blue-600 h-[100vh] w-full">
      <div className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px]  bg-white rounded-xl">
        <img src={weathreIcon} alt="" className="border rounded-xl w-60 h-auto mb-2"/>
        <h3 className="font-bold text-2xl">Enter a location</h3>
        <div className="relative mt-10 md:mt-4">
        <input
          type="text"
          value={text}
          className="bg-cyan-50 p-2 caret-black border h-10 w-3/4 px-2 py-1 rounded-md"
          onChange={onInputChange}
        />
        <ul className="absolute top-10 bg-white ml-9 border rounded-md ">
        {options.map((option:optionType,index:number)=>(
          <li key={option.name+'-'+index} className="">
            <button className="hover:bg-zinc-700 text-left hover:text-white border hover:border-sky-400 p-1.5 w-full cursor-pointer"
            onClick={()=>onOptionSelect(option)}
            >{option.name}</button>
          </li>
        ))}
        </ul>
        
        
        <button className="bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-2 px-4 text-lg rounded-full"
        onClick={()=>onSubmit(city)}>
          Get Forcast
        </button>
        </div>
      </div>
    </div>
  );
};



