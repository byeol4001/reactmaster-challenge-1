import { useParams } from "react-router";

interface CoinParams {
  coinId: string;
}
export default function Coin() {
  const { coinId } = useParams<CoinParams>();
  console.log(coinId);
  return <div>Coin</div>;
}
