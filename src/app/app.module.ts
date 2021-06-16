import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { UpdateMovieComponent } from './admin/update-movie/update-movie.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PurchasesComponent } from './user/purchases/purchases.component';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ReviewsComponent } from './user/reviews/reviews.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

// decorators are Like Attributes in C#
// []
// Every Angular app needs atleast one Module => 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    MovieCardComponent,
    HeaderComponent,
    FooterComponent,
    CreateMovieComponent,
    CreateCastComponent,
    UpdateMovieComponent,
    LoginComponent,
    RegisterComponent,
    PurchasesComponent,
    FavoritesComponent,
    ProfileComponent,
    ReviewsComponent,
    MovieDetailsComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
