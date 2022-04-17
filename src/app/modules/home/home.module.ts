import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeStreamComponent } from './home-stream/home-stream.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeStreamComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
