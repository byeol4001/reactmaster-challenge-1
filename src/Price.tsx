import { useQuery } from "react-query";
import { fetchCoinTicker } from "./api";
import { IcoinId, TickerData } from "./type";
import { PriceWrap } from "./style/Style";
export default function Price({ coinId }: IcoinId) {
  const { isLoading, data } = useQuery<TickerData>(["chart", coinId], () =>
    fetchCoinTicker(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "loading...😅"
      ) : (
        <>
          <PriceWrap>
            <div>Price</div>
            <div>{data?.quotes.USD.price}</div>
          </PriceWrap>
          <PriceWrap>
            <div>
              percent change <span>1h</span>
            </div>
            <div>{data?.quotes.USD.percent_change_1h}</div>
          </PriceWrap>
          <PriceWrap>
            <div>
              percent change <span>6h</span>
            </div>
            <div>{data?.quotes.USD.percent_change_6h}</div>
          </PriceWrap>
          <PriceWrap>
            <div>
              percent change <span>12h</span>
            </div>
            <div>{data?.quotes.USD.percent_change_12h}</div>
          </PriceWrap>
          <PriceWrap>
            <div>
              percent change <span>24h</span>
            </div>
            <div>{data?.quotes.USD.percent_change_24h}</div>
          </PriceWrap>
          <PriceWrap>
            <div>
              percent change <span>7d</span>
            </div>
            <div>{data?.quotes.USD.percent_change_7d}</div>
          </PriceWrap>
        </>
      )}
    </div>
  );
}
