import React from 'react'

export const Alert = (props) => {
    return(
        props.alert!=null && (
            <div className="Alert"> 
                {props.alert}
            </div>
        )
    )
}
