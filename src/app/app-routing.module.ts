import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './frontend/pages/home-page/home-page.component';
import { ResidentComponent } from './frontend/pages/resident/resident.component';


const routes: Routes = [{ path: 'home', component: HomePageComponent},
{path: 'resident', component: ResidentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
