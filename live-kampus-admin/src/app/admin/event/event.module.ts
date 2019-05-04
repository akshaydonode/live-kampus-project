import { NgModule } from '@angular/core';
import { EventList } from './event-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { EventDetailsComponents } from './event-details.component';
import { eventRoutes } from './event.routes';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        EventList,
        EventDetailsComponents,
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(eventRoutes)
    ],

    exports: [
       EventList,
       EventDetailsComponents,
       RouterModule
    ]
   
})
export class EventModule {

}
