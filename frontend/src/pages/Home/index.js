import React, { useState, useEffect } from 'react';
import { ViewState 
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  WeekView,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DateNavigator
} from '@devexpress/dx-react-scheduler-material-ui';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import api from '../../api';
import TopBar from '../../components/AppBar'
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

      console.log(tasks)


    return(
      <Box
      sx={{
          width: "100%",
          height: "100%",
           }}>
        <TopBar/>        
    <Box m={4}  
    sx={{
        width: "95%",
        height: "80vh",
         }}>
      {loading && <div/>}
      {!loading &&
        <Scheduler
            data={tasks}
            currentDate={currentDate}
            locale={"pt-BR"}
            >          
            <ViewState
              defaultCurrentDate={currentDate}
              defaultCurrentViewName="Week"
            />
            <DayView
              startDayHour={7}
              endDayHour={21}
            />
            <WeekView
              startDayHour={7}
              endDayHour={21}
            />
            <MonthView
              startDayHour={7}
              endDayHour={21}
            />
              <Toolbar             
              />
              <DateNavigator />
              <ViewSwitcher 
              />                     
              <Appointments />
              </Scheduler>
            }
        <Fab color="primary" aria-label="add" className="fab">
          <AddIcon />
        </Fab>
      </Box>    
      </Box>

    );
}

export default Home;