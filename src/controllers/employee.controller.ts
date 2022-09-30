import Employee from "../models/schemas/employee.schema";
import {Request, Response, NextFunction} from "express";

export class EmployeeController{

    async showHomeCreateCustomer(req: Request, res: Response) {
        res.render('create-employee');
    }
    async createEmployee(req: Request, res: Response) {
        let data = {
            name: req.body.name,
            code: req.body.code,
            age: req.body.age,
            salary: req.body.salary,
            branch: req.body.branch
        }
        const employee = new Employee({name: data.name, code: data.code,age: data.age,salary: data.salary,branch: data.branch});
        await employee.save();
        res.redirect('/employee/info')
    }
    async showInfoListEmployee(req: Request, res: Response,next: NextFunction) {
        const employee = await Employee.find()
        // console.log(customer);

        res.render('listEmployee', {data: employee});
    }

    async deleteEmployee(req: Request, res: Response,next: NextFunction) {
        let id = req.query.id
        // console.log(id);
        await Employee.deleteOne({
            _id: `${id}`
        });
        res.redirect('/employee/info');
    }
    async showFormEditCustomer(req: Request, res: Response) {
        let id = req.query.id

        const employeeSelect = await Employee.findOne({
            _id: id
        });

        res.render('updateEmployee', {data: employeeSelect});
    }
    async editEmployee(req: Request, res: Response) {
        let id = req.body.id
        await Employee.updateOne({_id: id}, {
            name: req.body.name,
            code: req.body.code,
            age: req.body.age,
            salary: req.body.salary,
            branch: req.body.branch
        })

        res.redirect('/employee/info')
    }

}
export default EmployeeController;