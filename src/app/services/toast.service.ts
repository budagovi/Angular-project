import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  showToast(message: string): void {
    this.showToastWithClass(message, 'custom-toast');
  }

  showSuccess(message: string): void {
    this.showToastWithClass(message, 'custom-toast success-toast');
  }

  showError(message: string): void {
    this.showToastWithClass(message, 'custom-toast error-toast');
  }

  showInfo(message: string): void {
    this.showToastWithClass(message, 'custom-toast info-toast');
  }

  private showToastWithClass(message: string, cssClass: string): void {
    const toast = this.renderer.createElement('div');
    this.renderer.addClass(toast, cssClass);
    this.renderer.appendChild(toast, this.renderer.createText(message));

    document.body.appendChild(toast);

    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }
}
