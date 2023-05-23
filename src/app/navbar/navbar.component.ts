import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDisable:boolean=false;
  enableBtn(e:any){
    if(e.target.value.length!=0){
      this.isDisable=true;
    }
    else{
      this.isDisable=false
    }
  }
  search(e:any){

  }
}
