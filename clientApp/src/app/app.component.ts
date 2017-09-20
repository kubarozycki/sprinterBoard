import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  openNav():void{
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("showMenuBtn").classList.toggle("change");
  }

  closeNav():void{
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("showMenuBtn").classList.toggle("change");
  }

  toogle():void{
    var width=document.getElementById("myNav").style.width;
    console.log(width);
    if(width=='100%'){
      this.closeNav();
    }
    else{
      this.openNav();
    }
    
  }
}
