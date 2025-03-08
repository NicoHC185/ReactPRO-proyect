import { ErrorMessage, useField } from "formik"


// interface OptionSelect {
//     value: string,
//     label: string
// }

interface Props {
    label: string
    name: string
    placeholder?: string
    // options?: OptionSelect[],

    [x: string]: any
}


export const Select = (props: Props) => {
    const [field] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component={'span'}></ErrorMessage>
        </>
    )
}
