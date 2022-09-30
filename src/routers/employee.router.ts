import express from "express";
import {EmployeeController} from "../controllers/employee.controller";
import multer from 'multer';

const upload = multer();


const router = express.Router();
const employeeController = new EmployeeController();

router.get('/create', (req, res,next) => {
    employeeController.showHomeCreateCustomer(req, res).catch(err => {
        next(err);
    });
});
router.post('/create', upload.none(), (req, res,next) => {
    employeeController.createEmployee(req, res).catch(err => {
        next(err);
    });

})
router.get('/info', (req, res, next) => {
    employeeController.showInfoListEmployee(req, res, next).catch(err => {
        next(err);
    })
})
router.get('/delete', async (req, res,next) => {
    employeeController.deleteEmployee(req, res,next).catch(err => {
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



export default router;