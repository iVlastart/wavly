import React from "react";

import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";
import AccessAlarms from "@mui/icons-material/AccessAlarms";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import Link from "next/link";
import { handleLogout } from "../hooks/auth";
import { INavbar } from ".";

export const Navbar = ({username}:INavbar) => {
  return (
    <>
      {
        username!==''
          ?
          <Sidebar width={"270px"} onLogout={handleLogout}>
            <Logo
              component={Link}
              href="/"
              img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
            >
              Wavly
            </Logo>
            <Menu subHeading="HOME">
              <MenuItem
                icon={<CottageOutlinedIcon />}
                component={Link}
                link="/tes"
                badge={true}
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
            <Menu subHeading="OTHERS">
              <Submenu title="Menu Level">
                <MenuItem>Post</MenuItem>
                <MenuItem>Details</MenuItem>
                <Submenu title="Level 2">
                  <MenuItem>new</MenuItem>
                  <MenuItem>Hello</MenuItem>
                </Submenu>
                  </Submenu>

              <MenuItem>Chip</MenuItem>
              <MenuItem target="_blank" component={Link} link="https://google.com">
                External Link
              </MenuItem>
            </Menu>
          </Sidebar>
          :
          <header>
            login
          </header>

      }
    </>
  );
};