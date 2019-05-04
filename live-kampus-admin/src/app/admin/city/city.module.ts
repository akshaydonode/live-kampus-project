import { NgModule } from '@angular/core';
import { CityListComponent } from './city-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { cityRoutes } from './city.routes';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        CityListComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forChild(cityRoutes)
    ],
    exports: [
        CityListComponent,
        RouterModule
    ]
})
export class CityModule {

}
