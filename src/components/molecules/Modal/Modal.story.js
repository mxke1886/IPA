import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from "react-bootstrap";
import Modal from "./Modal";

export default {
    title: "molecules | Modal",
    component: Modal,
    decorators: [withA11y]
};

export const Modals = () => (
    <Fragment>
        <Container>
            <Modal
                title={"Modal Example"}
                show={true}
                onHide={() => {console.log("onHide triggered")}}
                secondaryButtonAction={() => {console.log("Secondary Button clicked")}}
                secondaryButtonText={"Sekundär"}
                primaryButtonAction={() => {console.log("Primary Button clicked")}}
                primaryButtonText={"Primär"}
                message={"Dies ist ein Test"}
            />
        </Container>
    </Fragment>
);