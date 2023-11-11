import React, {useEffect, useState} from "react";
import MasterForm from "./masterForm.tsx";

type MasterListProps = {
    _id: string
    masterCode: string;
    masterName: string;
    masterDescription: string;
    usedIn: string;
    createdOn: any;
    action: any;
};

const MasterList: React.FC<MasterListProps> = () => {
    const [data, setData] = useState<MasterListProps[]>([]);
    const [showForm, setShowForm] = useState(false)

    // FETCH DATA FROM THE DATABASE
    const fetchFromBack = async () => {
        const response = await fetch('http://localhost:5000/masterpost') // replace with your API endpoint
        const newPost = await response.json()
        setData(newPost)
    }

    useEffect(() => {
        fetchFromBack().then(() => {
            console.log("new post has been pushed")
        })
    }, []);

    const handleClick = () => {
        if (showForm === true) {
            setShowForm(false)
        } else {
            setShowForm(true)
        }
    };

    const handleUpdate = async (id: string) => {
        const response: Response = await fetch(`http://localhost:5000/masterpost/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data.find(item => item._id === id)),
        });

        const responseData = await response.json();
        console.log(responseData);
        // Fetch the data again after updating
        await fetchFromBack();
    };

    const handleDelete = async (id: string) => {
        const response: Response = await fetch(`http://localhost:5000/masterpost/${id}`, {
            method: 'DELETE',
        });

        // the actual data json
        await response.json();

        // this is fetching method which we are going to pass as a prop
        await fetchFromBack();
    };

    return (
        <>
            <div className="p-4">
                <div className={"flex justify-between"}>
                    <h2 className="text-blue-500 text-lg font-bold">Master List</h2>
                    <button className={"border-2 hover:border-blue-600 p-2 rounded-lg text-[#266cc2] text-sm"}
                            onClick={handleClick}>
                        Add new master
                    </button>
                </div>
                <table className="table-auto w-full mt-4">
                    {/*TABLE HEAD*/}
                    <thead>
                    <tr>
                        <th className="font-normal px-5 py-4 border-2 bg-[#464646] text-white">Master Code</th>
                        <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Master Name</th>
                        <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Master Description</th>
                        <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Used In</th>
                        <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Created On</th>
                        <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Action</th>
                    </tr>
                    </thead>

                    {/*TABLE BODY*/}
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">
                                {item.masterCode}
                            </td>
                            <td className="border px-4 py-2">
                                {item.masterName}
                            </td>
                            <td className="border px-4 py-2">
                                {item.masterDescription}
                            </td>
                            <td className="border px-4 py-2">
                                {item.usedIn}
                            </td>
                            <td className="border px-4 py-2">
                                {item.createdOn}
                            </td>
                            <td className="border px-4 py-2">
                                <button className={"mr-2 border-2 hover:border-blue-600 p-2 rounded-lg text-[#266cc2] text-sm "} onClick={() => handleUpdate(item._id)}>Update</button>
                                <button className={"border-2 hover:border-blue-600 p-2 rounded-lg text-[#266cc2] text-sm "} onClick={() => handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {showForm && <MasterForm onFormSubmit={fetchFromBack} />}
        </>
    );
};

export default MasterList