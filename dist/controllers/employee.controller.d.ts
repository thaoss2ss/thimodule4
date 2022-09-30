import { Request, Response, NextFunction } from "express";
export declare class EmployeeController {
    showHomeCreateCustomer(req: Request, res: Response): Promise<void>;
    createEmployee(req: Request, res: Response): Promise<void>;
    showInfoListEmployee(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteEmployee(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormEditCustomer(req: Request, res: Response): Promise<void>;
    editEmployee(req: Request, res: Response): Promise<void>;
}
export default EmployeeController;
