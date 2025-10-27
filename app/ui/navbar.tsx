import { useState } from "react";
import { INavbar } from ".";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavbarLinks } from "./navbarLinks";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from "next/link";

export const Navbar = ({name, username}:INavbar)=>{
  const [open, setOpen] = useState<Boolean>(true);
  const links = [
    {name: 'Home', link: '/', icon: <HomeIcon/>},
    {name: 'Create', link: 'create', icon: <AddIcon/>},
    {name: 'Notifications', link: 'notifications', icon: <NotificationsIcon/>}
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
              <NavbarLinks key={key} name={link.name} link={link.link} icon={link.icon} open={open} />
            ))
          }
      </main>
      {/* Profile */}
      <Link href={username} className="flex flex-row justify-center gap-3 items-center cursor-pointer transition-all duration-300">
        <img src={'/defaultPfp.webp'} alt="" className={`rounded-full ${open?'size-16':'size-8 self-center'}`} />
          <div className={`flex flex-col ${open?'visible':'hidden'}`}>
            <span className="text-xl">
              {name}
            </span>
            <span className="text-gray-400 text-sm">
              @{username}
            </span>
          </div>
      </Link>
    </div>
  );
};