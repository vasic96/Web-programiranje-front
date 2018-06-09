import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private _http: HttpClient) { }

  saveToLocalStorage(user){
    console.log(JSON.stringify(user));
    localStorage.setItem('currentUser',JSON.stringify(user));
  }

  isUlogovan(){
    var currentUser = localStorage.getItem('currentUser');
    if(currentUser){
      return true;
    }

    return false;
  }

  getCurrentUser(){
      return JSON.parse(localStorage.getItem('currentUser'));
  }

  registracija(korisnik){
    return this._http.post("/WebProgramiranje/korisnik",korisnik);
  }

  login(data){
    return this._http.post('/WebProgramiranje/login',data);
  }

  logout(){
    return this._http.get('/WebProgramiranje/logout');
  }

}
