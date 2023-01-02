import { FormControlLabel, Grid, Checkbox } from "@mui/material"
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik'
import { useEffect, useState } from "react"
import { apiStore } from "../api/store"
import { SignUpStyle } from "./signUpStyle"

interface FormValues {
    email: string
    password: string
    confirmPassword: string
}

const InnerForm = (props: FormikProps<FormValues>) => {
    const { touched, errors } = props
    const { fetch, apiSucess, apiError } = apiStore()
    const [error, setError] = useState('')

    useEffect(() => {
        fetch()
    }, [])

    const handleSubmit = () => {
        if (!touched.email && !errors.email && !touched.password && !errors.password)
            console.log(apiSucess)

        if (apiError !== '')
            setError('Bad Connection')
    }

    return (
        <>
            <Form style={SignUpStyle.formContainer} onSubmit={handleSubmit}>
                <label htmlFor="email" style={SignUpStyle.labelContainer}>E-mail Address</label>
                <Grid item xs={6}>
                    <Field type="email" name="email" style={SignUpStyle.inputContainer} />
                    {touched.email && errors.email && <div>{errors.email}</div>}
                </Grid>
                <label htmlFor="password" style={SignUpStyle.labelContainer}>Passwort</label>
                <Grid item xs={6}>
                    <Field type="password" name="password" style={SignUpStyle.inputContainer} />
                </Grid>
                <label htmlFor="confirmPassword" style={SignUpStyle.labelContainer}>Passwort wiederholen</label>

                <Grid item xs={6}>
                    <Field type="password" name="confirmPassword" style={SignUpStyle.inputContainer} />
                    {touched.password && errors.password && <div>{errors.password}</div>}
                </Grid>

                <FormControlLabel style={SignUpStyle.checkBox}
                    value="end"
                    control={<Checkbox />}
                    label="Ich habe die AGB und Datenschutyerklaerung gelesen und stimme ausdrücklich zu"
                    labelPlacement="end"
                />
                <button type="submit"style={SignUpStyle.registerButton} >Registrieren</button>
            </Form>
            <div>{error}</div>
        </>
    )
}

interface MyFormProps {
    initialEmail?: string;
    initialPassowrd?: string;
    initialConfirmPassword?: string;
}

export const SignUpForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: props.initialPassowrd || '',
            confirmPassword: props.initialConfirmPassword || ''
        };
    },

    validate: (values: FormValues) => {
        let errors: FormikErrors<FormValues> = {}
        if (!values.email)
            errors.email = "Email is required"
        else if (!isValidEmail(values.email))
            errors.email = 'Invalid email address'
        else
            errors.email = ''

        if (!values.password)
            errors.password = "Password is required"
        else if (!values.confirmPassword)
            errors.password = "Password is required"
        else if (values.password !== values.confirmPassword)
            errors.password = `Password doesn't match`

        return errors
    },

    handleSubmit: (values) => {
        console.log(values)
    },
})(InnerForm)

function isValidEmail(email: string) {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
        return true
}
