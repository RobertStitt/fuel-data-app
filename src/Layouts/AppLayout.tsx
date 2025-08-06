import { Outlet } from "react-router";
import AppSidebar from "./AppSidebar";
import useDataStore, { type StoreState } from "../store";
import { useEffect } from "react";

const LayoutContent: React.FC = () => {
  const { autoData, setAutoData, setAutoDataLoading } = useDataStore(
    (state: StoreState) => state
  );

  useEffect(() => {
    if (autoData?.length > 0) return; // Prevent refetching if data is already loaded
    const fetchData = async () => {
      setAutoDataLoading(true);
      try {
        const response = await fetch(
          "https://csv-parser-api-xnwm.onrender.com/api/data"
        );
        const { data } = await response.json();
        setAutoData(data);
      } catch (error) {
        console.error("Error fetching auto data:", error);
      } finally {
        setAutoDataLoading(false);
      }
    };
    fetchData();
  }, [autoData]);
  return (
    <div className="min-h-screen xl:flex">
      <div className="p-[30px] min-w-[180px]">
        <AppSidebar />
      </div>
      <div className="flex-1 transition-all duration-300 ease-in-out text-black p-10 pt-8 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return <LayoutContent />;
};

export default AppLayout;
