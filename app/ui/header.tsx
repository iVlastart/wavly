import { Auth } from "./auth";
import { Searchbar } from "./searchbar";

export const Header = ()=>{
    
    return(
        <header className="w-full flex flex-row items-center border border-black pt-2">
            <div className="mx-auto">
                <Searchbar/>
            </div>
            <Auth/>
        </header>
    );
};