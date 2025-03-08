import { useFormik } from 'formik'
import '../styles/styles.css'
import { object, string } from 'yup';

export const FormikYupPage = () => {

    const {
        handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validationSchema: object({
            firstName: string().max(15, 'Debe de tener 15 caracteres o menos').required('Este campo es requerido'),
            lastName: string().required('Este campo es requerido'),
            email: string().email('El correo no tiene un formato valido').required('Este campo es requerido')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div>
            <h1>Formik yup</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    {...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName &&
                    <span>{errors.firstName}</span>
                }
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName &&
                    <span>{errors.lastName}</span>
                }

                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email &&
                    <span>{errors.email}</span>
                }

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormikYupPage