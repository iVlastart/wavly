import { IButton } from "../login";

export const Button = ({content, element}:IButton)=>{
    return(
        <button id={element.id} 
                className={`bg-blue-500 hover:bg-blue-700 rounded-xl  
                            transition-all duration-300 
                            text-white p-2 ${element.className}`}>
            {content}
        </button>
    )
};