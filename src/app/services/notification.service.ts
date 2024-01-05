import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  showNotification(message: string): void {
    this.showNotificationWithClass(message, 'custom-not');
  }

  showSuccess(message: string): void {
    this.showNotificationWithClass(message, 'custom-not success-not');
  }

  showError(message: string): void {
    this.showNotificationWithClass(message, 'custom-not error-not');
  }

  showInfo(message: string): void {
    this.showNotificationWithClass(message, 'custom-not info-not');
  }

  private showNotificationWithClass(message: string, cssClass: string): void {
    const notification = this.renderer.createElement('div');
    this.renderer.addClass(notification, cssClass);
    this.renderer.appendChild(notification, this.renderer.createText(message));

    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }
}