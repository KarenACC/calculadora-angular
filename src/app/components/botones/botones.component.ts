import { Component, EventEmitter, Output } from '@angular/core';
import { log } from 'mathjs';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  @Output()
  buttonClick = new EventEmitter<string>();

  onClick(value:string){
    this.buttonClick.emit(value);
  }

  @Output()
  reset = new EventEmitter();

  onReset(){
    this.reset.emit();
  }

  @Output()
  showHistory= new EventEmitter();

  onShowHistory(){
    this.showHistory.emit();

  }

}
