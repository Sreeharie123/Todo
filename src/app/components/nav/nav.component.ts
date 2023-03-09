import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

value:boolean=true

@Output() openElemnt=new EventEmitter()

  open(element:boolean){

    this.value=!element

    this.openElemnt.emit(this.value)

  }

}
