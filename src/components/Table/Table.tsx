import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const apiUrl = "https://randomuser.me/api/?results=10"; // Set the number of results to 10

    // Make an HTTP GET request to the API
    fetch(apiUrl)
      .then((response) => {
        // Check if the response was successful (status code 200-299)
        if (response.ok) {
          // Parse the response data as JSON
          return response.json();
        } else {
          throw new Error("Failed to retrieve data from the API");
        }
      })
      .then((data) => {
        // Process the retrieved data
        const updatedRows = data.results.map((user, index) => ({
          id: index + 1, // Set the ID based on the index
          lastName: user.name.last,
          firstName: user.name.first,
          age: user.dob.age,
        }));

        setRows(updatedRows);
        setIsLoading(false); // Data fetching is completed, set isLoading to false
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
        setIsLoading(false); // Error occurred, set isLoading to false
      });
  }, []);

  return (
    <div style={{ height: 400, width: "100%", paddingTop: 30 }}>
      {isLoading ? (
        // Render a loading indicator or skeleton component while data is being fetched
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20vh",
            fontSize: "100px",
            fontWeight: "bold",
          }}
        >
          HMMMMMM...
        </div>
      ) : (
        // Render the DataGrid when data is fetched
        <CustomContainer>
          <DataGrid rows={rows} columns={columns} checkboxSelection />
        </CustomContainer>
      )}
    </div>
  );
}
