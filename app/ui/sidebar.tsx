import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";
import AccessAlarms from "@mui/icons-material/AccessAlarms";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import Link from "next/link";
import { handleLogout } from "../hooks/auth";
import { getCurrentUser } from "../firebase/db";
import { INavbar } from ".";

export const Navbar = ({name, username}:INavbar) => {
  return (
          <Sidebar width={"270px"} userName={name} userimg="" designation={'@'+username} onLogout={handleLogout} showProfile={true}>
            <Logo
              component={Link}
              href="/"
              img=""
            >
              Wavly
            </Logo>
            <Menu subHeading="HOME">
              <MenuItem
                icon={<CottageOutlinedIcon />}
                component={Link}
                link="/tes"
                isSelected={true}
              >
                {" "}
                {/* Set badge to boolean true */}
                Home
              </MenuItem>
              <MenuItem icon={<AccessAlarms />} component={Link} link="/test">
                eCommerce
              </MenuItem>
              <MenuItem component={Link} link="/ana">
                Analytical
              </MenuItem>
            </Menu>
            <Menu subHeading="APPS">
              <MenuItem>Chat</MenuItem>
              <MenuItem>Calendar</MenuItem>
            </Menu>
          </Sidebar>
  );
};