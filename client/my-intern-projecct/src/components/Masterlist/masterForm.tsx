import React, {useState} from "react";

type MasterFormProps = {
    onFormSubmit: () => void;
};
const MasterForm = ({onFormSubmit}: MasterFormProps) => {
    const [masterCode, setMasterCode] = useState("");
    const [masterName, setMasterName] = useState("");
    const [masterDescription, setMasterDescription] = useState("");
    const [usedIn, setUsedIn] = useState("");
    const [createdOn, setCreatedOn] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/masterpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                masterCode,
                masterName,
                masterDescription,
                usedIn,
                createdOn,
            }),
        });

        const data = await response.json();
        console.log(data);

        // Call the callback function after a successful form submission
        onFormSubmit()
    };

    return (
        <div className={"ml-2"}>
            <form onSubmit={handleSubmit}>
                <label className={"border-2"}>
                    <input type="text" value={masterCode} onChange={(e) => setMasterCode(e.target.value)}/>
                </label>
                <label className={"border-2"}>
                    <input type="text" value={masterName} onChange={(e) => setMasterName(e.target.value)}/>
                </label>
                <label className={"border-2"}>
                    <input type="text" value={masterDescription}
                           onChange={(e) => setMasterDescription(e.target.value)}/>
                </label>
                <label className={"border-2"}>
                    <input type="text" value={usedIn} onChange={(e) => setUsedIn(e.target.value)}/>
                </label>
                <label className={"border-2"}>
                    <input type="text" value={createdOn} onChange={(e) => setCreatedOn(e.target.value)}/>
                </label>

                <button className={"border-2 hover:border-blue-600 p-2 rounded-lg text-[#266cc2] text-sm ml-2"}>Submit
                </button>
            </form>
        </div>
    );
};

export default MasterForm