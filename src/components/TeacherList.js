import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ManagementContext } from '../contexts/ManagementContext';
import { List, ListItem, ListItemText, Button, Typography, Container } from '@mui/material';

const TeacherList = () => {
    const { teachers, deleteTeacher } = useContext(ManagementContext);

    return (
        <Container>
            <Typography variant="h4" style={{ margin: '20px 0' }}>Teacher List</Typography>
            <Button variant="contained" color="primary" component={Link} to="/teacher-form">Add Teacher</Button>
            <List>
                {teachers.map(teacher => (
                    <ListItem key={teacher.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText primary={`${teacher.name} - ${teacher.subject}`} />
                        <div>
                            <Button variant="contained" color="primary" component={Link} to={`/teacher-form/${teacher.id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteTeacher(teacher.id)}>Delete</Button>
                        </div>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default TeacherList;
