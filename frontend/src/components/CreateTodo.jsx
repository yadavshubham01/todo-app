import { useState } from "react";

export function CreateTodo() {
  const [title ,setTitle] =useState("");
  const [description,setDescription]=useState("")


  return <div>
    <div>
    <input id="title" style={{
        padding: 20,
        margin: 20,
        backgroundColor:"black",
        color: "white"
    }}
     type="text" placeholder="title" onChange={function(e){
        const value =e.target.value;
        setTitle(e.target.value);
     }}></input><br></br>
    <input id="desc" style={{
        padding: 20,
        margin: 20,
        backgroundColor:"black",
        color: "white"
    }} type="text" placeholder="description" onChange={function(e){
        const value =e.target.value;
        setDescription(e.target.value);
     }} ></input> <br/>

    <button style={{
        padding: 20,
        margin: 20,
        backgroundColor:"black",
        color: "white"
    }} onClick={() =>{
        fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify ({
                title: title,
                description: description
            }),
            headers: {
                "Content-Type":"application/json"
            }
        })
         .then(async function(res) {
            const json =await res.json();
            alert("Todo added");
         })
    }}> Add  a todo</button>
    </div>
  </div>
}