import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode'

@Component({
  selector: 'app-root',
  imports: [QRCodeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OR-code';
  generateFlag:boolean = false;
  urlName = ""

  onInputChange(){
    this.generateFlag = false
  }

  generateFunc(){
    this.generateFlag = true
  }
}
