import{Routes}from "@angular/router";
import { UserListComponent } from './users-list.component';
import { UserDetailsComponent } from './users-details.component';
// import { UserDetailsComponent } from './user-details.component';


export const userRoutes: Routes=[
    // {path:"userlist", component:UserDetailsComponent},
    {path:"admin/userlist", component:UserListComponent},
   {path:"admin/userlist/userdetails",component:UserDetailsComponent}
];