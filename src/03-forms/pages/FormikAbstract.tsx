import { Formik, Form } from 'formik'
import '../styles/styles.css'
import { boolean, object, string } from 'yup';
import { TextInput, Select, Checkbox } from '../components';


const jobTypeOptions = [
    { value: 'default', label: 'Pick something' },
    { value: 'developer', label: 'Developer' },
    { value: 'it-sr', label: 'IT senior' },
    { value: 'it-jr', label: 'IT junior' },
]

export const FormikAbstractPage = () => {

    return (
        <div>
            <h1>Formik abstract</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: 'default',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={object({
                    firstName: string().max(15, 'Debe de tener 15 caracteres o menos').required('Este campo es requerido'),
                    lastName: string().required('Este campo es requerido'),
                    email: string().email('El correo no tiene un formato valido').required('Este campo es requerido'),
                    jobType: string()
                        .notOneOf(["default", 'it-jr'], 'Esta opción no es permitida'),
                    terms: boolean().oneOf([true], 'Debe de aceptar las condiciones')
                })}
            >
                {
                    (formik) => (
                        <Form noValidate onSubmit={formik.handleSubmit}>
                            <TextInput name='firstName' label='First name' placeholder='write a name'></TextInput>
                            <TextInput name='lastName' label='Last name'></TextInput>
                            <TextInput name='email' label='Email address'></TextInput>

                            <Select
                                label={'Job select'} name={'jobType'}
                            >
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
                            </Select>

                            <Checkbox label={'Terms and conditions'} name={'terms'}></Checkbox>

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormikAbstractPage