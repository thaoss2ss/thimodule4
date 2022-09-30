"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_controller_1 = require("../controllers/employee.controller");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const router = express_1.default.Router();
const employeeController = new employee_controller_1.EmployeeController();
router.get('/create', (req, res, next) => {
    employeeController.showHomeCreateCustomer(req, res).catch(err => {
        next(err);
    });
});
router.post('/create', upload.none(), (req, res, next) => {
    employeeController.createEmployee(req, res).catch(err => {
        next(err);
    });
});
router.get('/info', (req, res, next) => {
    employeeController.showInfoListEmployee(req, res, next).catch(err => {
        next(err);
    });
});
router.get('/delete', async (req, res, next) => {
    employeeController.deleteEmployee(req, res, next).catch(err => {
        next(err);
    });
});
router.get('/edit', async (req, res, next) => {
    employeeController.showFormEditCustomer(req, res).catch(err => {
        next(err);
    });
});
router.post('/edit', upload.none(), async (req, res, next) => {
    employeeController.editEmployee(req, res).catch(err => {
        next(err);
    });
});
exports.default = router;
//# sourceMappingURL=employee.router.js.map