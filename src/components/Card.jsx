import {AiOutlineClose} from "react-icons/ai"
import { useDispatch } from "react-redux";

export default function Card() {

    const dispatch = useDispatch();

  return (
    <div className="w-1/3 h-full border bg-white fixed top-0 right-0 z-50 p-3">
        <div className="flex items-center h-20 justify-between">
            <h1 className="text-2xl">Sepetim</h1>
            <div onClick={() => dispatch({type: 'CLOSE_DRAWER'})}>
                <AiOutlineClose size={25} className="cursor-pointer" />
            </div>
        </div>
    </div>
  );
}
