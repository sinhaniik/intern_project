import mongoose, {Schema, model} from "mongoose";

// Document interface
interface masterListType {
    masterCode: number;
    masterName: string;
    masterDescription: string;
    usedIn: string;
    createdOn: string,
    action: string
}

// Form interface
interface formListType {
    formCode: number;
    formName: string;
    formDescription: string;
    usedFor: string;
    createdOn: string;
    action: string
}

// Master Schema
const masterListSchema = new Schema<masterListType>({
    masterCode: {type: Number},
    masterName: {type: String},
    masterDescription: {type: String},
    usedIn: {type: String},
    createdOn: {type: String},
    action: {type: String}
});

// Form Schema
const formListTypeSchema = new Schema<formListType>({
    formCode: {type: Number},
    formName: {type: String},
    formDescription: {type: String},
    usedFor: {type: String},
    createdOn: {type: String},
    action: {type: String}
});

// the name of the model that we gave has to be singular because i get converted in plural
// model
export const masterList = model('MasterList', masterListSchema);
export const formList = model("FormList",formListTypeSchema )
