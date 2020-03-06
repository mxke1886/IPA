import React from 'react'
import { Form } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.css"

export default function CustomDatePicker(props) {
    return (
        <div>
            <Form.Label>{props.label}</Form.Label>
            <Form.Group>
                <DatePicker
                    selected={props.selected}
                    className="datepicker"
                    onChange={props.onChange}
                    dateFormat={props.dateFormat}
                />
            </Form.Group>
        </div>
    )
}

CustomDatePicker.defaultProps = {
    dateFormat: "dd.MM.yyyy"
};

CustomDatePicker.propTypes = {
    /**
     * Define the label over the TextField
     */
    label: PropTypes.string.isRequired,
    /**
     * Set the date that is selected from start
     */
    selected: PropTypes.instanceOf(Date).isRequired,
    /**
     * Function which gets executed when Input changes
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Format for the date (f.e. "dd.MM.yyyy")
     */
    dateFormat: PropTypes.string
};
