import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../styles/styles.css'
import { boolean, object, string } from 'yup';

const jobTypeOptions = [
    { value: 'developer', label: 'Developer' },
    { value: 'it-sr', label: 'IT senior' },
    { value: 'it-jr', label: 'IT junior' },
]

export const FormikComponentPage = () => {

    return (
        <div>
            <h1>Formik components</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={object({
                    firstName: string().max(15, 'Debe de tener 15 caracteres o menos').required('Este campo es requerido'),
                    lastName: string().required('Este campo es requerido'),
                    email: string().email('El correo no tiene un formato valido').required('Este campo es requerido'),
                    jobType: string()
                        .notOneOf(["default",'it-jr'], 'Esta opción no es permitida'),
                    terms: boolean().oneOf([true], 'Debe de aceptar las condiciones')
                })}
            >
                {
                    (formik) => (
                        <Form noValidate onSubmit={formik.handleSubmit}>
                            <label htmlFor="firstName">First name</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name={'firstName'} component={'span'} />

                            <label htmlFor="lastName">Last name</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name={'lastName'} component={'span'} />

                            <label htmlFor="email">Email address</label>
                            <Field name='email' type='text' />
                            <ErrorMessage name={'email'} component={'span'} />

                            <label>Job select</label>
                            <Field name='jobType' as='select' >
                                <option value="default">Pick something</option>
                                {
                                    jobTypeOptions.map(option => (
                                        <option
                                            value={option.value}
                                            key={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name={'jobType'} component={'span'} />


                            <label>
                                <Field name='terms' type='checkbox' />
                                Terms and conditions
                            </label>
                            <ErrorMessage name={'terms'} component={'span'} />

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormikComponentPage