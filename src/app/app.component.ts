import { Component } from '@angular/core';
// metadata for the component
@Component({
	// 'css like' selector, angular creates
	// this component on the first matched dom element
  selector: 'my-app',
  // template url
  templateUrl: 'app/app.component.html',
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
}
