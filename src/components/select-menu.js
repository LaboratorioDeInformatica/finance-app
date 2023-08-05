import React from "react";

const SelectMenu = (props) => {
    const { lista, ...otherProps } = props; // Desestruturar a propriedade lista e as outras props

    const options = lista.map((option, index) => {
        return (
            <option key={index} value={option.value}>{option.label}</option>
        )
    });

    return (
        <select {...otherProps}>
            {options}
        </select>
    )
};

export default SelectMenu;