
import { TextInput } from '../components'
import { Form, Formik } from 'formik'

import '../styles/styles.css'
import { object, ref, string } from 'yup'

interface InitialValues {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
}

export function RegisterFormikPage() {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                }}
                validationSchema={object({
                    name: string().min(2).max(15).required(),
                    email: string().email().required(),
                    password: string().min(2).required(),
                    repeatPassword: string().min(2).oneOf([ref('password')], 'Las contraseñas deben de coincidir').required()
                })}
                onSubmit={(values: InitialValues) => {
                    console.log(values)
                }}
            >
                {(formik) => (
                    <Form>
                        <TextInput label={'Name'} name={'name'} ></TextInput>
                        <TextInput label={'Email'} name={'email'} ></TextInput>
                        <TextInput label={'Password'} name={'password'} type='password' />
                        <TextInput label={'Repeat password'} name={'repeatPassword'} type='password' />
                        <button type="submit">Create</button>
                        <button onClick={formik.handleReset}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default RegisterFormikPage