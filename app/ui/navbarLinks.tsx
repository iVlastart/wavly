import Link from "next/link";
import { INavbarLinks } from ".";

export const NavbarLinks = ({name, link}:INavbarLinks)=>{
    return(
        <Link href={link}>

        </Link>
    )
};