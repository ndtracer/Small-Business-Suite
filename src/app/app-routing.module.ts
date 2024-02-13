import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const trailersModule = () => import('./trailers/trailers.module').then(x => x.TrailersModule)

const routes: Routes = [

  { path: 'trailers', loadChildren: trailersModule,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
