import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeProfileComponent } from './components/home-profile/home-profile.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeProfileComponent,
    TodoListComponent,
    ConfirmDialogComponent,
    WeatherAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule
  ],
  // entryComponents:[ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
