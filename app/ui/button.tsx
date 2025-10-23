import { IButton } from ".";

export const Button = ({content, element}:IButton)=>{
    return(
        <button id={element.id} 
                className={`bg-blue-500 hover:bg-blue-600 rounded-xl hover:scale-105 cursor-pointer hover:shadow-2xl  
                            transition-all duration-300 
                            text-white p-2 ${element.className}`}>
            {content}
        </button>
    )
};