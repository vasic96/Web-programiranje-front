import { Component, OnInit } from '@angular/core';
import { KorisnikService } from './korisnik.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private korisnikService: KorisnikService){}

  ulogovan = false;
  admin = false;
  currentUser;

  ngOnInit(){
    this.loginProvera(); 
  }

  loginProvera(){
    if(this.korisnikService.isUlogovan()){
      console.log('ulogovan');
      this.currentUser = this.korisnikService.getCurrentUser();
      this.ulogovan = true;
      console.log(this.currentUser);
    } else {
      this.ulogovan = false;
    }
  }


  onSubmitRegistracija(form){
    console.log(form);
    this.korisnikService.registracija(form).subscribe(
      success=>{
         console.log("Uspesno!");
         $("#registracijaModal .close").click();
      },
      error => console.log(error)
    )
  }

  onSubmitLogin(data){
    console.log(data);
    this.korisnikService.login(data).subscribe(
      success => { 
        this.korisnikService.saveToLocalStorage(success)
        $("#loginModal .close").click();
        this.loginProvera();
      },
      error => console.log(error)
    )
  }
  
  doLogout(){
    return this.korisnikService.logout().subscribe(
      success => {
        console.log('Uspesno izlgoovan');
        localStorage.clear();
        this.loginProvera();
      },
      error => {
        console.log('Nije uspesno izlogovan');
        localStorage.clear();
        this.loginProvera();
      }
    )
  }

}
