import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialAuthComponent } from './components/social-auth/social-auth.component';

const routes: Routes = [
  { path: 'social', component: SocialAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
