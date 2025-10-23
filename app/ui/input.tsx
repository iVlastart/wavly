import { IInput } from "../login";

export const Input = ({type, placeholder, limit, element}:IInput)=>{
    return(
        <input type={type} id={element.id} name={element.name} maxLength={limit}
            className={`border border-gray-400 hover:border-gray-600 p-1 rounded-xl transition-all duration-300`} 
            autoComplete="off" placeholder={placeholder} />
    );
};