import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SocialAuthComponent } from "./components/social-auth/social-auth.component";
import { LandingPageComponent } from "src/app/components/landing-page/landing-page.component";

const routes: Routes = [
  // { path: 'social', component: SocialAuthComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: "social",
    component: SocialAuthComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
