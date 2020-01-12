import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { MatCardModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes = [
  {
      path     : 'pokemon-details',
      component: PokemonDetailsComponent
  }
];

@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    // FlexLayoutModule,
    MatTableModule
  ]
})
export class PokemonDetailsModule { }
