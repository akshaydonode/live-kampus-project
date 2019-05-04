import { NgModule } from "@angular/core";
import { NotificationComponent } from './notification.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
declarations:[NotificationComponent],
imports:[BrowserModule],
exports:[NotificationComponent]
})
export class NotificationModule{

}