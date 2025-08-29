import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { HomePageComponent } from "./features/home-page/home-page.component"

import { LoginComponent } from "./features/auth/pages/login/login.component"
import { RegisterComponent } from "./features/auth/pages/register/register.component"
import { ResetPasswordComponent } from "./features/auth/pages/reset-password/reset-password.component"

export const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "reset-password", component: ResetPasswordComponent },

  { path: "**", redirectTo: "home" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
