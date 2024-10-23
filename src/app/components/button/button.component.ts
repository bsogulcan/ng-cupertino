import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {IconsModule} from "../../icons/icons.module";

@Component({
  selector: 'i-button',
  standalone: true,
  imports: [CommonModule, IconsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() style: 'filled' | 'tinted' | 'gray' | 'plain' = 'filled';
  @Input() disabled: boolean | undefined;

  @Output()
  onClicked = new EventEmitter();

  getClass(): string {
    let klass = this.size + ' '+ this.style;
    return klass;
  }
}
