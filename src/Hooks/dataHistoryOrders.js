import { useState } from "react";

export function useDataHistoryOrders() {
  const [dataOrder, setDataOrder] = useState([]);
  return {
    dataOrder,
    setDataOrder
  };
}