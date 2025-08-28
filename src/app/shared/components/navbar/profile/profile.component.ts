import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "nav-profile",
  imports: [CommonModule],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css"
})
export class ProfileComponent {
  @Input() user: { name: string } | null = null
  isOpen = false

  constructor(private router: Router) {}

  toggleMenu() {
    this.isOpen = !this.isOpen
  }

  closeMenu() {
    this.isOpen = false
  }

  login() {
    this.router.navigate(["/login"])
    this.closeMenu()
  }

  register() {
    this.router.navigate(["/register"])
    this.closeMenu()
  }

  logout() {
    console.log("Cerrar sesión")
    // aquí llamas a AuthService.logout()
    this.closeMenu()
    this.router.navigate(["/"]) // redirigir al home
  }

  goToProfile() {
    this.router.navigate(["/profile"])
    this.closeMenu()
  }
}
