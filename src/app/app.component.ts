import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo';

  value?:boolean;

  open(event:any){

  this.value=event;

  }

  home(value:boolean){
    this.value=!value
  }
}
