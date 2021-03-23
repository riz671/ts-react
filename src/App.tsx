import React from "react";
import ToDoList from "./components/ToDoList";
import NewToDos from "./components/NewToDos";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  return (
    <div className="App">
      <NewToDos />
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
