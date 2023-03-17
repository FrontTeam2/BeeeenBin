import { useState } from "react";

function useInputs(initialValue) {
    const [isValues, setIsValues] = useState(initialValue);

    const onChange = (e) => {
        setIsValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onReset = () => {
        setIsValues("");
    };

    return [isValues, onChange, onReset];
}

export default useInputs;
