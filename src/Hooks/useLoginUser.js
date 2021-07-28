import { useState } from "react";

export function useLoginUser(defaultChoice) {
    const [isLogin, setIsLogin] = useState(defaultChoice);
        return {
        isLogin,
        setIsLogin
    };
}