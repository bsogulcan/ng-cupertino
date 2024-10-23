import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent as IBtnComponent } from '../../../app/components/button/button.component';
import {IconsModule} from "../../../app/icons/icons.module";

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, IBtnComponent, IconsModule],
  template: `
    <i-button
        [size]="size"
        [style]="style"
        [disabled]="disabled"
        (onClicked)="onClick.emit($event)"
    >
      {{ label }}
    </i-button
    >`,
})
export class ButtonComponent {
  @Input()
  disabled = false;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  style: 'filled' | 'tinted' | 'gray' | 'plain' = 'filled';

  @Input()
  label = 'Play';

  @Output()
  onClick = new EventEmitter<Event>();
}
