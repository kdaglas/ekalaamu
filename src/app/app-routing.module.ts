import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialAuthComponent } from './components/social-auth/social-auth.component';

const routes: Routes = [
  // { path: 'social', component: SocialAuthComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
