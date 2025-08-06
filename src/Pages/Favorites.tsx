import { AgGridReact } from "ag-grid-react";
import useDataStore, { type StoreState } from "../store";
import { useEffect, useState, type JSX } from "react";

const Favorites: React.FC = () => {
  const { favoritesList } = useDataStore((state: StoreState) => state);
  const [rowData, setRowData] = useState<any>([]);
  const [colDefs, setColDefs] = useState<any>([]);
  useEffect(() => {
    if (favoritesList && favoritesList?.length > 0) {
      const columns: {
        field: string;
        cellRenderer?: (value: any) => void | JSX.Element;
      }[] = Object.keys(favoritesList[0]?.attributes).map((key) => ({
        field: key,
      }));

      setColDefs(columns);
      setRowData(favoritesList.map((fav: any) => fav.attributes));
    }
  }, [favoritesList]);
  return (
    <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
      <h1 className="text-2xl font-bold mb-10">Favorites</h1>
      <p>This is the favorited auto data.</p>
      <br />
      <div style={{ width: "100%", height: "600px" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          defaultColDef={{
            flex: 2,
          }}
        />
      </div>
    </div>
  );
};

export default Favorites;
