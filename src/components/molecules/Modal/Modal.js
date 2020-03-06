import React from 'react'
import { Modal as ReactBSModal } from 'react-bootstrap'
import TextButton from '../../atoms/buttons/textButton/TextButton'

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
