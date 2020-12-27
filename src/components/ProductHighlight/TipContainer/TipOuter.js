import React from 'react'
import './TipOuter.css';

function TipOuter({ children }) {
    return (
        <div className="tip-outer-container">
            { children }
        </div>
    )
}

export default TipOuter
