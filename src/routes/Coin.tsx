import { useState } from "react";
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
  const { coinId } = useParams<CoinParams>();
  const { state } = useLocation<RouteState>();
  console.log(coinId, state);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
