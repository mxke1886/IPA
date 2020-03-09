import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from "react-bootstrap";
import Select from "./Select";
import { Formik } from "formik";

export default {
    title: "atoms | Input / Select",
    component: Select,
    decorators: [withA11y]
};

export const Selects = () => (
    <Formik
        initialValues={{
            chooser: ""
        }}
    >
        <Fragment>
            <Container>
                <Select
                    options={['test1', 'test2', 'test3']}
                    name={'chooser'}
                    label={'A few tests'}
                />
            </Container>
        </Fragment>
    </Formik>
);