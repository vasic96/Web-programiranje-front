import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private _http: HttpClient) { }

  addVideo(video){
    return this._http.post("/WebProgramiranje/video",video);
  }

  allVideos(){
    return this._http.get('/WebProgramiranje/videos');
  }

}
