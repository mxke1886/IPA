import React from 'react'
import InputField from '../../atoms/inputField/InputField'
import { Formik, Form as FormikForm } from 'formik'
import { Container } from 'react-bootstrap'
import TextButton from '../../atoms/textButton/TextButton'
import { login } from '../../../services/AuthenticationService'
import Section from '../../atoms/section/Section'
import { useEffect } from 'react'
import Toast from '../../atoms/toast/Toast'

export default function LoginPage(props) {

    const [showToast, setShowToast] = React.useState(false)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            props.history.push("/customers");
        }
    })

    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            onSubmit={values => {
                login(values.email, values.password)
                    .then(() => {
                        let token = localStorage.getItem("token")
                        if (token) {
                            props.setAuthorization(token)
                        }
                    })
                    .catch(e => {
                        setShowToast(true)
                    })
            }}
        >
            {props => {
                const {
                    values,
                    handleChange
                } = props;
                return (

                    <Container>
                        <Toast
                            variant={"danger"}
                            show={showToast}
                            onClose={() => setShowToast(false)}
                            delay={5000}
                            message={"Login fehlgeschlagen"}
                        />
                        <Section style={{width: "25px"}}>
                            <FormikForm>
                                <InputField
                                    label={"E-Mail"}
                                    type={"email"}
                                    placeholder={"Ihre E-Mail"}
                                    name={"email"}
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <InputField
                                    label={"Passwort"}
                                    type={"password"}
                                    placeholder={"Ihr Passwort"}
                                    name={"password"}
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <TextButton type="submit">Anmelden</TextButton>
                            </FormikForm>
                        </Section>
                    </Container>
                )
            }}
        </Formik>
    )
}
