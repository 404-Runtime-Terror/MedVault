import React, { useEffect } from "react";
import styles from "./style.module.css";
import Navbar from "../../../components/Navbar";
import QRScanner from "../../../components/QRScanner";
import Button from "../../../components/Button";

import { DataGrid } from "@mui/x-data-grid";

import { RxCross2 } from "react-icons/rx";
import { MdModeEditOutline } from "react-icons/md";
import Prescriptionform from "../../../components/PrescriptionForm";

const Doctor = (props) => {
  const [result, setResult] = React.useState("No result");
  const [isQRScannerOpen, setIsQRScannerOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("No result");
  const [open, setOpen] = React.useState(false);
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  const rows = [
    {
      id: 1,
      fullname: "patient1",
      age: 35,
      Prescription: "ColdFlew ,Dolo,Crosin",
      date: "9-9-2023",
    },
    {
      id: 2,
      fullname: "patient2",
      age: 35,
      Prescription: "ColdFlew ,Dolo,Crosin",
      date: "9-9-2023",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullname", headerName: "Full name", width: 130 },
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
      <Navbar isDoctor={props.isDoctor} />
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

        <MdModeEditOutline
          size="2rem"
          onClick={() => setIsEditOpen(!isEditOpen)}
          className={styles.edit}
        />
        <h1>Prescription</h1>
        <br />

        {isEditOpen ? (
          <Prescriptionform />
        ) : (
          <>
            <h2>{selected.fullname}</h2>
            <h3>{selected.date}</h3>
            <h3>{selected.age}</h3>
            <h3>{selected.Prescription}</h3>{" "}
          </>
        )}
      </div>

      <br />
      <br />
      <br />
    </>
  );
};

export default Doctor;
