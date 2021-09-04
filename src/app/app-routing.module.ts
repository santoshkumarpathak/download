import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';

const routes: Routes = [
  {
    path: 'DownloadsComponent',
    component: DownloadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
