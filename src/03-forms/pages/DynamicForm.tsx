import { Formik, Form } from "formik";

import formJson from '../data/customForm.json'
import { Select, TextInput } from "../components";
import { object, string } from "yup";

const initialValues: { [x: string]: any } = {}
const requiredFields: { [x: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value
    if (!input.validations) continue
    let schema = string()
    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength') {
            const minValue = (rule as any).value || 2
            schema = schema.min(minValue, `El valor tiene que ser mínimo de ${minValue} `)
        }
        if (rule.type === 'email') {
            schema = schema.email('El valor no es un email valido')
        }

    }
    requiredFields[input.name] = schema
}



export const DynamicForm = () => {


    return (
        <div>
            <h1>DynamicForm</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={object({ ...requiredFields })}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {
                    (formik) => (
                        <Form>
                            {
                                formJson.map(({ type, name, label, placeholder, options }) => {
                                    if (['input', 'password', 'email'].includes(type)) {
                                        return <TextInput
                                            key={name}
                                            label={label}
                                            name={name}
                                            placeholder={placeholder}
                                            type={type as any}
                                        />
                                    } else if (type === 'select') {
                                        return <Select
                                            key={name}
                                            label={label}
                                            name={name}>
                                            <option value={''}>Selecciona una opción</option>
                                            {
                                                options?.map(option => (
                                                    <option key={option.id} value={option.id}>{option.label}</option>
                                                ))
                                            }
                                        </Select>
                                    } else {
                                        return null
                                    }
                                })
                            }
                            <button type="submit">submit</button>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}

export default DynamicForm