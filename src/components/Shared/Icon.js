import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(props) {
    return (
        <i style={{color: props.color, margin: props.addMargin === true ? "0 5px" : props.addMargin }}>
            <FontAwesomeIcon 
                icon={props.icon} 
                size={props.size}
                rotation={props.rotation}
                flip={props.flip}
                border={props.border && true} 
                spin={props.spin && true}
                pulse={props.pulse && true}    
                inverse={props.inverse && true}    
            />
        </i>
    )
}
export default Icon;
