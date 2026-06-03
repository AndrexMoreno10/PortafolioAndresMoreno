import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
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

    setTimeout(() => {
      const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        this.triggerAnimation();
      }
    }, 150);

    setTimeout(() => this.triggerAnimation(), 2000);
  }
}
