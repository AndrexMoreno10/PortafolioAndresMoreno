import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements AfterViewInit {
  private animated = false;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private triggerAnimation(): void {
    if (this.animated) return;
    this.animated = true;
    this.el.nativeElement.classList.add('is-visible');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId) || this.animated) return;
    const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      this.triggerAnimation();
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Caso: el usuario navegó directo a #services-wrapper → ya está en viewport
    setTimeout(() => {
      const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        this.triggerAnimation();
      }
    }, 150);

    // Fallback absoluto: siempre visible después de 2 segundos
    setTimeout(() => this.triggerAnimation(), 2000);
  }
}
