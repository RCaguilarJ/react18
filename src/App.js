import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./TodoButton";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "tomar curso de React", completed: true },
  { text: "Llorar por la ex ", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
        {[<TodoCounter />, <TodoList />]}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}
// React.Fragment recibe en el return algo que encapsula todo lo que debemos mostrar en nuestro componente
export default App;
