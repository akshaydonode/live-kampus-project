import { NgModule } from "@angular/core";
import { NotificationComponent } from './notification.component';
import { BrowserModule } from '@angular/platform-browser';
import { notificationRoutes } from './notification.routes';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NotificationComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(notificationRoutes)
    ],
    exports: [
        NotificationComponent,
        RouterModule
    ]
})
export class NotificationModule {

}