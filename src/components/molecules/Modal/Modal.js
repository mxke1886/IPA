import React from 'react'
import { Modal as ReactBSModal } from 'react-bootstrap'
import TextButton from '../../atoms/textButton/TextButton'
import PropTypes from "prop-types";

/**
 * Modal window for user interactions
 */
export default function Modal(props) {
    return (
        <ReactBSModal show={props.show} onHide={props.onHide} animation={props.animation}>
            <ReactBSModal.Header closeButton>
                <ReactBSModal.Title>{props.title}</ReactBSModal.Title>
            </ReactBSModal.Header>
            <ReactBSModal.Body>{props.message}</ReactBSModal.Body>
            <ReactBSModal.Footer>
                <TextButton variant="secondary" onClick={props.secondaryButtonAction}>
                    {props.secondaryButtonText}
                </TextButton>
                <TextButton variant="primary" onClick={props.primaryButtonAction}>
                    {props.primaryButtonText}
                </TextButton>
            </ReactBSModal.Footer>
        </ReactBSModal>
    )
}

Modal.defaultProps = {
    animation: true
};

Modal.propTypes = {
    /**
     * Define the title of the modal window
     */
    title: PropTypes.string.isRequired,
    /**
     * Decides if the modal window is showing or not
     */
    show: PropTypes.bool.isRequired,
    /**
     * Function which runs when modal window is closed
     */
    onHide: PropTypes.func.isRequired,
    /**
     * If the modal window should open with an animation
     */
    animation: PropTypes.bool,
    /**
     * The action which gets executed when secondary button is clicked
     */
    secondaryButtonAction: PropTypes.func.isRequired,
    /**
     * Text for the secondary button
     */
    secondaryButtonText: PropTypes.string.isRequired,
    /**
     * The action which gets executed when primary button is clicked
     */
    primaryButtonAction: PropTypes.func.isRequired,
    /**
     * Text for the primary button
     */
    primaryButtonText: PropTypes.string.isRequired,
    /**
     * Message that is displayed in the body of the modal window
     */
    message: PropTypes.string.isRequired
};