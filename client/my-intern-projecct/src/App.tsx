import {Navbar} from "./components/Navbar/Navbar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Mainbody from "./components/Mainbody/Mainbody.tsx";

const App = () => {
    return (
        <>
           <Navbar />
            <div className={"flex flex-row"}>
                <Sidebar/>
                <Mainbody />
            </div>
        </>
    );
};

export default App;
