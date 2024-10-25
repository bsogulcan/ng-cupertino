import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-context-menu-item',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div
                class="menu-item"
                [class.disabled]="disabled"
                [class.destructive]="destructive"
                (click)="onClick($event)">
            <div class="icon">
                <ng-content select="[leading]"></ng-content>
            </div>
            <span class="label"><ng-content></ng-content></span>
            <span class="shortcut"><ng-content select="[trailing]"></ng-content></span>
            <div class="arrow" *ngIf="hasSubmenu">⌃</div>
        </div>
    `,
    styleUrl: 'context-menu-item.component.scss',
})
export class ContextMenuItemComponent {
    @Input() label = '';
    @Input() icon = '';
    @Input() shortcut = '';
    @Input() disabled = false;
    @Input() destructive = false;
    @Input() hasSubmenu = false;
    @Output() itemClick = new EventEmitter<void>();

    onClick(event: MouseEvent) {
        if (!this.disabled) {
            this.itemClick.emit();
            event.stopPropagation();
        }
    }
}
