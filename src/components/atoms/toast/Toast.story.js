import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import Toast from './Toast';
import { Container, Row, Col } from 'react-bootstrap';


export default {
    title: "atoms | Toast",
    component: Toast,
    decorators: [withA11y]
};

export const Toasts = () => (
    <Fragment>
        <Container style={{ padding: "20px" }}>
            <h1 style={{ color: "#FFFFFF" }}>All Toasts</h1>
            <Row>
                <Col md="2">
                    <Toast
                        show={true}
                        message={"Toast Primary"}
                        onClose={() => {}}
                        delay={3000}
                        position={"relative"}
                        variant={"primary"}
                    />
                </Col>
                <Col md="2">
                    <Toast
                        show={true}
                        message={"Toast Secondary"}
                        onClose={() => {}}
                        delay={3000}
                        position={"relative"}
                        variant={"secondary"}
                    />
                </Col>
                <Col md="2">
                    <Toast
                        show={true}
                        message={"Toast Success"}
                        onClose={() => {}}
                        delay={3000}
                        position={"relative"}
                        variant={"success"}
                    />
                </Col>
                <Col md="2">
                    <Toast
                        show={true}
                        message={"Toast Danger"}
                        onClose={() => {}}
                        delay={3000}
                        position={"relative"}
                        variant={"danger"}
                    />
                </Col>
                <Col md="2">
                    <Toast
                        show={true}
                        message={"Toast Warning"}
                        onClose={() => {}}
                        delay={3000}
                        position={"relative"}
                        variant={"warning"}
                    />
                </Col>
                <Col md="2">
                    <Toast
                        show={true}
                        message={"Toast Info"}
                        onClose={() => {}}
                        delay={3000}
                        position={"relative"}
                        variant={"info"}
                    />
                </Col>
                </Row>
                <Row>
                <Col md="2">
                    <Toast
                        show={true}
                        message={"Toast Light"}
                        onClose={() => {}}
                        delay={3000}
                        position={"relative"}
                        variant={"light"}
                    />
                </Col>
                <Col md="2">
                    <Toast
                        show={true}
                        message={"Toast Dark"}
                        onClose={() => {}}
                        delay={3000}
                        position={"relative"}
                        variant={"dark"}
                    />
                </Col>
            </Row>
        </Container>
    </Fragment>
);