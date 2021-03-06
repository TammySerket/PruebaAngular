import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './shared/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './shared/about/about.component';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
imports: [
    RouterModule.forRoot( app_routes, { useHash: true } )
],
exports: [
    RouterModule
]
})
 export class AppRoutingModule { }
