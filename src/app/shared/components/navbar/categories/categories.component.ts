import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { Observable } from "rxjs"

import { UiService } from "../../../../core/services/ui.service"

@Component({
  selector: "nav-categories",
  imports: [CommonModule, FormsModule],
  templateUrl: "./categories.component.html",
  styleUrl: "./categories.component.css"
})
export class CategoriesComponent {
  isOpen$: Observable<boolean>

  constructor(private uiService: UiService) {
    this.isOpen$ = this.uiService.getCategoriesState()
  }

  activeCategory: string | null = null

  categories = [
    {
      name: "Tecnología",
      subcategories: ["Laptops", "Celulares", "Accesorios"]
    },
    {
      name: "Hogar",
      subcategories: ["Muebles", "Decoración", "Electrodomésticos"]
    },
    {
      name: "Moda",
      subcategories: ["Ropa", "Calzado", "Accesorios"]
    }
  ]

  toggleCategory(name: string) {
    this.activeCategory = this.activeCategory === name ? null : name
  }

  closeMenu() {
    this.uiService.toggleCategories()
  }
}
