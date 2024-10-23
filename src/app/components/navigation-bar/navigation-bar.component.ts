import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "../button/button.component";

interface NavigationButton {
    label: string;
    icon?: string;
    action?: () => void;
    size: 'small' | 'medium' | 'large',
    style: 'filled' | 'tinted' | 'gray' | 'plain'
    disabled: boolean
}

@Component({
    selector: 'i-navigation-bar',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
    @Input() title: string = '';
    @Input() leadingButtons: NavigationButton[] = [];
    @Input() trailingButtons: NavigationButton[] = [];
    @Input() useLargeTitle: boolean = false;
    @Input() centerTitle: boolean = false;
    @Input() showShadow: boolean = true;
}
