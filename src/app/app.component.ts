import { Component } from "@angular/core"

import { HomePageComponent } from "./features/home-page/home-page.component"

@Component({
  selector: "app-root",
  imports: [HomePageComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title = "segeeltic-front"
}
