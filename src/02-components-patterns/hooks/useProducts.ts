import { useEffect, useRef, useState } from "react"
import { useProductArgs } from "../interfaces/product.interface"

export const useProducts = ({ product, value = 0, onChange }: useProductArgs) => {

    const [counter, setCounter] = useState(value)

    const increaseBy = (valueIncrease: number): void => {
        const newValue = Math.max(counter + valueIncrease, 0)
        setCounter(newValue)
        onChange && onChange({ product, count: newValue })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])


    return {
        counter,
        increaseBy
    }
}
