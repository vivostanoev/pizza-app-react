import { useState } from "react";

export function useHistoryOrders() {
  const [history, setHistory] = useState([]);
  return {
    history,
    setHistory
  };
}