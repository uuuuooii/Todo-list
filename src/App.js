import { Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import "./App.css";
import Detail from "./pages/Detail";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" exact="true" element={<TodoList />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
