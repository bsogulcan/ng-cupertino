import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
    SegmentedControlsComponent as ISegmentedControlsComponent
} from '../../../app/components/segmented-controls/segmented-controls.component';
import {SegmentedControlOption} from "../../../app/components/segmented-controls/segmented-option";

@Component({
    selector: 'storybook-segmented-controls',
    standalone: true,
    imports: [CommonModule, ISegmentedControlsComponent],
    template: `
        <i-segmented-control
                [options]="options"
                [selectedIndex]="selectedIndex"
                [disabled]="disabled"
                (selectionChange)="onSelectionChanged($event)"
        >
        </i-segmented-control>
    `,
})
export class SegmentedControlsComponent {
    @Input()
    options: SegmentedControlOption[] = [];
    @Input() selectedIndex: number = 0;
    @Input() disabled: boolean = false;
    @Output() selectionChange = new EventEmitter<SegmentedControlOption>();

    onSelectionChanged(option: SegmentedControlOption) {
        this.selectionChange.emit(option);
    }

}
