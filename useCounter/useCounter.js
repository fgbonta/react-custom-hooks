import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, SetCounter] = useState(initialValue);

    const increment = (value = 1) => {
        //de esta manera toma el valor actual y no el anterior
        SetCounter((current) => current + value);
    }

    const decrement = (value = 1) => {
        if (counter === 0) return;
        SetCounter((current) => current - value);
    }

    const reset = () => {
        SetCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }

}