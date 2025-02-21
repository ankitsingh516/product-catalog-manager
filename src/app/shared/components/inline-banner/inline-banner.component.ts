import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inline-banner',
  imports: [CommonModule],
  templateUrl: './inline-banner.component.html',
  styleUrl: './inline-banner.component.scss',
})

export class InlineBannerComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success'; // Type of the banner (success or error)
}
