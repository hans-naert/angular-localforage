import { Component } from '@angular/core';
import * as localforage from 'localforage';

@Component({
  selector: 'app-form-indexeddb',
  templateUrl: './form-indexeddb.component.html',
  styleUrls: ['./form-indexeddb.component.css']
})
export class FormIndexeddbComponent {

  public model = { name:""};
  
  async ngOnInit():  Promise<void> {
    localforage.config({
      name: 'myApp',
      storeName: 'keyvaluepairs',
      description: 'some description'
    });
    this.model.name = await localforage.getItem('name')||"";
  }

  public async onSubmit() { 
    console.log(this.model) 
    let value= await localforage.setItem('name', this.model.name);
    console.log(value);    
  }
}
