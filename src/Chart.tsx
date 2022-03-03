import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export default function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>("ohlcv", () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "...Loding😅"
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
          }}
        />
      )}
    </div>
  );
}
