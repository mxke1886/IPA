import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'

export default function Toast(props) {

    useEffect(() => {
        if (props.show === true) {
            setTimeout(() => {
                props.onClose()
            }, props.delay);
        }
    })

    return (
        <div>
            <Alert variant={props.variant} show={props.show}
                style={{
                    position: 'fixed',
                    top: "15px",
                    right: "4%",
                    zIndex: 1000
                }}>
                {props.message}
            </Alert>
        </div>
    )
}
