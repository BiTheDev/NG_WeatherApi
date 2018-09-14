import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  public City;
  name :String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.name = params.name;
      console.log(params)
  });
  let city = this._httpService.getWeather(this.name);
  city.subscribe(data =>{
    console.log("City data");
    this.City = data;
    console.log(this.City);
    
    
  })
  console.log(this.City);
  
  }
  ngOnChanges(){
    this.seattle()
    this.sanJose();
  }
  goHome(){
    this._router.navigate(['/']);
  }
  seattle(){
    this._router.navigate(['/seattle'])
  }
  sanJose(){
    this._router.navigate(['/sanJose'])
  }
  burbank(){
    this._router.navigate(['/burbank'])
  }
  dallas(){
    this._router.navigate(['/dallas'])
  }
  washington(){
    this._router.navigate(['/washington'])
  }
  chicago(){
    this._router.navigate(['/chicago'])
  }
}
