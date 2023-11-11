import React, {useEffect, useState} from "react";
import FormBuilderForm from "./formBuilderForm.tsx";

type FormBuilderProps = {
    _id: string;
    formCode: string;
    formName: string;
    formDescription: string;
    usedFor: string;
    createdOn: any;
    action: any;
};

const FormBuilder: React.FC<FormBuilderProps> = () => {
    const [data, setData] = useState<FormBuilderProps[]>([]);
    const [showForm, setShowForm] = useState(false)

    // FETCH DATA FROM THE DATABASE
const fetchFromBack = async () => {
        const response = await fetch('http://localhost:5000/formpost') // replace with your API endpoint
        const newPost = await response.json()
        setData(newPost)
    }

    useEffect(() => {
        fetchFromBack().then(() => {
            console.log("new post has been pushed")
        })
    }, []);

    const handleClick = () => {
        if (showForm) {
            setShowForm(false)
        } else {
            setShowForm(true)
        }
    };

    const handleUpdate = async (id: string) => {
        const response: Response = await fetch(`http://localhost:5000/formpost/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data.find(item => item._id === id)),
        });

        const responseData = await response.json();
        console.log(responseData);
        await fetchFromBack()
    };

    const handleDelete = async (id: string) => {
        const response: Response = await fetch(`http://localhost:5000/formpost/${id}`, {
            method: 'DELETE',
        });

        const data = await response.json();
        console.log(data);
        await fetchFromBack()
    };

    return (
        <div className="p-4">
            {/* Heading*/}
            <div className={"flex justify-between"}>
                <h2 className="text-blue-500 text-lg font-bold">Form Builder</h2>
                <button className={"border-2 hover:border-blue-600 p-2 rounded-lg text-[#266cc2] text-sm"}
                        onClick={handleClick}>
                    Add Form
                </button>
            </div>

            {/*Table*/}
            <table className="table-auto w-full mt-4">
                {/*Table Head*/}
                <thead>
                <tr>
                    <th className="font-normal px-5 py-4 border-2 bg-[#464646] text-white">Form Code</th>
                    <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Form Name</th>
                    <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Form Description</th>
                    <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Used For</th>
                    <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Created On</th>
                    <th className="font-normal px-4 py-2 border-2  bg-[#464646] text-white">Action</th>
                </tr>
                </thead>

                {/*Table Body*/}
                <tbody>
                {data.map((item, index: number) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">
                            {item.formCode}
                        </td>
                        <td className="border px-4 py-2">
                            {item.formName}
                        </td>
                        <td className="border px-4 py-2">
                            {item.formDescription}
                        </td>
                        <td className="border px-4 py-2">
                            {item.usedFor}
                        </td>
                        <td className="border px-4 py-2">
                            {item.createdOn}
                        </td>
                        <td className="border px-4 py-2">
                            <button
                                className={"mr-2 border-2 hover:border-blue-600 p-2 rounded-lg text-[#266cc2] text-sm  "}
                                onClick={() => handleUpdate(item._id)}>Update
                            </button>
                            <button className={"border-2 hover:border-blue-600 p-2 rounded-lg text-[#266cc2] text-sm "}
                                    onClick={() => handleDelete(item._id)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showForm && <FormBuilderForm onFormSubmit={fetchFromBack}/>}
        </div>
    );
};

export default FormBuilder;
