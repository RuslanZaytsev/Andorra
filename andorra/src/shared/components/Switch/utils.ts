import classNames from "classnames";


export const stylesUtils = (isOn: boolean, style: string, activeStyle: string) => {
    const styles = classNames(style, {
        [activeStyle]: isOn
    });

    return styles;
};