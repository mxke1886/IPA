import React from 'react'
import InputField from '../../atoms/inputField/InputField';
import { Container, Spinner } from 'react-bootstrap';
import Select from '../../atoms/select/Select';
import TextButton from "../../atoms/buttons/textButton/TextButton"
import MyDatePicker from '../../molecules/myDatePicker/MyDatePicker';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from "yup";
import Section from '../../atoms/section/Section'
import Toast from '../../atoms/toast/Toast'

export default function CustomerForm(props) {

    const [showToast, setShowToast] = React.useState(false)

    return (
        <Formik
            enableReinitialize
            initialValues={{
                salutation: props.customer.salutation,
                firstName: props.customer.first_name,
                lastName: props.customer.last_name,
                birthday: props.customer.birthdate,
                gender: props.customer.gender
            }}
            onSubmit={values => {
                console.log(values)
            }}
            validationSchema={Yup.object().shape({
                salutation: Yup.string()
                    .required("Dieses Feld wird benötigt"),
                firstName: Yup.string()
                    .required("Dieses Feld wird benötigt"),
                lastName: Yup.string()
                    .required("Dieses Feld wird benötigt"),
                gender: Yup.string()
                    .required("Dieses Feld wird benötigt")

            })}
        >
            {props => {
                const {
                    values,
                    handleChange,
                    handleSubmit,
                    setFieldValue
                } = props;
                return (
                        <FormikForm onSubmit={handleSubmit} className="formik-form">
                            <Toast
                                variant={"success"}
                                show={showToast}
                                onClose={() => setShowToast(false)}
                                delay={2500}
                                message={"Daten wurden erfolgreich gespeichert"}
                            />
                            <Section>
                                <h3>Persönliche Daten</h3>
                                <Select
                                    options={['Herr', 'Frau']}
                                    name={'salutation'}
                                    label={'Anrede'}
                                    value={values.salutation}
                                    onChange={handleChange}
                                />
                                <InputField
                                    label={"Vorname"}
                                    name={"firstName"}
                                    value={values.firstName}
                                    placeholder={"Max"}
                                    type={"text"}
                                    onChange={handleChange}
                                />
                                <InputField
                                    label={"Nachname"}
                                    name={"lastName"}
                                    placeholder={"Muster"}
                                    type={"text"}
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                                <MyDatePicker
                                    label={"Geburtstag"}
                                    selected={values.birthday === undefined ? new Date() : new Date(values.birthday)}
                                    onChange={(e) => { setFieldValue("birthday", e) }}
                                />
                                <Select
                                    options={['Männlich', 'Weiblich', 'Anderes']}
                                    name={'gender'}
                                    label={'Geschlecht'}
                                    value={values.gender}
                                    onChange={handleChange}
                                />
                                <TextButton action={() => setShowToast(true)} align="right">Speichern</TextButton>
                            </Section>
                        </FormikForm>
                );
            }}
        </Formik>
    )
}
