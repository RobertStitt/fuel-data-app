import useDataStore, { type StoreState } from "../store";
import BarChart from "../Components/BarChart";

const Gallery: React.FC = () => {
  const { autoData } = useDataStore((state: StoreState) => state);

  const calculateAverage = (arr: number[]) => {
    if (arr.length === 0) return;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  };

  const dataBasedOnCylinders = {
    labels: Array.from(
      new Set(autoData?.map((item: { cylinders: string }) => item["cylinders"]))
    ).sort(),
    datasets: [
      {
        label: "Average Fuel Consumption (mpg) based on Cylinders",
        data: Array.from(
          new Set(autoData?.map((item: any) => item["cylinders"]))
        )
          .sort()
          .map((cyl: any) => {
            const filtered = autoData?.filter(
              (item: any) => item["cylinders"] === cyl
            );
            return calculateAverage(
              filtered.map((item: any) => Number(item.mpg))
            );
          }),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
      <h1 className="text-2xl font-bold mb-10">Gallery</h1>
      <div className="mb-20">
        <p>Average MPG based on number of cylinders</p>
        <BarChart data={dataBasedOnCylinders} />
      </div>
    </div>
  );
};

export default Gallery;
