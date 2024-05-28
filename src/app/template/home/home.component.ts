import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../componentsGlobal/navbar/navbar.component';
import { Layer2Component } from './componetsHome/layer2/layer2.component';
import { Layer3Component } from './componetsHome/layer3/layer3.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent , Layer2Component,Layer3Component],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {


  // ini buat animasi ketika scroll baru jalan
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      };
      
      

      const observer = new IntersectionObserver(callback, options);

      const targets = document.querySelectorAll('.memudar, .memudarL, .memudary');
      targets.forEach(target => {
        observer.observe(target);
      });
    }
  }
  // ini akhir logic animasi ketika scroll muncul


}
