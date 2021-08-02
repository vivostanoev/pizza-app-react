import { useState } from "react";

export function useHistory(defaultChoice) {
    const [isHistory, setIsHistory] = useState(defaultChoice);
        return {
        isHistory,
        setIsHistory
    };
}