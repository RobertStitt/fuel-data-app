import DashboardChart from "../Components/DashboardChart";
const Home = () => {
  return (
    <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
      <h1 className="text-2xl font-bold mb-10">Auto Fuel Economy</h1>
      <DashboardChart />
    </div>
  );
};

export default Home;
