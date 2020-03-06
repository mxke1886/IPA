import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import PropTypes from "prop-types";
import { useField } from 'formik';
import "../inputField/InputField.css"

/**
 * Select that can be used in forms.
 */
const Select = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <Form.Group name={props.name}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                className={"cornered"}
                as="select"
                {...props}
                {...field}
                isInvalid={props.value === undefined && meta.touched}
            >
                {props.value === undefined ? <option value={undefined}>Bitte auswählen</option> : null}
                {props.options.map(function (item, i) {
                    return <option key={i} value={item}>{item}</option>
                })}
            </Form.Control>
            {meta.error && meta.touched ? <FormControl.Feedback type="invalid">{meta.error}</FormControl.Feedback> : ""}
        </Form.Group>
    )
}
export default Select

Select.propTypes = {
    /**
     * Define the label over the TextField
     */
    label: PropTypes.string.isRequired,
    /**
     * The options which the select should show
     */
    options: PropTypes.array.isRequired,
    /**
     * Define the ID of the field which basically sets the label's "for" attribute and input's "id" attribute
     */
    name: PropTypes.string.isRequired
};