import { useState } from 'react'

import "./App.css"
import { Todo } from './componentes/Todo'
import { TodoForm } from './componentes/TodoForm'
import { Search } from './componentes/Search'


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"Criar funcionalidade x no sistema",
      category:"Tra balho",
      isCompleted: false,
    },
    {
      id:2,
      text:"Ir para acdemia",
      category:"Trabalho",
      isCompleted: false,
    },
    {
      id:3,
      text:"Estudar React",
      category:"Estudo",
      isCompleted: false,
    },
  ])
const [search,setSearch] = ("")

const addTodo = (text,category) =>{
  const newTodos = [...todos,{
    id: Math.floor(Math.random()*1000),
    text,
    category,
    isCompleted:false,
  },
];

 setTodos(newTodos);   
}

const removeTodo = (id) => {
  const newTodos = [...todos]
  const filteredTodos = newTodos.filter((todo)=>
  todo.id !== id? todo :null)
  setTodos(filteredTodos)
}
const completeTodo = (id) =>{
  const newTodos = [...todos]
  newTodos.map((todo)=> todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
  setTodos(newTodos)
}
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className="todo-list">
        {todos  
         
        .map((todo)=>(
        <Todo key={todo.id} todo={todo}  removeTodo={removeTodo}  completeTodo={completeTodo}/>
        ))}
      </div>
    <TodoForm addTodo= {addTodo}/>

   </div>
      
   )

    
}

/*.filter((todo) =>{
          todo.text.toLowerCase().includes(search.toLowerCase())
         }) */

export default App
