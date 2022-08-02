import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';


export const headerIcons = {
    VideoCallIcon,NotificationsIcon,AccountCircleIcon
}

export const drawerIcons = {
    HomeIcon,ExploreIcon,HistoryToggleOffIcon,SubscriptionsIcon,VideoLibraryIcon,
}

interface Item {
    label: string;
    path: string;
    icon: keyof typeof headerIcons;
}

interface Item2 {
    label: string;
    path: string;
    icon: keyof typeof drawerIcons;
}

export const HeaderItems : Item[] = [
    { label: "Video Create", path: "/", icon: "VideoCallIcon" },
    { label: "Notifications", path: "/", icon: "NotificationsIcon" },
    { label: "Profile", path: "/profile", icon: "AccountCircleIcon" }
  ];

  export const DrawerItems : Item2[] = [
    { label: "Home", path: "/", icon: "HomeIcon" },
    { label: "Explore", path: "/", icon: "ExploreIcon" },
    { label: "Shorts", path: "/", icon: "HistoryToggleOffIcon" },
    { label: "Subscriptions", path: "/", icon: "SubscriptionsIcon" },
    { label: "Library", path: "/", icon: "VideoLibraryIcon" }
  ];