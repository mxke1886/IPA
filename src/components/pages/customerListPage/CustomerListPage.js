import React from 'react'
import { getCustomers, getCustomerData } from '../../../services/CustomerService'
import { useEffect } from 'react'
import CustomerList from '../../organisms/customerList/CustomerList'
import { Container } from 'react-bootstrap'
import Toast from '../../atoms/toast/Toast'

export default function CustomerListPage(props) {
    const [customers, setCustomers] = React.useState([])
    const [customerDatas, setCustomerDatas] = React.useState([])

    const [showToast, setShowToast] = React.useState(false)

    const getCustomerList = () => {
        getCustomers()
            .then(res => {
                setCustomers(res.data)
            }).then(getCustomerData()
                .then(res => {
                    setCustomerDatas(res.data)
                }))
            .catch(e => {
                setShowToast(true)
            })
    }

    useEffect(() => {
        getCustomerList()
    }, [])

    return (
        <Container>
            <Toast
                variant={"danger"}
                show={showToast}
                onClose={() => setShowToast(false)}
                delay={0}
                message={"Laden der Daten fehlgeschlagen"}
                position={"relative"}
            />
            {!showToast ? 
            <CustomerList
                customers={customers}
                customerDatas={customerDatas}
            /> : null}
        </Container>

    )
}
