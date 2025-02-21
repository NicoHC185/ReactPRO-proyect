import { useEffect, useRef, useState } from "react"
import { useProductArgs } from "../interfaces/product.interface"

export const useProducts = ({ product, value = 0, onChange }: useProductArgs) => {

    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    const increaseBy = (valueIncrease: number): void => {
        if (isControlled.current) {
            return onChange!({ product, count: valueIncrease })
        }
        const newValue = Math.max(counter + valueIncrease, 0)
        setCounter(newValue)
    }

    useEffect(() => {
        setCounter(value)
    }, [value])


    return {
        counter,
        increaseBy
    }
}
