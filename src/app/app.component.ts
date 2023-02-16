import { Component } from '@angular/core';
import { Nano } from './Nano';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nani : Nano[] =  [new Nano('Mammolo',1),new Nano('Brontolo',2),new Nano('Eolo',3),new Nano('Pisolo',7),new Nano('Cucciolo',4),new Nano('Gongolo',5),new Nano('Dotto',6)]
  classe : string = 'propertyBinding'
  stringInterpolation : string = 'stringInterpolation'
  twoWayBinding :  string = 'two way binding'
  eventBinding(){
    this.stringInterpolation += 'a'
  }
}
