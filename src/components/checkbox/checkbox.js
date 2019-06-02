import React from 'react'
import CheckboxCC from './checkboxStyled'
class Checkbox extends React.Component {
    render() {
        return (
            <label className="toggle">
                <CheckboxCC/>
                <input className="toggle__input" type="checkbox"/>
                <span className="toggle__label">
                <h3 className="toggle__text">Remember me!</h3>
                </span>
            </label>
        )
    }
};
export default Checkbox;