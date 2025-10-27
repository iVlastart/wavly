import Link from "next/link";
import { INavbarLinks } from ".";

export const NavbarLinks = ({name, link, icon, open}:INavbarLinks)=>{
    return(
        <Link href={link} className={`flex flex-row gap-2 py-8 hover:bg-gray-100 hover:scale-105 transition-all duration-300 pl-3`}>
            {icon}
            <span className={`${open?'visible':'hidden'}`}>
                {name}
            </span>
        </Link>
    )
};