import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatCardModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

const routes = [
  {
      path     : 'pokemon-list',
      component: PokemonListComponent
  }
];


@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    RouterModule.forChild(routes),
  ]
})
export class PokemonListModule { }
