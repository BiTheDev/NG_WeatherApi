import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  public City;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params)
  });
  let city = this._httpService.getWeather("Seattle");
  city.subscribe(data =>{
    console.log("City data");
    this.City = data;
    console.log(this.City);
    
    
  })
  console.log(this.City);
  
  }
  goHome(){
    this._router.navigate(['/']);
  }
  city(){
    this._router.navigate(['/seattle'])
  }
  // ganJose(){
  //   this._router.navigate(['/sanJose'])
  // }
  // burbank(){
  //   this._router.navigate(['/burbank'])
  // }
  // dallas(){
  //   this._router.navigate(['/dallas'])
  // }
  // washington(){
  //   this._router.navigate(['/washington'])
  // }
  // chicago(){
  //   this._router.navigate(['/chicago'])
  // }
}
