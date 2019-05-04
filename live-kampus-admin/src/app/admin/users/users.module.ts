import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { userRoutes } from './users.routes';
import { UserListComponent } from './users-list.component';
import { UserDetailsComponent } from './users-details.component';


@NgModule({
    declarations: [
        UserListComponent,
        UserDetailsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        UserListComponent,
        UserDetailsComponent
    ]
})

export class UserModule {

}