import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "nav-search-bar",
  imports: [CommonModule, FormsModule],
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.css"
})
export class SearchBarComponent {
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
}
