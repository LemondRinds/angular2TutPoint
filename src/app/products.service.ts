import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// imports for observable framework
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
// error handling import for observable
import 'rxjs/add/operator/catch'; 
// import for products
import { IProduct } from './product';

@Injectable()
export class ProductService {
	// used to specify data source
   private _producturl='app/products.json';
   // response and request handler
   constructor(private _http: Http){}
   
   getproducts(): Observable<IProduct[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
   }
   
   // error handler
   private handleError(error: Response){
   		console.error(error);
   		return Observable.throw(error.json().error());
   }
}