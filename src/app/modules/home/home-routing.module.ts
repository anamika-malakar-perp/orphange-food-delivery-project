import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeStreamComponent } from './home-stream/home-stream.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,   //Without this also working fine
    children: [
      {
        path: 'stream',
        component: HomeStreamComponent,
      },
      {
        path: '**',
        redirectTo: '',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
