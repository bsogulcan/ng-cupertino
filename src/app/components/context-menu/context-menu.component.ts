import {Component, ElementRef, EventEmitter, HostListener, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-context-menu',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div
                #menu
                class="context-menu"
                [class.visible]="isVisible"
                [@menuAnimation]="isVisible ? 'visible' : 'hidden'"
                [style.left.px]="x"
                [style.top.px]="y">
            <div class="menu-background">
                <div class="menu-content">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .context-menu {
            position: fixed;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform-origin: top left;
        }

        .context-menu.visible {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }

        .menu-background {
            background: var(--background-primary);
            backdrop-filter: blur(32px);
            -webkit-backdrop-filter: blur(32px);
            border-radius: 8px;
            box-shadow: 0 0px 32px rgba(0, 0, 0, 0.2);
            padding: 4px;
            min-width: 240px;
        }

        .menu-content {
            border-radius: 6px;
            overflow: hidden;
        }
    `],
    animations: [
        trigger('menuAnimation', [
            state('hidden', style({
                opacity: 0,
                transform: 'scale(0.95)',
            })),
            state('visible', style({
                opacity: 1,
                transform: 'scale(1)',
            })),
            transition('hidden => visible', [
                animate('100ms cubic-bezier(0.175, 0.885, 0.32, 1.175)')
            ]),
            transition('visible => hidden', [
                animate('80ms cubic-bezier(0.4, 0.0, 1, 1)')
            ])
        ])
    ],
})
export class ContextMenuComponent {
    @ViewChild('menu') menuElement!: ElementRef;
    @Output() closed = new EventEmitter<void>();

    isVisible = false;
    x = 0;
    y = 0;

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        if (this.isVisible && !this.menuElement.nativeElement.contains(event.target)) {
            this.close();
        }
    }

    @HostListener('window:blur')
    onWindowBlur() {
        this.close();
    }

    @HostListener('window:scroll')
    onWindowScroll() {
        if (this.isVisible) {
            this.close();
        }
    }

    open(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.isVisible = true;

        // Adjust position if menu would go off screen
        requestAnimationFrame(() => {
            const menu = this.menuElement.nativeElement;
            const rect = menu.getBoundingClientRect();
            const viewport = {
                width: window.innerWidth,
                height: window.innerHeight
            };

            if (rect.right > viewport.width) {
                this.x -= rect.right - viewport.width + 10;
            }
            if (rect.bottom > viewport.height) {
                this.y -= rect.bottom - viewport.height + 10;
            }
        });
    }

    close() {
        this.isVisible = false;
        this.closed.emit();
    }
}
