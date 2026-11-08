import { Router } from "express";
import {getAllStudents,getStudentById,addStudent,updateStudent,deleteStudent} from "./controller";
const router = Router();
router.get("/", getAllStudents);
router.get("/id", getStudentById);
router.post("/", addStudent);
router.put("/", updateStudent);
router.delete("/", deleteStudent);
export default router;