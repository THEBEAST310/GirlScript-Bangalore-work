import React from "react";
import  {Component} from "react" ;
import "./App.css";
import Lazy from "./components/Lazy/Lazy";

// components

const Home = Lazy(() => import("./components/Home/Home"));
const SHEET_ID = '1BiCQCalaA6-dfnY03RWMxb5VCe-wz2RCgz4HbPjcBPA';
const ACCESS_TOKEN = 'ya29.a0AfH6SMCuEcf-yuLEdzntaN4t-mS9z0_PCduVZONgGAD3tMleJ-_PB0pFChIeCt3UYS2QOuLE0iCzZTTsK0bfZGhxQ5bSy0Zpx2RKsRWqLn10RWsTdpFaGcFZfkhHgn54YRJ-Aqb4SbPAkA24UStLRhKp0srKEZmKZpkJ';

class App extends React.Component {
  createSheetValues = () => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`  
      },
      body: JSON.stringify({
        requests: [
          {
            "insertDimension": {
              "range": {
                "sheetId": 0,
                "dimension": "ROWS",
                "startIndex": 0,
                "endIndex": 1
              },
              "inheritFromBefore": false
            }
          },
        ],
      })
    })
  }
  
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
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:B6`,
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
  deleteSheetValues = () => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`  
      },
      body: JSON.stringify({
        requests: [
          {
            "deleteDimension": {
              "range": {
                "sheetId": 0,
                "dimension": "ROWS",
                "startIndex": 0,
                "endIndex": 1
              }
            }
          },
        ],
      })
    })
  }
  

  
  render() {
    return (
      <div className="App">
        <button onClick={this.createSheetValues}>Create a new row</button>
        <br></br>
        <button onClick={this.getSheetValues}>Get sheet values</button>
        <br></br>
        <button onClick={this.updateSheetValues}>Update A1</button>
        <br></br>
        <button onClick={this.deleteSheetValues}>Delete the first row</button>
      </div>
    );
  }
}
export default App;



