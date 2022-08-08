import React from 'react'
import { ViewState , EditingState, IntegratedEditing
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DateNavigator,
  AppointmentTooltip,
  Appointments,
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
            <EditingState/>
            <IntegratedEditing />
            <Appointments/>
            <AppointmentTooltip
              showCloseButton
          />   
            <DateNavigator/>
            <ViewSwitcher/>                     
          </Scheduler>);
}
export default TasksScheduler;