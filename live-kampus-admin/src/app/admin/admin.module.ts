
import { NgModule } from '@angular/core';
import { SchoolModule } from './school/school.module';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { CityModule } from './city/city.module';
import { EventModule } from './event/event.module';
import { UserModule } from './users/users.module';
import { RoomSpaceModule } from './roomspace/roomspace.module';
import { NotificationModule } from './notification/notification.module';

@NgModule({
    declarations:[AdminComponent],
    imports:[
        BrowserModule,
        SchoolModule,
        CityModule,
        EventModule,
        UserModule,
        RoomSpaceModule,
        NotificationModule,
        RouterModule.forChild(adminRoutes)
    ],
    exports:[
        AdminComponent,
        RouterModule
    ]
})
export class AdminModule{

}