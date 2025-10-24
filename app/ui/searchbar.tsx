export const Searchbar = ()=>{
    return(
        <div className="mx-auto relative">
            <input id="search-bar" type="search" maxLength={30} placeholder="Search" 
                    className="px-4 py-2 w-[20rem] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500" 
                    autoComplete="off" aria-label="Search"/>
            <button id="search-btn" className="absolute right-0 top-0 h-full px-4 
                            bg-blue-500 text-white rounded-r-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
        </div>
    );
};