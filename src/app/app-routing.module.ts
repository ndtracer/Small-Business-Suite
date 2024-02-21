import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AccountModule } from './account/account.module';



const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const trailersModule = () => import('./trailers/trailers.module').then(x => x.TrailersModule)

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'account', loadChildren: accountModule},
  { path: 'trailers', loadChildren: trailersModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
