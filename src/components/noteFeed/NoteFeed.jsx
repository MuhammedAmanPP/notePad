import React, { useState } from 'react'
import './NoteFeed.css'
function NoteFeed() {
    let inputData=''
    const [note,setNote]=useState([inputData])
    function getNote(e){
        inputData=e.target.value   
    }

    const addNote=()=>{
        setNote([...note,inputData]) 
        const noteInput=document.getElementById('note')
        noteInput.value=''        
    }

    function deleteNote(index){
        const allItem=note
        allItem.splice(index,1)
        setNote(allItem)
        addNote()
    }
    function editNote(index){
        const noteInput=document.getElementById('note')
        noteInput.focus()
        note[index]=noteInput.value;
    }
  return (
    <div className='noteFeed-container'>
        <h1>Add Note</h1>
        <div className="addNote">
          <input type="text" onChange={getNote} id='note'/>  
          <button onClick={addNote}>Submit</button> 
        </div>
       {
        note.map((item,index)=>{
           return(
            <div className={item ? 'note-feed':'hide'}>
            <h3>{item}</h3>
            <i className="fa-solid fa-trash-can" onClick={()=>deleteNote(index)}></i>
            <i className="fa-solid fa-pen-to-square" onClick={()=> editNote(index)}></i>
           </div>
           )
        })
       }       
    </div>
  )
}

export default NoteFeed