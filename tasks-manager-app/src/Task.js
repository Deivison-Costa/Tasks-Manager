import React from 'react';
import { ListItem, ListItemText, IconButton, Typography, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <ListItem>
      <ListItemText
        primary={task.title}
        secondary={
          <>
            <Typography variant="body2">{task.description}</Typography>
            <Typography variant="body2" color="textSecondary">
              Data: {task.date}
            </Typography>
          </>
        }
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTask(task.id)}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => deleteTask(task.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;