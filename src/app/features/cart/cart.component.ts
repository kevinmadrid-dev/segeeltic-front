import { Component } from "@angular/core"

import { NavbarComponent } from "../../shared/components/navbar/navbar.component"
import { CommonModule } from "@angular/common"

interface Product {
  id: number
  name: string
  store: string
  price: number
  discount?: number // opcional
  quantity: number
  selected: boolean
  image: string
}

@Component({
  selector: "nav-cart",
  imports: [CommonModule, NavbarComponent],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.css"
})
export class CartComponent {
  products: Product[] = [
    {
      id: 1,
      name: "Soporte Aluminio Plegable Para Laptop",
      store: "BUYPAL STORE",
      price: 16.8,
      discount: 44,
      quantity: 1,
      selected: false,
      image: "assets/images/cart01.jpg"
    },
    {
      id: 2,
      name: "Power Bank Cargador Portátil Baseus 30000mAh",
      store: "TODATECNOLOGIA",
      price: 129.6,
      quantity: 1,
      selected: false,
      image: "assets/images/cart02.jpg"
    }
  ]

  // Agrupar por tienda
  get stores() {
    const grouped: { [key: string]: Product[] } = {}
    this.products.forEach((p) => {
      if (!grouped[p.store]) grouped[p.store] = []
      grouped[p.store].push(p)
    })
    return Object.entries(grouped) // [ ['store', Product[]], ...]
  }

  // Calcular total dinámico
  get total() {
    return this.products
      .filter((p) => p.selected)
      .reduce((acc, p) => acc + p.price * p.quantity, 0)
  }

  toggleProduct(product: Product) {
    product.selected = !product.selected
  }

  increase(product: Product) {
    product.quantity++
  }

  decrease(product: Product) {
    if (product.quantity > 1) {
      product.quantity--
    }
  }

  removeProduct(id: number) {
    this.products = this.products.filter((p) => p.id !== id)
  }
}
