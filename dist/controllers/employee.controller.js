"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const employee_schema_1 = __importDefault(require("../models/schemas/employee.schema"));
class EmployeeController {
    async showHomeCreateCustomer(req, res) {
        res.render('create-employee');
    }
    async createEmployee(req, res) {
        let data = {
            name: req.body.name,
            code: req.body.code,
            age: req.body.age,
            salary: req.body.salary,
            branch: req.body.branch
        };
        const employee = new employee_schema_1.default({ name: data.name, code: data.code, age: data.age, salary: data.salary, branch: data.branch });
        await employee.save();
        res.redirect('/employee/info');
    }
    async showInfoListEmployee(req, res, next) {
        const employee = await employee_schema_1.default.find();
        res.render('listEmployee', { data: employee });
    }
    async deleteEmployee(req, res, next) {
        let id = req.query.id;
        await employee_schema_1.default.deleteOne({
            _id: `${id}`
        });
        res.redirect('/employee/info');
    }
    async showFormEditCustomer(req, res) {
        let id = req.query.id;
        const employeeSelect = await employee_schema_1.default.findOne({
            _id: id
        });
        res.render('updateEmployee', { data: employeeSelect });
    }
    async editEmployee(req, res) {
        let id = req.body.id;
        await employee_schema_1.default.updateOne({ _id: id }, {
            name: req.body.name,
            code: req.body.code,
            age: req.body.age,
            salary: req.body.salary,
            branch: req.body.branch
        });
        res.redirect('/employee/info');
    }
}
exports.EmployeeController = EmployeeController;
exports.default = EmployeeController;
//# sourceMappingURL=employee.controller.js.map