import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProgressBarComponent as IProgressBarComponent } from '../../../app/components/progress-bar/progress-bar.component';

@Component({
  selector: 'storybook-progress',
  standalone: true,
  imports: [CommonModule, IProgressBarComponent],
  template: `<i-progress-bar
    [value]="value"
    [status]="status"
    [shape]="shape"
  ></i-progress-bar>`,
})
export class ProgressBarComponent {
  @Input()
  value = 0;

  @Input()
  status: string | undefined;

  @Input()
  shape: 'circle' | 'rectangle' = 'circle';
}
