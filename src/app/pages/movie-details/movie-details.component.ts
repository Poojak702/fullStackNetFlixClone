import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  constructor(private service:MovieApiServiceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'paramId#');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovie(id:any)
  {
    this.service.getMovieDetails(id).subscribe((result)=>{
        console.log(result,'getMovieDetails#');
        this.getMovieDetailResult = result;
    });
  }

  getVideo(id:any)
  {
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getVideo#');
      result.results.forEach((val:any)=>{
        if(val.type == "Trailer")
        {
          this.getMovieVideoResult = val.key;
        }
      })
    });
  }

  getCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'getCast#');
      this.getMovieCastResult = result.cast;
    })
  }

}
