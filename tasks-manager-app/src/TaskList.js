import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from './TaskContext';
import { List, ListItem, ListItemText, IconButton, Divider, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  const { tasks, deleteTask, toggleTask } = useContext(TaskContext);
  const h2Style = {
    textAlign: 'center', 
    fontFamily: 'Arial',
  };

  // Função para ordenar as tarefas com base na data, da mais antiga para a mais recente
  const sortedTasks = tasks.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div>
      <h2 style={h2Style}>Tarefas:</h2>
      {sortedTasks.length === 0 ? (
        <Typography variant="subtitle1" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Não há tarefas disponíveis.
        </Typography>
      ) : (
        <List>
          {sortedTasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemText
                primary={
                  <Link to={`/tasks/${task.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {task.title}
                  </Link>
                }
                secondary={task.date}
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => toggleTask(task.id)}
              />
              <IconButton onClick={() => deleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
      <Divider style={{ margin: '20px 0' }} />
    </div>
  );
};

export default TaskList;