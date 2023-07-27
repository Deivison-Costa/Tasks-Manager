import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';
import { TextField, Button, Grid, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const TaskForm = () => {
  const [newTask, setNewTask] = useState({ title: '', description: '', date: '', importance: 'Simples' }); // Adicionamos o campo 'importance' no estado
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title.trim() !== '' && newTask.date.trim() !== '') {
      addTask(newTask);
      setNewTask({ title: '', description: '', date: '', importance: 'Simples' }); // Reiniciamos o campo 'importance' após adicionar a tarefa
    }
  };

  return (
    <Box mb={2}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Título"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Data"
              type="date"
              value={newTask.date}
              onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
              variant="outlined"
              fullWidth
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Nível de Importância</InputLabel>
              <Select
                value={newTask.importance}
                onChange={(e) => setNewTask({ ...newTask, importance: e.target.value })}
                label="Nível de Importância"
              >
                <MenuItem value="Simples">Simples</MenuItem>
                <MenuItem value="Importante">Importante</MenuItem>
                <MenuItem value="Urgente">Urgente</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" size="small">
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default TaskForm;