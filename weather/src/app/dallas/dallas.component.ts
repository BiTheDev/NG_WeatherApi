import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
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
    let city = this._httpService.getWeather("Dallas");
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
}