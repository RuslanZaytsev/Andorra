export type TOption = {
    value: string | number;
    label: string
}

export interface IInputContext {
    onChange: (value: unknown) => void;
    value: unknown;
    type: 'text' | 'password' | 'number';
    clear: () => void;
    onFocus: () => void;
    openDropdown: () => void;
    className: string;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

