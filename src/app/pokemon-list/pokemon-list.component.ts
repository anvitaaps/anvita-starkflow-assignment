import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Pokemon from 'pokemon-images';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

export interface PokemonData {
  name: string;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  title = 'anvita-zdaly-assignment';
  displayedColumns: string[] = ['name', 'image'];
  isLoader = true;
  dataSource: MatTableDataSource<PokemonData>;
  url;
  prev;
  next;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private appService: AppService, private router: Router) {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }

  ngOnInit() {
    this.get_data(this.url);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  get_data(url) {
    this.appService.get_data(url).subscribe((res)=> {
      this.isLoader = false;
      console.log("response",res);
      if (res.results) {
        let data = res.results;
      data.map( item => {
        var SquirtleImg = Pokemon.getSprite(item.name);
        // console.log(SquirtleImg);
        item.image = SquirtleImg;
      })
      // console.log('data: ', data)
      this.prev = res.previous;
      this.next = res.next;
      
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      }
      
    },
  (error)=>{
      console.log(error);
  });
  }

  onPaginateChange(state) {
    console.log(state);
    if (state == 'prev')
      this.get_data(this.prev);
    if (state == 'next')
      this.get_data(this.next)
  }

  view_data(row) {
    console.log(row.url);
    this.router.navigateByUrl('/pokemon-details');
    localStorage.setItem('current_url',row.url);
    localStorage.setItem('current_img', row.image)
    // this.get_data(row.url);
  }

}

