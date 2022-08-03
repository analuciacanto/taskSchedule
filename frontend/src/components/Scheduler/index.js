import React from 'react'
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

const TasksScheduler = (props) => {

    return( 
         <Scheduler
            data={props.data}
            currentDate={props.currentDate}
            locale={"pt-BR"}
            >          
            <ViewState
            defaultCurrentDate={props.currentDate}
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
          </Scheduler>);
}
export default TasksScheduler;