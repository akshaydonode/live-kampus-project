import { NgModule } from '@angular/core';
import { RoomSpaceComponent } from './roomspace.component';
import { BrowserModule } from '@angular/platform-browser';
import { ViewRoomSpaceComponent } from './view.component';
import { PaymentDetailsComponent } from './paymentdetails.component';
import { roomspaceRoutes } from './roomspace.routes';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [RoomSpaceComponent,ViewRoomSpaceComponent,PaymentDetailsComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(roomspaceRoutes)
    ],
    exports:[RoomSpaceComponent,ViewRoomSpaceComponent,PaymentDetailsComponent,
        RouterModule
    ]
    

    
})

export class RoomSpaceModule{

}