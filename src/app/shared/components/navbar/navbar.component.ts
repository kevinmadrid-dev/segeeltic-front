import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Component, ViewChild } from "@angular/core"

import { SearchBarComponent } from "./search-bar/search-bar.component"
import { CategoriesComponent } from "./categories/categories.component"
import { ProfileComponent } from "./profile/profile.component"
import { FavoritesComponent } from "./favorites/favorites.component"
import { UiService } from "../../../core/services/ui.service"
import { CartComponent } from "../../../features/cart/cart.component"
import { Router, RouterModule } from "@angular/router"

@Component({
  selector: "shared-navbar",
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SearchBarComponent,
    CategoriesComponent,
    ProfileComponent,
    FavoritesComponent
  ],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css"
})
export class NavbarComponent {
  constructor(private uiService: UiService) {}

  toggleCategoriesMenu() {
    this.uiService.toggleCategories()
  }

  toggleFavoritesMenu() {
    this.uiService.toggleFavorites()
  }

  @ViewChild(ProfileComponent) profile!: ProfileComponent

  toggleProfileMenu() {
    this.profile.toggleMenu()
  }
}
