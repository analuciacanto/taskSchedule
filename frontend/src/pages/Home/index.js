import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
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
  const currentDate = new Date();

  const [task, setTask] = useState({
    title: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
  });

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
  };

  const handleChange = (item, newValue) => {
    setTask({ ...task, [item]: newValue });
  };

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
    </Box>

  );
}

export default Home;
