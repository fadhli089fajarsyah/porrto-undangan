import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layer3',
  standalone: true,
  imports: [],
  templateUrl: './layer3.component.html',
  styleUrl: './layer3.component.css'
})
export class Layer3Component {
// ini buat anaimasi
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
//ini akhir animasi
}
