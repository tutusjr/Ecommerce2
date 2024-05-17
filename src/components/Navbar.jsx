import { BsLightbulb, BsBasketFill, BsMoonStarsFill } from "react-icons/bs";
import { useEffect, useState , } from "react";
import { useDispatch } from "react-redux";

export default function Navbar() {

  const [color, setColor] = useState(false)
  const dispatch = useDispatch();


  useEffect(() => {
    const root = document.getElementById('root')
    if(color){
      root.style.backgroundColor = 'black';
      root.style.color = 'gray';
    }else{
      root.style.backgroundColor = 'white';
      root.style.color = 'gray';
    }

  })
  return (
    <div className="flex items-center justify-between px-3 h-28">
      <div className="text-2xl font-bold tracking-wider">LOGO</div>
      <div className="flex items-center gap-x-4">
        <input
          className="p-2 border outline-none rounded-lg"
          type="text"
          placeholder="search"
        />
        <div onClick={() => setColor(!color)}>
          {
          color ? <BsLightbulb size={25} className="cursor-pointer" /> : 
          <BsMoonStarsFill size={25} className="cursor-pointer" />
          }
          
        </div>
        <div onClick={() => dispatch({ type: 'OPEN_DRAWER', payload: true })} className="relative">
          <BsBasketFill size={40} className="cursor-pointer" />
          <span className=" absolute top-0 -right-2 w-5 text-center bg-red-500 rounded-full text-sm">
            3
          </span>
        </div>
      </div>
    </div>
  );
}
