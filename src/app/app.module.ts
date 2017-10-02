import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
// routing demo
import { Appproduct } from './product.component';
import { AppInventory } from './inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from  './notFound.component' 
// http stuff
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
   { path: 'Product', component: Appproduct },
   { path: 'Inventory', component: AppInventory },
   { path: '**', component: PageNotFoundComponent } 
];

@NgModule ({
   imports:      [ BrowserModule,HttpModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,Appproduct,AppInventory,PageNotFoundComponent],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }