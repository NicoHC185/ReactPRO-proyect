import { ErrorMessage, useField } from 'formik'

interface Props {
    label: string
    name: string
    [x: string]: any
}

export const Checkbox = (props: Props) => {
    const [field] = useField({ ...props, type: 'checkbox' })
    //usando meta
    // const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
        <>
            <label>
                <input type='checkbox'  {...field} {...props} />
                {props.label}
            </label>
            <ErrorMessage name={props.name} component={'span'}></ErrorMessage>
            {/* opcional para mostrar error com meta (viene desde useField) */}
            {/* {
                meta.touched && meta.error && (
                    <span>{meta.error}</span>
                )
            } */}
        </>
    )
}
