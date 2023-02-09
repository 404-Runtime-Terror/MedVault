import React from "react";
import styles from "./style.module.css";
import Navbar from "../../../components/Navbar";
import QRScanner from "../../../components/QRScanner";
import Button from "../../../components/Button";

import { DataGrid } from "@mui/x-data-grid";

import { RxCross2 } from "react-icons/rx";
import { style } from "@mui/system";

const Doctor = () => {
  const [result, setResult] = React.useState("No result");
  const [isQRScannerOpen, setIsQRScannerOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("No result");
  const [open, setOpen] = React.useState(false);

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <button
          className="button"
          onClick={() => {
            console.log(params.row);
            setOpen(true);
            setSelected(params.row);
          }}
        >
          Open
        </button>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <h1 className={styles.herotitle}>Doctor Dashboard</h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          title={isQRScannerOpen ? "Close QR Scanner" : "Open QR Scanner"}
          function={() => setIsQRScannerOpen(!isQRScannerOpen)}
        />
      </div>
      <br />
      <br />
      <div
        className={styles.QRScanner}
        style={{
          display: isQRScannerOpen ? "flex" : "none",
        }}
      >
        <h2>QR Scanner</h2>
        <div className={styles.qrcontainer}>
          <QRScanner setResut={setResult} />
          <div className={styles.result}>
            <h3>Result:{result.data}</h3>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div
          style={{
            height: 400,
            width: "100%",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>

      <div className={styles.pop} style={{ display: open ? "flex" : "none" }}>
        <RxCross2
          size="2rem"
          onClick={() => setOpen(false)}
          className={styles.cross}
        />
        <h1>{selected.id}</h1>
      </div>

      <br />
      <br />
      <br />
    </>
  );
};

export default Doctor;

// const doctor = () => {
//   return (
//     <div>
//       <h1>Doctor</h1>
//     </div>
//   );
// };

// export default doctor;
