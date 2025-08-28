import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Component, ViewChild } from "@angular/core"

import { SearchBarComponent } from "./search-bar/search-bar.component"
import { CategoriesComponent } from "./categories/categories.component"
import { ProfileComponent } from "./profile/profile.component"

@Component({
  selector: "shared-navbar",
  imports: [
    CommonModule,
    FormsModule,
    SearchBarComponent,
    CategoriesComponent,
    ProfileComponent
  ],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css"
})
export class NavbarComponent {
  @ViewChild(CategoriesComponent) categories!: CategoriesComponent

  openCategories() {
    this.categories.openSidebar()
  }

  @ViewChild(ProfileComponent) profile!: ProfileComponent

  toggleProfileMenu() {
    this.profile.toggleMenu()
  }
}
