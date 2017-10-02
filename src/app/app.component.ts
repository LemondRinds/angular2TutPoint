import { Component } from '@angular/core';
// import junk for products and datasource
import { IProduct } from './product';
import { ProductService } from './products.service';
import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// routing tut
import { Appproduct } from './product.component';
import { AppInventory } from './inventory.component';
// metadata for the component
@Component({
	// 'css like' selector, angular creates
	// this component on the first matched dom element
  selector: 'my-app',
  // template url
  templateUrl: 'app/app.component.html',
  // data provider
  providers: [ProductService],
})
// das class
export class AppComponent  {
	// metadata via constructor
	//constructor(@Environment(‘test’ private appTitle:string) { }
	// basic typescript property
	name: string = 'Angular';
	// metadata as decorator
	//@Environment(‘test’)
	appTitle: string = 'Title';
	// prop used for *ngIf
	appStatus: boolean = true;
	// prop used for *ngFor
	appList: any[] = [ {
      "ID": "1",
      "Name" : "One"
   },

   {
      "ID": "2",
      "Name" : "Two"
   } ];
   // junk for products service
   iproducts: IProduct[];
   constructor(private _product: ProductService) {
   }
   
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }
}
