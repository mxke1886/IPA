import React from 'react'
import InputField from '../../atoms/inputField/InputField';
import { Col, Row } from 'react-bootstrap';
import Select from '../../atoms/select/Select';
import TextButton from "../../atoms/textButton/TextButton"
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from "yup";
import Section from '../../atoms/section/Section'
import PropTypes from "prop-types";
import Toast from '../../atoms/toast/Toast';

/**
 * First part of form to display a customers contact data
 */
export default function CustomerContactForm(props) {

    const [showToast, setShowToast] = React.useState(false)

    return (
        <Formik
            enableReinitialize
            initialValues={{
                address: props.customerData.address,
                city: props.customerData.city,
                region: props.customerData.region,
                postalCode: props.customerData.plz,
                country: props.customerData.country,
                email: props.customerData.email,
                telephone_private: props.customerData.telephone_private,
                telephone_mobile: props.customerData.telephone_mobile,
                telephone_business: props.customerData.telephone_business,
                reachable_by: props.customerData.reachable_by,
                countries: props.countries,
                regions: props.regions
            }}
            onSubmit={values => {
                console.log(values)
                setShowToast(true)
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Bitte geben Sie eine valide E-Mail ein")
                    .required("Dieses Feld wird benötigt"),
                address: Yup.string()
                    .required("Dieses Feld wird benötigt"),
                postalCode: Yup.number()
                    .required("Dieses Feld wird benötigt")
                    .typeError("Darf keine Buchstaben beinhalten"),
                city: Yup.string()
                    .required("Dieses Feld wird benötigt"),
                telephone_private: Yup.string()
                    .required("Dieses Feld wird benötigt")
                    .matches(/^(?:(?:|0{1,2}|\+{0,2})41(?:|\(0\))|0)([1-9]\d)(\d{3})(\d{2})(\d{2})$/, {
                        message: 'Bitte geben Sie eine valide Telefonnummer ein',
                        excludeEmptyString: true
                    }),
                telephone_mobile: Yup.string()
                    .required("Dieses Feld wird benötigt")
                    .matches(/^(?:(?:|0{1,2}|\+{0,2})41(?:|\(0\))|0)([1-9]\d)(\d{3})(\d{2})(\d{2})$/, {
                        message: 'Bitte geben Sie eine valide Telefonnummer ein',
                        excludeEmptyString: true
                    }),
                telephone_business: Yup.string()
                    .required("Dieses Feld wird benötigt")
                    .matches(/^(?:(?:|0{1,2}|\+{0,2})41(?:|\(0\))|0)([1-9]\d)(\d{3})(\d{2})(\d{2})$/, {
                        message: 'Bitte geben Sie eine valide Telefonnummer ein',
                        excludeEmptyString: true
                    }),

            })}
        >
            {props => {
                const {
                    values,
                    handleChange,
                    handleSubmit
                } = props;
                return (
                        <FormikForm onSubmit={handleSubmit} className="formik-form">
                            <Toast
                                variant={"success"}
                                show={showToast}
                                onClose={() => setShowToast(false)}
                                delay={2500}
                                message={"Kontaktdaten wurden erfolgreich gespeichert"}
                            />
                            <Section>
                                <h3>Kontaktdaten</h3>
                                <Row>
                                    <Col>
                                        <InputField
                                            label={"Strasse"}
                                            name={"address"}
                                            placeholder={"Musterstrasse 12"}
                                            type={"text"}
                                            value={values.address}
                                            onChange={handleChange}
                                        />
                                        <InputField
                                            label={"PLZ"}
                                            name={"postalCode"}
                                            placeholder={"8000"}
                                            type={"text"}
                                            value={values.postalCode}
                                            onChange={handleChange}
                                        />
                                        <InputField
                                            label={"Ort"}
                                            name={"city"}
                                            placeholder={"Zürich"}
                                            type={"text"}
                                            value={values.city}
                                            onChange={handleChange}
                                        />
                                        <Select
                                            options={values.country === 'Schweiz' ? values.regions : []}
                                            name={'region'}
                                            label={'Kanton'}
                                            value={values.country === 'Schweiz' ? values.region : null}
                                            onChange={handleChange}
                                            disabled={values.country !== 'Schweiz'}
                                        />
                                        <Select
                                            options={values.countries}
                                            name={'country'}
                                            label={'Land'}
                                            value={values.country}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <InputField
                                            label={"E-Mail"}
                                            name={"email"}
                                            placeholder={"max@muster.ch"}
                                            type={"email"}
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        <InputField
                                            label={"Telefon Privat"}
                                            name={"telephone_private"}
                                            placeholder={"+41791112233"}
                                            type={"text"}
                                            value={values.telephone_private}
                                            onChange={handleChange}
                                        />
                                        <InputField
                                            label={"Telefon Mobil"}
                                            name={"telephone_mobile"}
                                            placeholder={"+41791112233"}
                                            type={"text"}
                                            value={values.telephone_mobile}
                                            onChange={handleChange}
                                        />
                                        <InputField
                                            label={"Telefon Geschäft"}
                                            name={"telephone_business"}
                                            placeholder={"+41791112233"}
                                            type={"text"}
                                            value={values.telephone_business}
                                            onChange={handleChange}
                                        />
                                        <Select
                                            options={['Post', 'E-Mail', 'Telefon Privat', 'Telefon Mobil', 'Telefon Geschäft']}
                                            name={'reachable_by'}
                                            label={'Erreichbar per'}
                                            value={values.reachable_by}
                                            onChange={handleChange}
                                        />
                                        <TextButton type="submit" align="right">Speichern</TextButton>
                                    </Col>
                                </Row>
                            </Section>
                        </FormikForm>
                );
            }}
        </Formik>
    )
}

CustomerContactForm.propTypes = {
    /**
     * Customer Data object of which data gets displayed
     */
    customerData: PropTypes.object.isRequired,
    /**
     * Array containing all of Switzerlands regions
     */
    regions: PropTypes.array.isRequired,
    /**
     * Array containing every country in the world
     */
    countries: PropTypes.array.isRequired
};