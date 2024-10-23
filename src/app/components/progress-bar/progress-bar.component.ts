import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
} from '@angular/core';

@Component({
  selector: 'i-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  @Input()
  value = 0;

  @Input()
  status: string | undefined;

  @Input()
  shape: 'circle' | 'rectangle' = 'circle';
}
