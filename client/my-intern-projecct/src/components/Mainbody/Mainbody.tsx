import SecondNav from "../SecondNav/SecondNav.tsx";
import MasterList from "../Masterlist/MasterList.tsx";
import FormBuilder from "../FormBuilder/FormBuilder.tsx";

const Mainbody = () => {
    return (
        <div className={"w-full h-5 mt-1.5 rounded-b-md"}>
            <SecondNav/>
            <div className={"shadow-2xl"}>
                <MasterList masterCode={""} masterName={""} masterDescription={""} usedIn={""} createdOn={undefined}
                            action={undefined}/>
                <FormBuilder formCode={""} formName={""} formDescription={""} usedFor={""} createdOn={undefined}
                             action={undefined}/>
            </div>
        </div>
    );
};
export default Mainbody