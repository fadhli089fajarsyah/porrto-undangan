import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageComponent } from './template/landing-page/landing-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatBottomSheetModule, MatButtonModule,LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'undanganFe';
}
