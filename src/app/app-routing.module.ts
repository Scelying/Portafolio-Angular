import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProfileComponent } from './components/home-profile/home-profile.component';
import { RealtimeLocationComponent } from './components/realtime-location/realtime-location.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeProfileComponent},
  {path:'todo-list', component: TodoListComponent},
  {path:'weather-app', component: WeatherAppComponent}, 
  {path: 'app-realtime-location', component: RealtimeLocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
