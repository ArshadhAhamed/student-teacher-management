import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';
import StudentForm from './components/StudentForm';
import TeacherForm from './components/TeacherForm';

function App() {
    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Student-Teacher Management
                        </Typography>
                        <Button color="inherit" component={Link} to="/students">Students</Button>
                        <Button color="inherit" component={Link} to="/teachers">Teachers</Button>
                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/students" element={<StudentList />} />
                    <Route path="/teachers" element={<TeacherList />} />
                    <Route path="/student-form/:id?" element={<StudentForm />} />
                    <Route path="/teacher-form/:id?" element={<TeacherForm />} />
                </Routes>
            </div>
        </Router>
    );
}

const Home = () => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4">Welcome to the Student-Teacher Management System</Typography>
        <Typography variant="body1">Use the navigation bar to manage students and teachers.</Typography>
    </div>
);

export default App;
