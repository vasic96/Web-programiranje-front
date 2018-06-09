import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor(private videoService: VideoService,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadVideos();
  }

  videos;

  onSubmitVideo(video){
    video.korisnikUsername="vaso";
    this.videoService.addVideo(video).subscribe(
      success => {
        this.loadVideos();
        $("#dodavanjeVideaModal .close").click();
      },
      error => console.log(error)
    )
  
  }

  loadVideos(){
    this.videoService.allVideos().subscribe(
      success => this.videos = success,
      error => console.log(error)
    )
  }

}
