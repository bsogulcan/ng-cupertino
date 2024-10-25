import { Component } from '@angular/core';

@Component({
  selector: 'app-context-menu-divider',
  standalone: true,
  imports: [],
  template: `<div class="divider"></div>`,
  styles: [`
    .divider {
      height: 1px;
      background: var(--misc-menu-large-seperator);
      margin: 4px 0;
    }

    @media (prefers-color-scheme: dark) {
      .divider {
        background: rgba(255, 255, 255, 0.08);
      }
    }
  `]})
export class ContextMenuDividerComponent {

}
