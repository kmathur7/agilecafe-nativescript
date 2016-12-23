import { HomeComponent } from './pages/home/home.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

export const routes = [
    {path: "schedule", component: ScheduleComponent},
    { path:"", component: HomeComponent}
];

export const navigableComponents = [
    HomeComponent,
    ScheduleComponent
];