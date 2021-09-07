import { useState } from "react";

export function useAddress(defaultChoice) {
    const [isAddress, setIsAddress] = useState(defaultChoice);
        return {
        isAddress,
        setIsAddress
    };
}