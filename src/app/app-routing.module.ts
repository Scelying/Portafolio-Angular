import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmFinderComponent } from './components/film-finder/film-finder.component';
import { HomeProfileComponent } from './components/home-profile/home-profile.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';
import { WebChatComponent } from './components/web-chat/web-chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeProfileComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'weather-app', component: WeatherAppComponent },
  { path: 'app-film-finder', component: FilmFinderComponent },
  { path: 'app-web-chat', component: WebChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
