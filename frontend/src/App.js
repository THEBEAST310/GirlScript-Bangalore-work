import React from "react";
import  {Component} from "react" ;
import "./App.css";
import Lazy from "./components/Lazy/Lazy";

// components

const Home = Lazy(() => import("./components/Home/Home"));
const SHEET_ID = '1BiCQCalaA6-dfnY03RWMxb5VCe-wz2RCgz4HbPjcBPA';
const ACCESS_TOKEN = 'ya29.a0AfH6SMD0lYvp5srthMTu3_lX_mB5EF9HkxKh88RYV82CzVANO7vnLOyoUTCsvlpp1Zull5IYGaybNmkF_1SKEYSjVD7D4JLvaS18858cxL-LZph2pE_klgD6YMDGIXKcdystjDPxjSIoB2Mn85zZdeFBeDOhk3asFus';

class App extends React.Component {
  updateSheetValues = () => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours. 
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({

        requests: [{
          repeatCell: {
            range: {
              startColumnIndex: 0,
              endColumnIndex: 1,
              startRowIndex: 0,
              endRowIndex: 1,
              sheetId: 0
            },
            cell: {
              userEnteredValue: {
                "numberValue": 40
              },
            },
            fields: "*"
          }
        }]

      })
    })
  }
  




  getSheetValues = async () =>{
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:B5`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`  
    }
    });
    const data = await request.json();
    console.log(data);
    return data;
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.getSheetValues}>Get sheet values</button>
        <br></br>
        <button onClick={this.updateSheetValues}>Update A1</button>
      </div>
    );
  }
}


export default App;
