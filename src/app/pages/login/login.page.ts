import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasena:string = "";

  constructor(private router:Router,private helperService:HelperService) { }

  ngOnInit() {
    console.log("Resultado suma metdo desde un servicio:",this.helperService.sumar(10,50));
    
  }


  login(){
    if (this.email == "") {
      //alert("Debe ingresar un email.");
      this.helperService.showAlert("Debe ingresar un email", "Advertencia");
      return;
    }
    if (this.contrasena == "") {
      alert("Debe ingresar una contraseña.")
      return;
    }
    
    if (this.email == "micorreo" && this.contrasena == "123") {
      //alert("Login correcto.");
      this.router.navigateByUrl("menu");
    }else{
      alert("Crdeneciales no validas.");
    }
    
  }

}
