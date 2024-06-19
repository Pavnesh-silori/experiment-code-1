import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path: 'config',
    loadChildren: () => import('./component/activity-config/create/create.module').then(m => m.CreateModule)
  },
  // {
  //   path:'data',
  //   loadChildren : () => import('./component/activity-data/create/create.module').then(m => m.CreateModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
