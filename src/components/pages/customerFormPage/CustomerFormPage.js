import React, { useEffect } from 'react'
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import { getCustomersById, getCustomerDataById } from '../../../services/CustomerService';
import { getCountries } from '../../../services/CountryRegionService';
import { getRegions } from '../../../services/CountryRegionService';
import Toast from '../../atoms/toast/Toast'
import CustomerContactForm from '../../organisms/customerContactForm/CustomerContactForm'
import CustomerDetailsForm from '../../organisms/customerDetailsForm/CustomerDetailsForm'

export default function CustomerFormPage(props) {
    const id = props.match.params.id;

    const [showToast, setShowToast] = React.useState(false)

    const [customer, setCustomer] = React.useState({
        salutation: '',
        first_name: '',
        last_name: '',
        birthdate: new Date(),
        gender: ''
    })
    const [customerData, setCustomerData] = React.useState({
        address: '',
        city: '',
        region: '',
        plz: '',
        country: '',
        email: '',
        telephone_private: '',
        telephone_mobile: '',
        telephone_business: '',
        reachable_by: ''
    })

    const [countries, setCountries] = React.useState([])
    const [regions, setRegions] = React.useState([])

    const [isLoading, setIsLoading] = React.useState(true)

    function getCustomerAndData() {
        setIsLoading(true)
        getCustomersById(id)
            .then(res => {
                setCustomer(res.data)
            }).then(getCustomerDataById(id)
                .then(res => {
                    setCustomerData(res.data)
                })).then(setIsLoading(false))
            .catch(e => {
                setShowToast(true)
            })
    }

    function getCountriesData() {
        getCountries()
            .then(res => {
                let items = []
                res.data.forEach(item => {
                    items.push(item.name)
                })
                setCountries(items)
            })
            .catch(e => {
                setShowToast(true)
            })
    }

    function getRegionsData() {
        getRegions()
            .then(res => {
                let items = []
                res.data.forEach(item => {
                    items.push(item)
                })
                setRegions(items)
            })
            .catch(e => {
                setShowToast(true)
            })
    }

    function saveCustomer(customer) {
        setCustomer(customer)
    }

    function saveCustomerData(customerData) {
        setCustomerData(customerData)
    }

    useEffect(() => {
        getCustomerAndData()
        getCountriesData()
        getRegionsData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Formik
            enableReinitialize={!isLoading}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {props => {
                const {
                    handleSubmit
                } = props;
                return (
                    isLoading ? <Container style={{ textAlign: "center" }}><Spinner animation="border" /></Container> :
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
                                <Container>
                                    <h2>Profil von {customer.first_name} {customer.last_name}</h2>
                                    <Row>
                                        <Col>
                                            <CustomerDetailsForm
                                                customer={customer}
                                                handleSave={saveCustomer}
                                            />
                                        </Col>
                                        <Col xs={12} md={8}>
                                            <CustomerContactForm
                                                customerData={customerData}
                                                countries={countries}
                                                regions={regions}
                                                handleSave={saveCustomerData}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                                : null}

                        </Container>
                );
            }}
        </Formik>
    )
}
