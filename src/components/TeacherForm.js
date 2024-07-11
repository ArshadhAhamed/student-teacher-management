import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ManagementContext } from '../contexts/ManagementContext';
import { Container, TextField, Button, Typography } from '@mui/material';

const TeacherForm = () => {
    const { teachers, addTeacher, updateTeacher } = useContext(ManagementContext);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [experience, setExperience] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const teacher = teachers.find(teacher => teacher.id === id);
            if (teacher) {
                setName(teacher.name);
                setSubject(teacher.subject);
                setExperience(teacher.experience);
            }
        }
    }, [id, teachers]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const teacher = { id: id || Date.now().toString(), name, subject, experience };

        if (id) {
            updateTeacher(teacher);
        } else {
            addTeacher(teacher);
        }
        navigate('/teachers');
    };

    return (
        <Container>
            <Typography variant="h4" style={{ margin: '20px 0' }}>{id ? 'Edit Teacher' : 'Add Teacher'}</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Subject"
                    fullWidth
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Experience"
                    type="number"
                    fullWidth
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>Save</Button>
            </form>
        </Container>
    );
};

export default TeacherForm;
