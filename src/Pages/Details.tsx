import { AgGridReact } from "ag-grid-react";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import type { AutoData } from "../store";

const Details: React.FC = () => {
  const location = useLocation();
  const [rowData, setRowData] = useState<AutoData>([]);
  const [colDefs, setColDefs] = useState<any>([]);
  const { data } = location.state || { data: [] };

  useEffect(() => {
    if (data && data?.length > 0) {
      const columns: {
        field: string;
      }[] = Object.keys(data[0]).map((key) => ({
        field: key,
      }));

      setColDefs(columns);
      setRowData(data);
    }
  }, [data]);

  return (
    <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
      <h1 className="text-2xl font-bold mb-10">Details</h1>
      <p>This is the Details based on number of cylinders.</p>
      <br />
      <div style={{ width: "100%", height: "600px" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={{ flex: 2 }}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default Details;
