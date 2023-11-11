import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    return (
        <div className={"flex justify-between items-center h-14 w-full border-2 shadow-lg"}>
            <MenuIcon className={"text-4xl ml-2"}/>
            <h1 className={"underline font-bold text-2xl mr-[40%]"}> Claim <span className={"text-blue-500"}>Zippy</span></h1>
        </div>
    );
};

