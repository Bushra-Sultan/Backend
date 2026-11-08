import { application,Request, Response } from "express";
interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
    course: string;
    isActive: boolean;
}
let students: Student[] = [
    { id: 1, name: "Ali", age: 20, email: "ali@gmail.com", course: "Computer Science", isActive: true },
    { id: 2, name: "Sara", age: 21, email: "sara@gmail.com", course: "Software Engineering", isActive: true }
];
export const getAllStudents = (req: Request, res: Response) => {
    res.status(200).json(students);
};
export const getStudentById = (req: Request, res: Response) => {
    const id = Number(req.body.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
};
export const addStudent = (req: Request, res: Response) => {
    students.push(req.body);
    res.status(201).json(req.body);
};
export const updateStudent = (req: Request, res: Response) => {
    const id = Number(req.body.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }
    students[index] = { ...students[index], ...req.body };
    res.status(200).json(students[index]);
};
export const deleteStudent = (req: Request, res: Response) => {
    const id = Number(req.body.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }
    students.splice(index, 1);
    res.status(200).json({ message: "deleted successfully" });
};