import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
id:any='';

btn1(ids:any){
  
  if(this.id==ids){
this.id='';
  }
  else{
    this.id=ids;
  }

}
}
