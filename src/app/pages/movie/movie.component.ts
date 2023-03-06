import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  isUserLoggedIn = true;

  thrillerMovieResult: any;
  sciencefictionMovieResult: any;
  documentaryMovieResult: any;
  comedyMovieResult: any;
  animationMovieResult: any;
  adventureMovieResult: any;

  constructor(private service:MovieApiServiceService) { }

  bannerResult : any =[];
  trendingResult : any = [] ;
  actionMovieResult : any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();

  }

  // banner Data
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
      console.log(this.bannerResult);
    });
  }

  trendingData()
  {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result,"trendingMovies#");
      this.trendingResult = result.results ;
    })
  }

  actionMovie()
  {
    this.service.fetchActionMovies().subscribe((result)=>{
      this.actionMovieResult = result.results;
    })
  }

  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
