import { useState } from "react";

export function useUser() {
    const [username, setUsername] = useState();
        return {
        username,
        setUsername
    };
}