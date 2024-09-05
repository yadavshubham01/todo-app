import { useState,useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
   
  useEffect(()=>{
    fetch("http://localhost:3000/todo")
    .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
    })
    },[todos])

  return (
    <div>
       <CreateTodo></CreateTodo>
       <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
