import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  url;
  data;
  current_img;
  displayedColumns: string[] = ['abilities'];

  constructor(private appService: AppService, private router: Router) { 
    this.url = localStorage.getItem('current_url');
    this.current_img = localStorage.getItem('current_img')
  }

  ngOnInit() {
    this.appService.get_data(this.url).subscribe((res)=> {
      console.log("response",res);
      this.data = res;
    },
  (error)=>{
      console.log(error);
  });
  }

  back() {
    console.log('dd')
    this.router.navigateByUrl('/pokemon-list');
  }

}
