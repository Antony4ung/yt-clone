import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../public/img/logo.png";
import Image from "next/image";
import { Button, TextField, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  HeaderItems,
  headerIcons,
  DrawerItems,
  drawerIcons,
} from "../public/data/header";

import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useRouter } from "next/router";
import { AppContext } from "./ContextProvider";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [searchText,setSearchText] = React.useState('')

  const {setDarkMode ,darkMode} = React.useContext(AppContext)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", mb: { xs: 3, md: 0 } }}>
      <CssBaseline />
      <AppBar color="inherit" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: { xs: 2, md: 5 },
              display: { xs: "none", md: "flex" },
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image src={logo} width={40} height={40} alt="logo" />
              <h3 style={{ marginLeft: "10px" }}>Yote Shin 2.0</h3>
            </Box>
            {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <TextField label="Search" size="small" value={searchText} onChange={e=>setSearchText(e.target.value)} sx={{ width: "400px", mr: 1 }} />
              <Button onClick={()=>{searchText.length >= 1 && router.push(`/search/${searchText}`)}} variant="contained">
                <SearchIcon />
              </Button>
            </Box> */}
            <Box sx={{ display: "flex" }}>
              {HeaderItems.map(({ label, path, icon }) => {
                const Icon = headerIcons[icon];
                return (
                  <Tooltip key={label} title={label}>
                    <IconButton onClick={() => router.push(path)}>
                      <Icon />
                    </IconButton>
                  </Tooltip>
                );
              })}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {DrawerItems.map(({ label, path, icon }, index) => {
            const Icon = drawerIcons[icon];
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "block", my: 1 }}
                onClick={()=>{handleDrawerClose();router.push(path)}}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem disablePadding sx={{ display: "block", my: 1 }}>
            <ListItemButton
              onClick={()=>setDarkMode(!darkMode)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {darkMode ? <Brightness4OutlinedIcon /> : <WbSunnyOutlinedIcon />}
              </ListItemIcon>
              <ListItemText
                primary={darkMode ? "Dark Mode" : "Light Mode"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: {  }, my: 1 }}
          >
            <ListItemButton
              onClick={()=>router.push('/search')}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SearchIcon />
              </ListItemIcon>
              <ListItemText
                primary={true ? "Dark Mode" : "Light Mode"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 0, md: 3 } }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
