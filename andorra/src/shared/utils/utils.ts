export const formatNumberValue = (value: string): string => {
    if (!value) return value;

    if (value.startsWith('.')) {
        value = '0' + value;
    }

    if (value.includes('.')) {
        value = parseFloat(value).toString();
    }

    if (value.endsWith('.0', 10)) {
        const num = parseFloat(value);
        value = isNaN(num) ? value : num.toString();
    }

    return value;
};