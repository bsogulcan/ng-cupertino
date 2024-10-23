import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output,} from '@angular/core';
import {SegmentedControlOption} from './segmented-option';

@Component({
    selector: 'i-segmented-control',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './segmented-controls.component.html',
    styleUrl: './segmented-controls.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SegmentedControlsComponent {
    @Input() options: SegmentedControlOption[] = [];
    @Input() selectedIndex: number = 0;
    @Input() disabled: boolean = false;
    @Output() selectionChange = new EventEmitter<SegmentedControlOption>();

    onSelect(option: SegmentedControlOption, index: number): void {
        if (this.selectedIndex !== index && !this.disabled) {
            this.selectedIndex = index;
            this.selectionChange.emit(option);
        }
    }
}
