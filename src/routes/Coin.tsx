import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Container, Header, Loader, Title } from "../style/Style";

interface CoinParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  const { coinId } = useParams<CoinParams>();
  const { state } = useLocation<RouteState>();
  console.log(coinId, state);

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
