import { IButton } from ".";

export const Button = ({content, onClick, element}:IButton)=>{
    return(
        <button id={element.id} 
                className={`bg-blue-500 hover:bg-blue-600 rounded-xl hover:scale-105 cursor-pointer hover:shadow-2xl  
                            transition-all duration-300 
                            text-white p-2 ${element.className}`} onClick={(e:any)=>{onClick(e)}}>
            {content}
        </button>
    )
};