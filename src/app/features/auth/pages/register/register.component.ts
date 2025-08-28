import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms"
import { Router } from "@angular/router"

@Component({
  selector: "app-register",
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css"
})
export class RegisterComponent {
  registerForm: FormGroup
  showPassword = false
  showConfirmPassword = false
  isLoading = false

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        nombre: ["", [Validators.required, Validators.minLength(2)]],
        apellidos: ["", [Validators.required, Validators.minLength(2)]],
        dni: ["", [Validators.required, Validators.pattern(/^\d{8}$/)]],
        celular: ["", [Validators.required, Validators.pattern(/^9\d{8}$/)]],
        password: ["", [Validators.required, this.passwordStrengthValidator]],
        confirmPassword: ["", [Validators.required]]
      },
      { validators: this.passwordMatchValidator }
    )
  }

  // Validador personalizado para la fortaleza de la contraseña
  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value

    if (!password) {
      return null // Dejar que el required maneje esto
    }

    const hasMinLength = password.length >= 8
    const hasNumber = /\d/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasUppercase = /[A-Z]/.test(password)

    const valid = hasMinLength && hasNumber && hasLowercase && hasUppercase

    if (!valid) {
      return { passwordStrength: true }
    }

    return null
  }

  // Validador para confirmar que las contraseñas coincidan
  passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get("password")
    const confirmPassword = formGroup.get("confirmPassword")

    if (!password || !confirmPassword) {
      return null
    }

    if (password.value !== confirmPassword.value) {
      return { passwordMismatch: true }
    }

    return null
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true
      const formData = this.registerForm.value

      // Eliminar confirmPassword del objeto a enviar
      const { confirmPassword, ...registerData } = formData

      // Simular llamada a API
      setTimeout(() => {
        console.log("Register attempt:", registerData)
        this.isLoading = false

        // Aquí implementarías tu lógica de registro
        // Por ejemplo: this.authService.register(registerData)

        alert("Registro exitoso - implement your registration service here")

        // Redireccionar después del registro exitoso
        // this.router.navigate(['/login']);
      }, 2000)
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.registerForm.controls).forEach((key) => {
        this.registerForm.get(key)?.markAsTouched()
      })
    }
  }

  onGoToLogin() {
    this.router.navigate(["/login"])
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword
  }
}
