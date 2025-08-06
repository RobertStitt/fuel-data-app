import { AgGridReact } from "ag-grid-react";
import { useEffect, useState, type JSX } from "react";
import { Heart } from "lucide-react";
import useDataStore, { type StoreState } from "../store";

const DashboardChart: React.FC = () => {
  const { autoData } = useDataStore((state: StoreState) => state);
  const [rowData, setRowData] = useState<any>([]);
  const [colDefs, setColDefs] = useState<any>([]);
  const [favorites, setFavorites] = useState([]);

  const defaultColDef = {
    flex: 1,
  };

  const toggleFavorite = (index: number) => {
    const attributes = rowData[index];
    const favoriteItem = {
      index,
      attributes,
    };

    setFavorites((previous: any) => {
      const favoriteAlready = previous.find(
        (fav: { index: number }) => fav.index === favoriteItem.index
      );

      if (favoriteAlready) {
        return previous.filter((fav: any) => fav.index !== favoriteItem.index);
      } else {
        return [...previous, { ...favoriteItem }];
      }
    });
  };

  const favoriteButton = (value: { node: { childIndex: number } }) => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    );
    return (
      <button
        className="!border-0 outline-none focus:!outline-none hover:!border-0"
        onClick={() => toggleFavorite(value?.node.childIndex)}
      >
        <Heart
          className="w-5 h-5"
          fill={
            savedFavorites?.some(
              (fav: any) => fav.index === value?.node.childIndex
            )
              ? "red"
              : "none"
          }
        />
      </button>
    );
  };

  useEffect(() => {
    if (autoData && autoData.length > 0) {
      const columns: {
        field: string;
        cellRenderer?: (value: any) => void | JSX.Element;
      }[] = Object.keys(autoData[0]).map((key) => ({
        field: key,
      }));

      columns.push({
        field: "Favorite",
        cellRenderer: favoriteButton,
      });
      setColDefs(columns);
      setRowData(autoData);
    }
  }, [autoData]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    }
  }, []);

  return (
    <div className="mx-auto max-w-(--breakpoint-2xl)">
      <div style={{ width: "100%", height: "600px" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default DashboardChart;
