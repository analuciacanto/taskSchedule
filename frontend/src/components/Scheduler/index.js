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
  DateNavigator,
  TodayButton
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
            <DayView displayName="Dia"/>
            <WeekView displayName="Semana"/>
            <MonthView displayName="Mês"/>
            <Toolbar/>
            <DateNavigator/>
            <ViewSwitcher/>                     
            <Appointments onClick={props.onClick} />
          </Scheduler>);
}
export default TasksScheduler;