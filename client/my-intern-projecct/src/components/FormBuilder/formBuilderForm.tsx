import React, {useState} from "react";

type FormBuilderProps = {
    onFormSubmit: () => void;
};

// @ts-ignore
const FormBuilderForm = ({onFormSubmit}: FormBuilderProps) => {
    const [formCode, setFormCode] = useState("");
    const [formName, setFormName] = useState("");
    const [formDescription, setFormDescription] = useState("");
    const [usedFor, setUsedFor] = useState("");
    const [createdOn, setCreatedOn] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/formpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formCode,
                formName,
                formDescription,
                usedFor,
                createdOn,
            }),
        });

        const data = await response.json();
        console.log(data);
        onFormSubmit()
    };

    return (
        <div className={"ml-2"}>
            <form onSubmit={handleSubmit}>
                <label className={"border-2"}>
                    <input type="text" value={formCode} onChange={(e) => setFormCode(e.target.value)}/>
                </label>
                <label className={"border-2"}>
                    <input type="text" value={formName} onChange={(e) => setFormName(e.target.value)}/>
                </label>
                <label className={"border-2"}>
                    <input type="text" value={formDescription}
                           onChange={(e) => setFormDescription(e.target.value)}/>
                </label>
                <label className={"border-2"}>
                    <input type="text" value={usedFor} onChange={(e) => setUsedFor(e.target.value)}/>
                </label>
                <label className={"border-2"}>
                    <input type="text" value={createdOn} onChange={(e) => setCreatedOn(e.target.value)}/>
                </label>

                <button className={"border-2 hover:border-blue-600 p-2 rounded-lg text-[#266cc2] text-sm ml-2"}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormBuilderForm