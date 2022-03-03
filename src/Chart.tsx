import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";

interface ChartProps {
  coinId: string;
}

export default function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery("ohlcv", () => fetchCoinHistory(coinId));
  console.log(isLoading, data);
  return <div>Chart</div>;
}
