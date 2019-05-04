import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchoolListComponent } from './school-list.component';
import { schoolRoutes } from './school.routes';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations:[
       SchoolListComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(schoolRoutes)
    ],
    exports:[
        SchoolListComponent,
        RouterModule
    ]
})
export class SchoolModule{

}