import { Component, OnInit } from '@angular/core';
import { KorisnikService } from './korisnik.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private korisnikService: KorisnikService){}

  ngOnInit(){
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    console.log(regExp); 
 
  }

  onSubmitRegistracija(form){
    console.log(form);
    this.korisnikService.registracija(form).subscribe(
      success=> console.log("Uspesno!"),
      error => console.log(error)
    )
  }

  onSubmitLogin(data){
    console.log(data);
    this.korisnikService.login(data).subscribe(
      success => this.korisnikService.saveToLocalStorage(success),
      error => console.log(error)
    )
  }

}
