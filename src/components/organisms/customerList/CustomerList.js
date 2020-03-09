import React from 'react'
import { Container, Table } from 'react-bootstrap'
import PropTypes from "prop-types";

export default function CustomerList(props) {
    return (
        <Container>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Vorname</th>
                        <th>Nachname</th>
                        <th>E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {props.customers.map((customer) => {
                        return (
                            <tr key={customer.id} style={{cursor: "pointer"}} onClick={() => {props.history.push("/customers/" + customer.id)}}>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                {props.customerDatas.map((customerData) => {
                                    if (customer.id === customerData.id) {
                                        return <td key={customerData.id}>{customerData.email}</td>
                                    }else{
                                        return null
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

CustomerList.propTypes = {
    /**
     * Object with data of all customers to display
     */
    customerDatas: PropTypes.object.isRequired,
    /**
     * Object with all customers to display
     */
    customers: PropTypes.object.isRequired
};