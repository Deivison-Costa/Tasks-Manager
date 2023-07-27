import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Importe o Routes e o Route corretamente.
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskDetails from './TaskDetails';
import { Container, Typography, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" component={Link} to="/">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Gerenciador de Tarefas
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={4}>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
          </Routes>
          <TaskForm />
        </Box>
      </Container>
    </Router>
  );
};

export default App;