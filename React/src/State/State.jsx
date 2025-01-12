import React from 'react'
import Class_state from './Class/Class_state'
import Fun_state from './Function/Fun_state'
import Fun_from_single from './Function/Fun_from_single'
import Fun_Multiple from './Function/Fun_Multiple'

function State() {
    return (
        <div>
            <h1>state in built-in object </h1>
            {/* state chnage same data properites access */}
            {/* state class and function */}
            {/* <Class_state /> */}
            {/* <Fun_state /> */}
            {/* <Fun_from_single /> */}
            <Fun_Multiple />
        </div>
    )
}

export default State