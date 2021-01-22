import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList"; // referencia da pasta 
import 'bootstrap/dist/css/bootstrap.min.css';

  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);
