import mongoose from "mongoose";
declare const Employee: mongoose.Model<{
    name?: string;
    code?: string;
    age?: number;
    salary?: number;
    branch?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    code?: string;
    age?: number;
    salary?: number;
    branch?: string;
}>>;
export default Employee;
