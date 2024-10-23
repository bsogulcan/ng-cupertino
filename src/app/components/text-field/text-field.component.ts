import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "../button/button.component";

@Component({
    selector: 'i-text-field',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './text-field.component.html',
    styleUrl: './text-field.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextFieldComponent),
            multi: true
        }
    ]
})
export class TextFieldComponent implements ControlValueAccessor {
    label: string = '';
    @Input() placeholder: string = '';
    @Input() type: string = 'text';
    @Input() id: string = `apple-text-field-${Math.random().toString(36).substr(2, 9)}`;
    @Input() disabled: boolean = false;
    @Input() showClearButton: boolean = true;
    @Input() showBorder: boolean = false;

    value: string = '';
    isFocused: boolean = false;

    private onChange: (value: string) => void = () => {
    };
    private onTouched: () => void = () => {
    };

    onFocus() {
        this.isFocused = true;
    }

    onBlur() {
        this.isFocused = false;
        this.onTouched();
    }

    onInputChange(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.value = value;
        this.onChange(value);
    }

    clearInput() {
        this.value = '';
        this.onChange('');
    }

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
