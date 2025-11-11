import React, { useState } from 'react'

function Billreminder(){
    const [reminders,setreminders]=useState([])

    const[inputvalue,setinputvalue]=useState([])
    function addReminder(){
        if (inputvalue.trim() === "") return;

        setreminders([reminders,inputvalue]);
        setinputvalue("")
    }
    return (
        <>
       <div style={{ textAlign: "center", marginTop: "10px" }}>
      
      <input
        type="text"
        placeholder="Enter Reminder"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
      />

      <button onClick={addReminder}>
        Add Reminder
      </button>

      <h3>Total Reminders: {reminders.length}</h3>

      {reminders.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

    </div>
     </>
    );
}
export default Billreminder;