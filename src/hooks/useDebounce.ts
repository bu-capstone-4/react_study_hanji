import React, { useEffect, useState } from "react";

export default function useDebounce(value: string) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [value])
    return debouncedValue;
}