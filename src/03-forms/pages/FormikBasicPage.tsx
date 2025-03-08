import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({
        firstName, lastName, email
    }: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if (!firstName) {
            errors.firstName = 'Required'
        } else if (firstName.length >= 15) {
            errors.firstName = 'Must to be 15 characters or less'
        }

        if (!lastName) {
            errors.lastName = 'Required'
        } else if (lastName.length >= 10) {
            errors.lastName = 'Must to be 10 characters or less'
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors

    }

    const { values, handleChange, handleSubmit, errors, touched , handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validate,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div>
            <h1>Formik basic tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    name='firstName'
                    onBlur={handleBlur}
                    value={values.firstName}
                    onChange={handleChange}
                />
                {touched.firstName && errors.firstName &&
                    <span>{errors.firstName}</span>
                }
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    name='lastName'
                    onBlur={handleBlur}
                    value={values.lastName}
                    onChange={handleChange}
                />
                {touched.lastName && errors.lastName &&
                    <span>{errors.lastName}</span>
                }

                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    name='email'
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                />
                {touched.email && errors.email &&
                    <span>{errors.email}</span>
                }

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormikBasicPage