import { useState } from "react";
import { INavbar } from ".";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavbarLinks } from "./navbarLinks";

export const Navbar = ({name, username}:INavbar)=>{
  const [open, setOpen] = useState<Boolean>(true);
  const links = [
    {name: 'Home', link: '/'},
    {name: 'Create', link: 'create'},
  ];
  
  return(
    <div className={`flex flex-col border border-black ${open?'w-1/6':'w-1/12'}  h-fit`}>
      {/* Logo + hamburger header */}
      <header className="flex flex-row">
        <span className={`${open?'visible':'hidden'} text-xl transition-all duration-300`}>
          Wavly
        </span>
        <div className="ml-auto cursor-pointer" onClick={()=>setOpen(prev=>!prev)}>
          {
            open
              ? <MenuOpenIcon/>
              : <MenuIcon/>
          }
        </div>
      </header>
      {/* links to pages */}
      <main className="flex flex-col">
          {
            links.map((link, key)=>(
              <NavbarLinks key={key} name={link.name} link={link.name} />
            ))
          }
      </main>
    </div>
  );
};