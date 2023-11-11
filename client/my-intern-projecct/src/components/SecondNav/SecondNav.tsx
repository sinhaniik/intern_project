import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const SecondNav = () => {
    return (
        <div className="flex h-14 justify-between border-2 rounded-xl shadow-sm">
            <h2 className={"p-1.5 mt-2 font-bold text-gray-700 ml-2"}>Master</h2>
            <div className={"p-1.5 mt-2"}>
                Welcome Ritesh Singh <AccountCircleIcon/> <NotificationsIcon className={"ml-2 mr-1"}/>
            </div>
        </div>
    );
};

export default SecondNav;