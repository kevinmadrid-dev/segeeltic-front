import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms"
import { Router } from "@angular/router"

@Component({
  selector: "app-login",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css"
})
export class LoginComponent {
  loginForm: FormGroup
  showPassword = false
  isLoading = false

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true
      const { email, password } = this.loginForm.value

      // Simular llamada a API
      setTimeout(() => {
        console.log("Login attempt:", { email, password })
        this.isLoading = false

        // Lógica de autenticación y redireccionar luego del login

        alert("Login functionality - implement your authentication service here")
      }, 2000)
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.loginForm.controls).forEach((key) => {
        this.loginForm.get(key)?.markAsTouched()
      })
    }
  }

  onForgotPassword() {
    console.log("Forgot password clicked")
    // Lógica de recuperación de contraseña
    alert("Forgot password functionality - implement your reset password flow here")
  }

  onCreateAccount() {
    this.router.navigate(["/register"])
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }
}
