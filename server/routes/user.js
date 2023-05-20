import express from "express"
const router = express.Router();
import userControllers from "../controllers/userControllers.js";

router.get('/', userControllers.view)
router.post('/', userControllers.find)
router.get('/adduser', userControllers.form)
router.post('/adduser', userControllers.create)
router.get('/edituser/:id', userControllers.edit)
//router.get('/edituser/:id', userControllers.edit)
export default router;