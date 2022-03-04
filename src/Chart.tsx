import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import { IcoinId, IHistorical } from "./type";

export default function Chart({ coinId }: IcoinId) {
  const { isLoading, data } = useQuery<IHistorical[]>("ohlcv", () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "...Loding😅"
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((chartData) => ({
                x: new Date(chartData.time_open),
                y: [
                  chartData.open.toFixed(3),
                  chartData.close.toFixed(3),
                  chartData.high.toFixed(3),
                  chartData.low.toFixed(3),
                ],
              })),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 250,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 3,
            },

            xaxis: {
              axisBorder: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            colors: ["#adea3a"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
