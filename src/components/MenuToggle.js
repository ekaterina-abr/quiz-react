import React from "react";
import Menu from "./Menu";
import './MenuToggle.css'

const MenuToggle = props => {
    const cls = ['MenuToggle', 'fa']

    if (props.isOpen) cls.push('fa-times')
    else cls.push('fa-bars')

    return (
            <React.Fragment>
                {props.isOpen ? <Menu onClose={props.onClose}/> : null}
                <i className={cls.join(' ')} onClick={props.onToggle}></i>
            </React.Fragment>
    )
}

export default MenuToggle