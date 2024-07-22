import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  
  return (
    <div style={{display:"flex",height:"100%",verticalAlign:"center"}}>
     <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  PhD Clinic
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Profile Form"
              to="/signUp"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPn1hyLZe9tfC8KfdicjaNDEuiyPm9Fw_-keaVZSh91YzdtA/viewform" target ="_blank">
            <Item
              title="Apply Now!"
              to=""
              icon={<HowToRegOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </a> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  
    <Box m="20px">
      {/* HEADER */}
      <Box justifyContent="space-between" alignItems="center">
        {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPn1hyLZe9tfC8KfdicjaNDEuiyPm9Fw_-keaVZSh91YzdtA/viewform" target="__blank"> */}
        <Header title="DASHBOARD" subtitle="Welcome to the dasboard!" />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPn1hyLZe9tfC8KfdicjaNDEuiyPm9Fw_-keaVZSh91YzdtA/viewform" target="__blank">
        <h3>
          Apply Now!
        </h3>
        </a>
        {/* </a> */}
      </Box>
    </Box>
    </div>
  );
};

export default Dashboard;
