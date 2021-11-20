import { apiKey, baseId } from "./airtableIds";
import { calculateTotalMinutesWorked } from "./methods"
import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import Entry from "./components/Entry";
// import {
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

//AIRTABLE
const base = new Airtable({ apiKey: apiKey }).base(baseId);

function App() {

  const [entries, setEntries] = useState([]);

  //this method pulls in the data
  useEffect(() => {
   //pull in the 'goals' table view data
   base("entries")
     .select({ view: "Grid view" })
     .eachPage((records, fetchNextPage) => { 
       setEntries(records);
       // console.log(records)
       fetchNextPage();
     });
  }, []);

  let totalTimeWorked = calculateTotalMinutesWorked(entries) // will return a string


  return (
    <div style={{textAlign: "center", fontFamily: "'Roboto', sans-serif"}}>
      <h1>ELITEWEB.Co Work Log</h1>
      <p>Total time worked: {totalTimeWorked}  
      <br/>
      </p>
      
      <h3>All Entries</h3>
      {
      entries.map((entry, index) => (
        <Entry entry={entry} key={index}/>
      ))}
    </div>
  );
}

export default App;
