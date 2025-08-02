import { useEffect } from "react";
import { type StoreState } from "../store";
import useDataStore from "../store";

const Home = () => {
  const { autoData, setAutoData, setAutoDataLoading } = useDataStore(
    (state: StoreState) => state
  );

  useEffect(() => {
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
  }, []);

  return (
    <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <p>This is the home page of your application.</p>
    </div>
  );
};

export default Home;
