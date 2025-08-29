import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class UiService {
  // Categories
  private categoriesOpen$ = new BehaviorSubject<boolean>(false)

  getCategoriesState() {
    return this.categoriesOpen$.asObservable()
  }

  toggleCategories() {
    this.categoriesOpen$.next(!this.categoriesOpen$.value)
    this.closeFavorites()
    this.closeCart()
  }

  // Favorites
  private favoritesOpen$ = new BehaviorSubject<boolean>(false)

  getFavoritesState() {
    return this.favoritesOpen$.asObservable()
  }

  toggleFavorites() {
    this.favoritesOpen$.next(!this.favoritesOpen$.value)
    this.closeCategories()
    this.closeCart()
  }

  // Cart
  private cartOpen$ = new BehaviorSubject<boolean>(false)

  getCartState() {
    return this.cartOpen$.asObservable()
  }

  toggleCart() {
    this.cartOpen$.next(!this.cartOpen$.value)
    this.closeCategories()
    this.closeFavorites()
  }

  closeCategories() {
    this.categoriesOpen$.next(false)
  }

  closeFavorites() {
    this.favoritesOpen$.next(false)
  }

  closeCart() {
    this.cartOpen$.next(false)
  }
}
