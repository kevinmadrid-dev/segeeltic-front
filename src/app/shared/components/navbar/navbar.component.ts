import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Component } from "@angular/core"

@Component({
  selector: "shared-navbar",
  imports: [CommonModule, FormsModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css"
})
export class NavbarComponent {
  showDropdown = false
  searchQuery = ""
  lastSearches: string[] = ["Angular 19", "Tailwind navbar", "Segeeltic"]
  suggestions: string[] = []

  // Ocultar con pequeño delay (para no cerrar antes de click)
  hideDropdown() {
    setTimeout(() => (this.showDropdown = false), 150)
  }

  onSearchChange() {
    if (this.searchQuery.trim().length > 0) {
      this.suggestions = [
        `${this.searchQuery} tutorial`,
        `${this.searchQuery} ejemplos`,
        `${this.searchQuery} docs`
      ]
    } else {
      this.suggestions = []
    }
  }

  removeSearch(index: number) {
    this.lastSearches.splice(index, 1)
  }

  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion
    this.lastSearches.unshift(suggestion)
    if (this.lastSearches.length > 3) {
      this.lastSearches.pop() // Máximo 3
    }
    this.showDropdown = false
  }

  isCategoriesOpen = false
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

  closeSidebar() {
    this.isCategoriesOpen = false
    this.activeCategory = null
  }
}
