import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layer2',
  standalone: true,
  imports: [],
  templateUrl: './layer2.component.html',
  styleUrls: ['./layer2.component.css']
})
export class Layer2Component implements AfterViewInit {
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

      const targets = document.querySelectorAll('.memudar, .memudarL, .memudary, .memudarR');
      targets.forEach(target => {
        observer.observe(target);
      });
    }
  }
}
