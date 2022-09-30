import mongoose, { Schema , model } from "mongoose";


const employeeSchema = new Schema({
    name: String,
    code: String,
    age: Number,
    salary: Number,
    branch: String,
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;