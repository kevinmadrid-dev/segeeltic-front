import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { Observable } from "rxjs"

import { UiService } from "../../../core/services/ui.service"

@Component({
  selector: "nav-favorites",
  imports: [CommonModule],
  templateUrl: "./favorites.component.html",
  styleUrl: "./favorites.component.css"
})
export class FavoritesComponent {
  isOpen$: Observable<boolean>

  constructor(private uiService: UiService) {
    this.isOpen$ = this.uiService.getFavoritesState()
  }

  closeMenu() {
    this.uiService.toggleFavorites()
  }
}
