import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import api from '../../api';
import TopBar from '../../components/AppBar';
import TasksScheduler from '../../components/Scheduler';
import "./styles.css";

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);

    const currentDate = new Date();
  
    const getTasks = () => {
        setLoading(true)
        api.get("/tasks")
        .then(function (response) {
          setTasks(response.data)
          setLoading(false)
        })
        .catch(function (err) {
          console.error("Ops! Houve um erro ao realizar as requisições: " + err);
          setLoading(false)
        })
      }
     
      useEffect(() => {
        getTasks();
      }, []);


    return(
      <Box
        sx={{
            width: "100%",
            height: "100%",
            }}>
         <TopBar/>        
         {loading && <div/>}
            { !loading && 
             <Box m={4}  
             sx={{
                 width: "95%",
                 height: "80vh",
                 }}>
              <TasksScheduler currentDate={currentDate} data={tasks}/>          
               <Fab color="primary" aria-label="add" className="fab">
                 <AddIcon />
               </Fab>
           </Box>     
           }       
      </Box>

    );
}

export default Home;