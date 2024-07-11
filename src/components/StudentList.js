import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ManagementContext } from '../contexts/ManagementContext';
import { List, ListItem, ListItemText, Button, Typography, Container } from '@mui/material';

const StudentList = () => {
    const { students, deleteStudent } = useContext(ManagementContext);

    return (
        <Container>
            <Typography variant="h4" style={{ margin: '20px 0' }}>Student List</Typography>
            <Button variant="contained" color="primary" component={Link} to="/student-form">Add Student</Button>
            <List>
                {students.map(student => (
                    <ListItem key={student.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText primary={`${student.name} - ${student.class}`} />
                        <div>
                            <Button variant="contained" color="primary" component={Link} to={`/student-form/${student.id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteStudent(student.id)}>Delete</Button>
                        </div>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default StudentList;
