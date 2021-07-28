import { useState } from "react";

export function useOpenLogin(defaultChoice) {
    const [isOpen, setIsOpen] = useState(defaultChoice);
        return {
        isOpen,
        setIsOpen
    };
}