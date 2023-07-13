import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDetails = false;
  log = [];
  
onClickDetails(){
  this.log.push(this.log.length + 1);
  this.showDetails = !this.showDetails;
}

getColor(){
}


}
