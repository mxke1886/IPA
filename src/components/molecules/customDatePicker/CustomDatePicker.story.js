import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from "react-bootstrap";
import { Formik } from "formik";
import CustomDatePicker from "./CustomDatePicker";

export default {
    title: "molecules | CustomDatePicker",
    component: CustomDatePicker,
    decorators: [withA11y]
};

export const CustomDatePickers = () => (
    <Formik
        initialValues={{
            birthday: new Date()
        }}
    >
        {props => {
            const {
                values,
                setFieldValue
            } = props;
            return (
                <Fragment>
                    <Container>
                        <CustomDatePicker
                            label={"Geburtstag"}
                            selected={values.birthday}
                            onChange={(e) => { setFieldValue("birthday", e) }}
                            dateFormat={"dd.MM.yyyy"}
                        />
                    </Container>
                </Fragment>
            )
        }}
    </Formik>
);