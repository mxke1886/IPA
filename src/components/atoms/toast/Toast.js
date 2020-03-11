import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import PropTypes from "prop-types";

/**
 * Toast to display messages to the user
 */
export default function Toast(props) {

    useEffect(() => {
        if (props.show === true) {
            if (props.delay) {
                setTimeout(() => {
                    props.onClose()
                }, props.delay);
            }
        }
    })

    return (
        <div>
            <Alert variant={props.variant} show={props.show}
                style={{
                    position: props.position,
                    top: "15px",
                    right: "4%",
                    zIndex: 1000
                }}>
                {props.message}
            </Alert>
        </div>
    )
}

Toast.defaultProps = {
    position: "fixed"
};

Toast.propTypes = {
    /**
     * Defines if the Toast is showing or not
     */
    show: PropTypes.bool.isRequired,
    /**
     * Message that will get displayed
     */
    message: PropTypes.string.isRequired,
    /**
     * Function which gets executed when Toast closes
     */
    onClose: PropTypes.func.isRequired,
    /**
     * Amount of time (ms) that the Toast is visible. Can be left empty, so Toast appears constantly.
     */
    delay: PropTypes.number,
    /**
     * For the position styling
     */
    position: PropTypes.string,
    /**
     * Color variant of Toast
     */
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]),
};
