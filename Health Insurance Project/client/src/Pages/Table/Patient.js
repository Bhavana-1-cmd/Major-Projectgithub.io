import "./Patient.css";
import fakeData from "./Patient.json"
import * as React from "react";
import { useTable } from "react-table";



function Patient() {
  
  const data = React.useMemo(() => fakeData , []);
  const columns = React.useMemo(
    () => [
       
      {
        Header: "Sno.",
        accessor: "Sno.",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "Email",
      },
      {
        Header: "Amount",
        accessor: "Amount",
      },
      {
        Header: "Disease",
        accessor: "Disease",
      },
      {
        Header: "Document",
        accessor: "Document",
      },
      {
        Header: "Date of claim",
        accessor: "date_of_claim",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Patient;