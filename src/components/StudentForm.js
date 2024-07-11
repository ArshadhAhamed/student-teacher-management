import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ManagementContext } from '../contexts/ManagementContext';
import { Container, TextField, Button, Typography } from '@mui/material';

const StudentForm = () => {
    const { students, addStudent, updateStudent } = useContext(ManagementContext);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [classValue, setClassValue] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const student = students.find(student => student.id === id);
            if (student) {
                setName(student.name);
                setAge(student.age);
                setClassValue(student.class);
            }
        }
    }, [id, students]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { id: id || Date.now().toString(), name, age, class: classValue };

        if (id) {
            updateStudent(student);
        } else {
            addStudent(student);
        }
        navigate('/students');
    };

    return (
        <Container>
            <Typography variant="h4" style={{ margin: '20px 0' }}>{id ? 'Edit Student' : 'Add Student'}</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Age"
                    type="number"
                    fullWidth
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Class"
                    fullWidth
                    value={classValue}
                    onChange={(e) => setClassValue(e.target.value)}
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>Save</Button>
            </form>
        </Container>
    );
};

export default StudentForm;
