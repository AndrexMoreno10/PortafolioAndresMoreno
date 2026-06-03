import {
  Component, AfterViewInit, ElementRef,
  Inject, PLATFORM_ID, HostListener, ViewChild
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  private animated = false;

  @ViewChild('nombre')  nombreRef!:  ElementRef<HTMLInputElement>;
  @ViewChild('email')   emailRef!:   ElementRef<HTMLInputElement>;
  @ViewChild('asunto')  asuntoRef!:  ElementRef<HTMLInputElement>;
  @ViewChild('mensaje') mensajeRef!: ElementRef<HTMLTextAreaElement>;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    const nombre  = this.nombreRef.nativeElement.value.trim();
    const email   = this.emailRef.nativeElement.value.trim();
    const asunto  = this.asuntoRef.nativeElement.value.trim();
    const mensaje = this.mensajeRef.nativeElement.value.trim();

    if (!nombre || !mensaje) return;

    const lines = [
      `Hola Andres! 👋`,
      ``,
      `*Nombre:* ${nombre}`,
      email   ? `*Email:* ${email}`     : '',
      asunto  ? `*Asunto:* ${asunto}`   : '',
      ``,
      `*Mensaje:*`,
      mensaje,
    ].filter(l => l !== undefined);

    const text = encodeURIComponent(lines.join('\n'));
    if (isPlatformBrowser(this.platformId)) {
      window.open(`https://wa.me/573205426119?text=${text}`, '_blank');
    }
  }

  private triggerAnimation(): void {
    if (this.animated) return;
    this.animated = true;
    this.el.nativeElement.classList.add('is-visible');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId) || this.animated) return;
    const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) this.triggerAnimation();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => {
      const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) this.triggerAnimation();
    }, 150);
    setTimeout(() => this.triggerAnimation(), 2000);
  }
}
