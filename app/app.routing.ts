import { HomeComponent } from './pages/home/home.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { EventComponent } from './pages/eventdetails/event.component';

export const routes = [
    {path: "event/:id", component: EventComponent},
    {path: "schedule", component: ScheduleComponent},
    { path:"", component: HomeComponent}
];

export const navigableComponents = [
    HomeComponent,
    ScheduleComponent,
    EventComponent
];