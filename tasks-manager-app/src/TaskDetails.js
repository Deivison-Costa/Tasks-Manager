import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from './TaskContext';
import { Typography, IconButton, Box, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask } = useContext(TaskContext);

  const task = tasks.find((task) => task.id.toString() === id);

  if (!task) {
    return <Typography variant="h6">Tarefa não encontrada.</Typography>;
  }

  const importanceStyle = {
    color: '#f50057', // Define a cor vermelha para o texto do nível de importância
    fontWeight: 'bold',
  };

  return (
    <div>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6">{task.title}</Typography>
      </Box>
      <Typography variant="subtitle1" style={importanceStyle}>
        Nível de Relevância: {task.importance}
      </Typography>
      <Typography variant="subtitle1">Data: {task.date}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <IconButton onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
      <Divider style={{ margin: '20px 0' }} />
    </div>
  );
};

export default TaskDetails;