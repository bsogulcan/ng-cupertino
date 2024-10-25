import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'i-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  @Input() id: string = 'i-toggle';
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onToggleChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.checked = checkbox.checked;
    this.checkedChange.emit(this.checked);
  }
}
