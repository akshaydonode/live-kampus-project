import { Routes } from '@angular/router';
import { EventList } from './event-list.component';


export const eventRoutes: Routes = [
    { path: "admin/eventlist", component: EventList },
    { path: "admin/eventdetails", component: EventList }
];