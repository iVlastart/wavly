import { Auth } from "./auth";
import { Searchbar } from "./searchbar";

export const Header = ()=>{
    
    return(
        <header className="w-full relative flex flex-row items-center pt-2 h-16">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Searchbar/>
            </div>
            <Auth/>
        </header>
    );
};