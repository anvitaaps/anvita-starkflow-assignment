import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatCardModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsModule } from './pokemon-details/pokemon-details.module';
import { PokemonListModule } from './pokemon-list/pokemon-list.module';
import { FlexLayoutModule } from "@angular/flex-layout";

const appRoutes: Routes = [
  {
      path      : 'pokemon',
      redirectTo: 'pokemon-details'
  },
  {
    path      : '**',
    redirectTo: 'pokemon-list'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes),
    MatTooltipModule,
    PokemonDetailsModule,
    PokemonListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
