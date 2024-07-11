
import React, { createContext, useState } from 'react';

const ManagementContext = createContext();

const ManagementProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);

    const addStudent = (student) => setStudents([...students, student]);
    const updateStudent = (updatedStudent) =>
        setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
    const deleteStudent = (id) => setStudents(students.filter(student => student.id !== id));

    const addTeacher = (teacher) => setTeachers([...teachers, teacher]);
    const updateTeacher = (updatedTeacher) =>
        setTeachers(teachers.map(teacher => teacher.id === updatedTeacher.id ? updatedTeacher : teacher));
    const deleteTeacher = (id) => setTeachers(teachers.filter(teacher => teacher.id !== id));

    return (
        <ManagementContext.Provider value={{
            students,
            teachers,
            addStudent,
            updateStudent,
            deleteStudent,
            addTeacher,
            updateTeacher,
            deleteTeacher
        }}>
            {children}
        </ManagementContext.Provider>
    );
};

export { ManagementContext, ManagementProvider };
