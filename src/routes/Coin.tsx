import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { Link } from "react-router-dom";
import { fetchCoinInfo, fetchCoinTicker } from "../api";
import Chart from "../Chart";
import Price from "../Price";
import {
  Container,
  Header,
  Loader,
  Title,
  Overview,
  OverviewItem,
  Description,
  Tabs,
  Tab,
} from "../style/Style";
import { TickerData, CoinParams, RouteState, InfoData } from "../type";

export default function Coin() {
  const { coinId } = useParams<CoinParams>();
  const { isLoading: infoLoding, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: chartLoading, data: tickerData } = useQuery<TickerData>(
    ["chart", coinId],
    () => fetchCoinTicker(coinId),
    {
      refetchInterval: 7000,
    }
  );
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  const history = useHistory();

  const movePrevPage = () => {
    history.goBack();
  };

  const loading = infoLoding || chartLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          <div onClick={movePrevPage}>&#9666;</div>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price :</span>
              <span>{tickerData?.quotes.USD.price.toFixed(10)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickerData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickerData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/:coinId/price`}>
              <Price coinId={coinId} />
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
