import React, { useState, useEffect } from 'react';
import {Box, Alert, Snackbar } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import api from '../../api';
import TopBar from '../../components/AppBar';
import TasksScheduler from '../../components/Scheduler';
import './styles.css';
import FormDialog from '../../components/Dialog';
import TaskForm from '../../components/Forms/TaskForm';

function Home() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [alert, setAlert] = useState(false);
  const currentDate = new Date();

  const [task, setTask] = useState({
    title: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
  });

  const getTasks = () => {
    setLoading(true);
    api.get('/tasks')
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(`Ops! Houve um erro ao realizar as requisições: ${err}`);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/tasks', task)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpenCreateDialog(false);
    getTasks();
    setAlert(true);    
    setTask({
      title: '',
      description: '',
      startDate: new Date(),
      endDate: new Date(),
    });
  };

  const handleChange = (item, newValue) => {
    setTask({ ...task, [item]: newValue });
  };

    useEffect(() => {
    getTasks();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <TopBar />
      {loading && <div />}
      { !loading
             && (
             <Box
               m={4}
               sx={{
                 width: '95%',
                 height: '80vh',
               }}
             >
               <TasksScheduler currentDate={currentDate} data={tasks} onClick={()=> setOpenCreateDialog(true)} />
               <Fab onClick={() => setOpenCreateDialog(true)} color="primary" aria-label="add" className="fab">
                 <AddIcon />
               </Fab>
             </Box>
             )}
              <FormDialog
                handleSubmit={handleSubmit}
                open={openCreateDialog}
                handleClose={() => setOpenCreateDialog(false)}
                title="Criar nova tarefa"
              >
                <TaskForm handleChange={handleChange} task={task} />
                </FormDialog>
                <Snackbar open={alert} autoHideDuration={6000} onClose={() => setAlert(false)}>
                      <Alert  onClose={() => setAlert(false)} severity="success" sx={{ width: '100%' }}>
                                Tarefa criada com sucesso!         
                      </Alert>
                  </Snackbar>                              
            </Box>
  );
}

export default Home;
