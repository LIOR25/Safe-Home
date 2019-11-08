import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './frontend/pages/home-page/home-page.component';
import { CameraTestComponent } from './frontend/pages/camera-test/camera-test.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'test', component: CameraTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
