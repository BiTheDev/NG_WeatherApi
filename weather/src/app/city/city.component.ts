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
  img : String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.name = params.name;
      console.log("name: " + this.name)
      let city = this._httpService.getWeather(this.name);
      city.subscribe(data =>{
        console.log("City data");
        this.City = data;
        console.log( "data " + this.City);
  });
    if(this.name == "seattle"){
      this.img ="https://www.seattleu.edu/media/homepage/images/SeattleSkyline-hp.jpg";
    }else if(this.name == "san Jose"){
      this.img = "https://i.ytimg.com/vi/car6ehhepxw/maxresdefault.jpg";
    }else if(this.name == "burbank"){
      this.img = "http://www.burbankca.gov/Home/ShowImage?id=2356&t=635073167899370000";
    }else if(this.name == "dallas"){
      this.img = "https://d2t1047w253zzm.cloudfront.net/blog/2017/11/dallas.jpeg";
    }else if(this.name == "washington"){
      this.img = "https://cdn.shopify.com/s/files/1/1831/5307/products/16528.jpg?v=1499703455";
    }else if(this.name == "chicago"){
      this.img = "https://media-cdn.tripadvisor.com/media/photo-s/07/72/27/a3/chicago.jpg";
    }
  })
  
  }
}
