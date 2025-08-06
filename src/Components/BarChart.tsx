import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useRef, type FC } from "react";
import { Bar, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: FC<{ data: any; handleClick?: (event: any) => void }> = ({
  data,
  handleClick,
}) => {
  const chartRef = useRef<ChartJS | any>(null);
  return (
    <Bar
      ref={chartRef}
      data={data}
      onClick={(e) =>
        handleClick && handleClick(getElementAtEvent(chartRef.current, e))
      }
    />
  );
};

export default BarChart;
