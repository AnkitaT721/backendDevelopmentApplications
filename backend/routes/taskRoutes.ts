import { Router } from 'express';
import { createTask, deleteTask, getTasks, updateTask } from '../controller/taskController';

const router: Router = Router();

router.route("/addtask").post(createTask)
router.route("/gettasks").get(getTasks);
router.route("/updatetask/:id").put(updateTask);
router.route("/deletetask/:id").delete(deleteTask);

export default router;