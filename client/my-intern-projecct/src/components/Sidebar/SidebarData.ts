// this is a file containing array of object which is containing image link header
import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import SignalWifiStatusbarConnectedNoInternet4TwoToneIcon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4TwoTone';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SearchIcon from '@mui/icons-material/Search';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';

type SidebarItem = {
    header: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
    link: string;
};
export const sidebarData: SidebarItem[] = [
    {
        header: "Dashboard",
        link: "",
        Icon: SpaceDashboardIcon,
    },
    {
        header: "Task Queue",
        link: "abc.com",
        Icon: AssignmentIcon,
    },
    {
        header: "Network Providers",
        link: "abc.com",
        Icon: CloudSyncIcon,
    },
    {
        header: "Non-Network Providers",
        link: "abc.com",
        Icon: SignalWifiStatusbarConnectedNoInternet4TwoToneIcon,
    },
    {
        header: "My Documents",
        link: "abc.com",
        Icon: ArticleIcon,
    },
    {
        header: "Profile",
        link: "abc.com",
        Icon: PersonIcon,
    },
    {
        header: "User Management",
        link: "abc.com",
        Icon: GroupsIcon,
    },
    {
        header: "Audit Trail",
        link: "abc.com",
        Icon: VerifiedUserIcon,
    },
    {
        header: "Support",
        link: "abc.com",
        Icon: SupportAgentIcon,
    },
    {
        header: "Search",
        link: "abc.com",
        Icon: SearchIcon,
    },
    {
        header: "Master Configurator",
        link: "abc.com",
        Icon: PermDataSettingIcon,
    }
];

