import { sidebarData } from './SidebarData.ts';
const Sidebar = () => {
    return (
        <div className="text-{464646} w-64 h-screen flex flex-col border-2 cursor-pointer text-sm ">
            <div className="p-4">
                <ul>
                    {sidebarData.map((val) => {
                        return (
                            <li key={val.header}>
                                <div
                                    className={'font-semibold p-2 mt-2 mb-2 hover:bg-blue-500 hover:text-white rounded-md'}>
                                    {val.Icon && <val.Icon className={"mr-3"} />} {val.header}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;