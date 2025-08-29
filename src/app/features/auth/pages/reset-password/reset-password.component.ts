import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from "@angular/forms"
import { Router } from "@angular/router"

@Component({
  selector: "app-reset-password",
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./reset-password.component.html",
  styleUrl: "./reset-password.component.css"
})
export class ResetPasswordComponent {
  currentStep: "forgot" | "reset" = "forgot"
  forgotPasswordForm: FormGroup
  resetPasswordForm: FormGroup

  showNewPassword = false
  showConfirmPassword = false
  isLoading = false
  isResetLoading = false

  constructor(private fb: FormBuilder, private router: Router) {
    // Form para forgot password
    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    })

    // Form para reset password
    this.resetPasswordForm = this.fb.group(
      {
        newPassword: ["", [Validators.required, this.passwordStrengthValidator]],
        confirmPassword: ["", [Validators.required]]
      },
      { validators: this.passwordMatchValidator }
    )
  }

  // Validador personalizado para la fortaleza de la contraseña
  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value

    if (!password) {
      return null
    }

    const hasMinLength = password.length >= 8
    const hasNumber = /\d/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasUppercase = /[A-Z]/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    const valid =
      hasMinLength && hasNumber && hasLowercase && hasUppercase && hasSpecialChar

    if (!valid) {
      return { passwordStrength: true }
    }

    return null
  }

  // Validador para confirmar que las contraseñas coincidan
  passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const newPassword = formGroup.get("newPassword")
    const confirmPassword = formGroup.get("confirmPassword")

    if (!newPassword || !confirmPassword) {
      return null
    }

    if (newPassword.value !== confirmPassword.value) {
      return { passwordMismatch: true }
    }

    return null
  }

  // Enviar email de reset
  onSendReset() {
    if (this.forgotPasswordForm.valid) {
      this.isLoading = true
      const email = this.forgotPasswordForm.get("email")?.value

      // Simular llamada a API
      setTimeout(() => {
        console.log("Send reset email to:", email)
        this.isLoading = false

        // Transición al segundo bloque
        this.currentStep = "reset"

        // Aquí implementarías tu lógica de envío de email
        // Por ejemplo: this.authService.sendResetEmail(email)
      }, 2000)
    } else {
      this.forgotPasswordForm.get("email")?.markAsTouched()
    }
  }

  // Restablecer contraseña
  onResetPassword() {
    if (this.resetPasswordForm.valid) {
      this.isResetLoading = true
      const newPassword = this.resetPasswordForm.get("newPassword")?.value

      // Simular llamada a API
      setTimeout(() => {
        console.log("Reset password with:", newPassword)
        this.isResetLoading = false

        // Aquí implementarías tu lógica de reset
        // Por ejemplo: this.authService.resetPassword(token, newPassword)

        alert("Contraseña restablecida exitosamente")
        this.router.navigate(["/login"])
      }, 2000)
    } else {
      Object.keys(this.resetPasswordForm.controls).forEach((key) => {
        this.resetPasswordForm.get(key)?.markAsTouched()
      })
    }
  }

  // Navegación
  onBackToLogin() {
    this.router.navigate(["/login"])
  }

  goBackToForgot() {
    this.currentStep = "forgot"
  }

  // Toggle password visibility
  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword
  }
}
